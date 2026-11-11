// Update the copyright year on every page.
const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

// Search and filter publications by keyword, category, and year.
const cards = [...document.querySelectorAll('#papers .paper')];
const search = document.getElementById('pub-search');
const category = document.getElementById('pub-category');
const year = document.getElementById('pub-year');

function filterPapers() {
  let count = 0;

  cards.forEach((card) => {
    const matchesSearch = card.dataset.text.includes(search.value.trim().toLowerCase());
    const matchesCategory = category.value === 'all' || card.dataset.category === category.value;
    const matchesYear = year.value === 'all' || card.dataset.year === year.value;
    const visible = matchesSearch && matchesCategory && matchesYear;

    card.hidden = !visible;
    if (visible) count++;
  });

  document.getElementById('pub-count').textContent =
    `Showing ${count} of ${cards.length} publications`;
  document.getElementById('pub-empty').hidden = count > 0;
}

if (search && category && year) {
  [search, category, year].forEach((element) => {
    element.addEventListener('input', filterPapers);
  });
  filterPapers();
}

// Expand and collapse worked solutions on the Solved Problems page.
document.querySelectorAll('.reveal').forEach((button) => {
  button.addEventListener('click', () => {
    const panel = document.getElementById(button.getAttribute('aria-controls'));
    const show = panel.hidden;

    panel.hidden = !show;
    button.setAttribute('aria-expanded', String(show));
    button.textContent = show ? 'Hide solution' : 'Show solution';
  });
});
