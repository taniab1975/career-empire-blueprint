const response = await fetch('./register.json');
if (!response.ok) throw new Error('Cannot load asset register');
const data = await response.json();
const prefix = new URL('../../', location.href);
const local = path => new URL(path.replace(/^\//, ''), prefix).href;
const make = (tag, text, cls) => { const e = document.createElement(tag); if (text) e.textContent = text; if (cls) e.className = cls; return e; };
const link = (text, href) => { const a = make('a', text); a.href = href; return a; };
const batch = data.batches[0];
const labels = {'awaiting-review':'awaiting batch review',approved:'approved','changes-requested':'changes requested','on-hold':'on hold',rejected:'rejected',superseded:'superseded'};
document.querySelector('#totals').textContent = batch.items.length + ' complete items in Batch 1 · ' + data.items.filter(i => i.approval.status === 'approved').length + ' approved';
document.querySelector('#batch-title').textContent = batch.label + ' · revision ' + batch.revision;
document.querySelector('#summary').textContent = 'Review all ten together. Each place includes its own building or structures, planting, furniture and other parts.';
const nav = document.querySelector('nav'); const cards = document.querySelector('#cards'); cards.className = '';
for (const member of batch.items) {
 const item = data.items.find(i => i.id === member.itemId && i.revision === member.revision);
 if (!item || member.assemblySha256 !== item.assembly?.sha256) throw new Error('Item snapshot mismatch');
 for (const c of item.components) { const a = data.assets.find(a => a.id === c.assetId && a.version === c.version); const m = member.componentVersions.find(m => m.assetId === c.assetId && m.version === c.version); if (!a || a.sha256 !== c.sha256 || m?.sha256 !== c.sha256) throw new Error('Component source mismatch'); }
 const jump = link(String(item.number).padStart(2, '0') + ' ' + item.name, '#' + item.id); jump.className = 'jump'; const thumb = make('img'); thumb.src = local(item.preview); thumb.alt = ''; thumb.width = 300; thumb.height = 200; jump.prepend(thumb); nav.append(jump);
 const section = make('section', '', 'package'); section.id = item.id; section.dataset.itemId = item.id;
 section.append(make('div', 'ITEM ' + String(item.number).padStart(2, '0') + ' · revision ' + item.revision, 'number'), make('h2', item.name), make('span', 'Complete appearance candidate · ' + labels[item.approval.status], 'status'), make('p', item.description));
 const gallery = make('div', '', 'views');
 for (const view of item.views) { const figure = make('figure'); const a = link('', local(view.path)); a.target = '_blank'; a.rel = 'noreferrer'; const img = make('img'); img.src = local(view.path); img.alt = item.name + ' — ' + (view.kind === 'walking' ? 'walking-height view at 1.65 m' : 'whole-item overview'); img.width = 1200; img.height = 800; img.loading = 'lazy'; a.append(img); figure.append(a, make('figcaption', view.kind === 'walking' ? 'Walking height · 1.65 m' : 'Whole-item overview')); gallery.append(figure); }
 section.append(gallery);
 const links = make('p', '', 'links'); const inspect = link('Explore this complete item in 3D', 'viewer.html?item=' + encodeURIComponent(item.id)); inspect.target = '_blank'; inspect.rel = 'noreferrer'; links.append(inspect, link('Download model', local(item.assembly.model))); section.append(links);
 const detail = make('details', '', 'components'); detail.append(make('summary', 'Parts and technical details — optional'));
 detail.append(make('p', item.componentCount + ' component objects are included in this one item. No separate approvals are required.'), link('Complete parts register', local(item.partsManifest)), make('p', item.assembly.triangles.toLocaleString() + ' triangles · model SHA-256: ' + item.assembly.sha256), make('p', item.readiness));
 section.append(detail); cards.append(section);
}
window.reviewReady = true;
