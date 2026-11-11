// Uso: node theme/prepare.mjs jobs/ID work/ID
// Copia tema + slide in una cartella di lavoro e risolve "image: <ricerca>" con foto di Wikimedia Commons.
// Una foto viene usata solo se il suo titolo c'entra con la ricerca; se non se ne trova una buona, la slide
// diventa una slide di solo testo (niente foto a caso, niente icona decorativa).
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const here = path.dirname(fileURLToPath(import.meta.url))
const [src, dst] = process.argv.slice(2)
if (!src || !dst) throw new Error('uso: node theme/prepare.mjs jobs/ID work/ID')

fs.rmSync(dst, { recursive: true, force: true })
fs.mkdirSync(path.join(dst, 'public/img'), { recursive: true })
fs.mkdirSync(path.join(dst, 'layouts'), { recursive: true })
fs.copyFileSync(path.join(here, 'style.css'), path.join(dst, 'style.css'))
for (const f of fs.readdirSync(path.join(here, 'layouts'))) fs.copyFileSync(path.join(here, 'layouts', f), path.join(dst, 'layouts', f))

let md = fs.readFileSync(path.join(src, 'slides.md'), 'utf8')
const UA = { 'User-Agent': 'SynapseSlides/1.0 (school project; contact via GitHub repository)' }
const used = new Set()

// ---- pertinenza: il titolo del file deve contenere le parole importanti della ricerca
const STOP = new Set(['with', 'from', 'that', 'this', 'view', 'views', 'interior', 'exterior', 'during', 'near', 'over', 'under', 'photo', 'image', 'picture', 'close', 'large', 'small', 'old', 'modern'])
const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase()
const words = s => norm(s).split(/[^a-z0-9]+/).filter(x => x.length >= 4 && !STOP.has(x))
function relevant(title, query) {
  const sig = words(query)
  if (!sig.length) return false
  const t = norm(String(title).replace(/^File:/i, ''))
  const hits = sig.filter(w => t.includes(w.length > 5 ? w.slice(0, -1) : w)).length   // "rovers" ~ "rover"
  return hits >= Math.min(2, sig.length)
}
const BAD = /map|diagram|flag|logo|coat|locator|svg|scan|book|page|bottle|brand|advert|poster|cover|album|label|packag|menu|screenshot|icon/i

async function findPhoto(q, orig) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=20'
    + '&gsrsearch=' + encodeURIComponent(q + ' filetype:bitmap') + '&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=1400'
  const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(20000) })
  if (!r.ok) throw new Error('HTTP ' + r.status)
  const pages = Object.values((await r.json()).query?.pages || {}).sort((a, b) => a.index - b.index)
  for (const p of pages) {
    const i = p.imageinfo?.[0]
    if (!i || i.mime !== 'image/jpeg' || i.width < 1000 || i.height < 600 || i.width < i.height * 1.1 || used.has(i.thumburl)) continue
    if (BAD.test(p.title) || !relevant(p.title, orig)) continue
    used.add(i.thumburl)
    return i.thumburl
  }
  return ''
}

const clean = v => String(v).trim().replace(/^["']|["']$/g, '')
let n = 0
const re = /^image:[ \t]*(.+)$/gm
const jobs = []
for (const m of md.matchAll(re)) jobs.push(clean(m[1]))
const map = new Map()
for (const q of jobs) {
  if (map.has(q)) continue
  if (/^https?:\/\//i.test(q)) { map.set(q, q); continue }
  let file = ''
  try {
    // prima la ricerca intera, poi le ultime 3 parole; in ogni caso la foto deve essere pertinente alla ricerca originale
    const w = q.split(/\s+/).filter(Boolean)
    const tries = [q, w.slice(-3).join(' ')].filter((x, k, a) => x && a.indexOf(x) === k)
    let u = ''
    for (const t of tries) { u = await findPhoto(t, q); if (u) break }
    if (u) {
      const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(30000) })
      if (r.ok) { n++; file = `/img/p${n}.jpg`; fs.writeFileSync(path.join(dst, 'public', file), Buffer.from(await r.arrayBuffer())) }
    }
  } catch (e) { console.log('foto non trovata per "' + q + '": ' + e.message) }
  console.log(file ? 'foto ' + file + ' <- ' + q : 'nessuna foto per: ' + q)
  map.set(q, file)
}

// ---- riscrive le intestazioni delle slide: foto trovata -> percorso; non trovata -> slide di solo testo
const BLOCK = /^---[ \t]*\n((?:(?:[A-Za-z_-]+:[^\n]*|[ \t]+[^\n]*)\n)+)---[ \t]*$/gm
const TEXT_LAYOUT = { 'image-right': 'cards', 'image-left': 'cards', fullimage: 'section' }
const blocks = [...md.matchAll(BLOCK)]
let out = '', pos = 0
blocks.forEach((m, i) => {
  const start = m.index, end = start + m[0].length
  const body = md.slice(end, i + 1 < blocks.length ? blocks[i + 1].index : md.length)
  out += md.slice(pos, start)
  let fm = m[1].replace(/^icon:[ \t]*["']?✦["']?[ \t]*\n/m, '')       // la stella decorativa non si usa più
  const im = /^image:[ \t]*(.*)$/m.exec(fm)
  if (im) {
    const f = map.get(clean(im[1])) || ''
    if (f) fm = fm.replace(/^image:.*$/m, 'image: ' + f)
    else {
      fm = fm.replace(/^image:.*\n?/m, '')
      const lay = (/^layout:[ \t]*(\S+)/m.exec(fm) || [])[1]
      let to = TEXT_LAYOUT[lay]
      if (to === 'cards' && (body.match(/^- /gm) || []).length > 4) to = 'default'
      if (to) fm = fm.replace(/^layout:.*$/m, 'layout: ' + to).replace(/^icon:.*\n?/m, '')
    }
  }
  out += '---\n' + fm + '---'
  pos = end
})
out += md.slice(pos)
md = out
fs.writeFileSync(path.join(dst, 'slides.md'), md)
