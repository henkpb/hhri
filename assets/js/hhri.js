/**
 */
(function() {

  document.getElementById('hhridarkmode')?.addEventListener('click', event => {
    const isDark = document.body.classList.contains('dark');
    document.body.classList.add(isDark ? 'light' : 'dark');
    document.body.classList.remove(isDark ? 'dark' : 'light');

    try {
      window.localStorage.setItem('darkmode', isDark ? '0' : '1');
    }
    catch (e) {}
  });

  try {
    const isDark = window.localStorage.getItem('darkmode') === '1';
    if (document.body.classList.contains(isDark ? 'light' : 'dark')) {
        document.body.classList.remove(isDark ? 'light' : 'dark');
        document.body.classList.add(isDark ? 'dark' : 'light');
    }
  }
  catch (e) {}

  var sjs = SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '{{ "/search.json" | relative_url }}',
    searchResultTemplate: '<li><a href="{url}">{title}</a></li>',
    noResultsText: 'No results found',
    limit: 10,
    fuzzy: false
  });
})();
