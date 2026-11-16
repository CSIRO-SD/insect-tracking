const tabs = [...document.querySelectorAll('[role="tab"]')];
function selectTab(tab) {
  tabs.forEach(t => {
    const selected = t === tab;
    t.setAttribute('aria-selected', String(selected));
    t.tabIndex = selected ? 0 : -1;
    document.getElementById(t.getAttribute('aria-controls')).hidden = !selected;
  });
}
tabs.forEach((tab, i) => {
  tab.addEventListener('click', () => selectTab(tab));
  tab.addEventListener('keydown', e => {
    if (!['ArrowLeft', 'ArrowRight', 'Home', 'End'].includes(e.key)) return;
    e.preventDefault();
    const next = e.key === 'Home' ? 0 : e.key === 'End' ? tabs.length - 1 : (i + (e.key === 'ArrowRight' ? 1 : -1) + tabs.length) % tabs.length;
    selectTab(tabs[next]); tabs[next].focus();
  });
});
const dialog = document.getElementById('image-dialog');
let sourceButton;
document.querySelectorAll('[data-zoom]').forEach(button => button.addEventListener('click', () => {
  sourceButton = button;
  const images = button.dataset.zoom.split(',').map((src, i) => {
    const image = document.createElement('img');
    image.src = src;
    image.alt = button.querySelectorAll('img')[i]?.alt || button.querySelector('img').alt;
    return image;
  });
  document.getElementById('enlarged-images').replaceChildren(...images);
  document.getElementById('enlarged-caption').textContent = button.closest('figure').querySelector('figcaption').textContent.replace('Click to enlarge ↗', '');
  dialog.showModal(); document.body.classList.add('modal-open');
}));
document.getElementById('close-dialog').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog && e.clientX < dialog.getBoundingClientRect().left) dialog.close(); });
dialog.addEventListener('close', () => {document.body.classList.remove('modal-open'); sourceButton?.focus();});
document.getElementById('copy-bibtex').addEventListener('click', async () => {
  const citation = document.getElementById('citation');
  const status = document.getElementById('copy-status');
  try {await navigator.clipboard.writeText(citation.textContent); status.textContent = 'Citation copied.';}
  catch {const range = document.createRange(); range.selectNodeContents(citation); const selection = window.getSelection(); selection.removeAllRanges(); selection.addRange(range); status.textContent = 'Citation selected. Press Ctrl+C or Command+C to copy.';}
});
