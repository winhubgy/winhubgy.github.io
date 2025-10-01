(function() {
  try {
    var saved = localStorage.getItem('theme');
    if (!saved) {
      var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      saved = prefersDark ? 'dark' : 'light';
    }
    document.documentElement.setAttribute('data-theme', saved);
  } catch (e) {
    // fallback: do nothing
  }
})();

try {
  var t = document.documentElement.getAttribute('data-theme') || 'light';
  document.body.classList.remove('light-mode','dark-mode');
  document.body.classList.add(t + '-mode');
} catch(e) {}
