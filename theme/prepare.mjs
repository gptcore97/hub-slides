// Uso: node theme/prepare.mjs jobs/ID work/ID
// Copia tema + slide in una cartella di lavoro e risolve "image: <ricerca>" con foto di Wikimedia Commons.
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

async function findPhoto(q) {
  const url = 'https://commons.wikimedia.org/w/api.php?action=query&format=json&generator=search&gsrnamespace=6&gsrlimit=12'
    + '&gsrsearch=' + encodeURIComponent(q + ' filetype:bitmap') + '&prop=imageinfo&iiprop=url|mime|size&iiurlwidth=1400'
  const r = await fetch(url, { headers: UA, signal: AbortSignal.timeout(20000) })
  if (!r.ok) throw new Error('HTTP ' + r.status)
  const pages = Object.values((await r.json()).query?.pages || {}).sort((a, b) => a.index - b.index)
  for (const p of pages) {
    const i = p.imageinfo?.[0]
    if (!i || i.mime !== 'image/jpeg' || i.width < 1000 || i.height < 600 || i.width < i.height * 1.1 || used.has(i.thumburl)) continue
    if (/map|diagram|flag|logo|coat|locator|svg|scan|book|page/i.test(p.title)) continue
    used.add(i.thumburl)
    return i.thumburl
  }
  return ''
}

let n = 0
const re = /^image:[ \t]*(.+)$/gm
const jobs = []
for (const m of md.matchAll(re)) jobs.push(m[1].trim().replace(/^["']|["']$/g, ''))
const map = new Map()
for (const q of jobs) {
  if (map.has(q)) continue
  if (/^https?:\/\//i.test(q)) { map.set(q, q); continue }
  let file = ''
  try {
    // prima la ricerca intera, poi versioni più semplici (ultime 3 parole, poi prime 2)
    const w = q.split(/\s+/).filter(Boolean)
    const tries = [q, w.slice(-3).join(' '), w.slice(0, 2).join(' ')].filter((x, k, a) => x && a.indexOf(x) === k)
    let u = ''
    for (const t of tries) { u = await findPhoto(t); if (u) break }
    if (u) {
      const r = await fetch(u, { headers: UA, signal: AbortSignal.timeout(30000) })
      if (r.ok) { n++; file = `/img/p${n}.jpg`; fs.writeFileSync(path.join(dst, 'public', file), Buffer.from(await r.arrayBuffer())) }
    }
  } catch (e) { console.log('foto non trovata per "' + q + '": ' + e.message) }
  console.log(file ? 'foto ' + file + ' <- ' + q : 'nessuna foto per: ' + q)
  map.set(q, file)
}
md = md.replace(re, (_, v) => { const k = v.trim().replace(/^["']|["']$/g, ''); const f = map.get(k); return f ? 'image: ' + f : '' })
fs.writeFileSync(path.join(dst, 'slides.md'), md)
