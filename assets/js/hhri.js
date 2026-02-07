/**
 */
(function() {

  document.getElementById('hhridarkmode')?.addEventListener('click', event => {
    const isDark = document.body.classList.contains('dark');
    document.body.classList.add(isDark ? 'light' : 'dark');
    document.body.classList.remove(isDark ? 'dark' : 'light');
  });

})();
