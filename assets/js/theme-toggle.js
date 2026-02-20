(function () {
  var storageKey = 'site-theme';
  var root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(storageKey, theme);
    } catch (e) {
      // no-op
    }
    var btn = document.getElementById('theme-toggle-btn');
    if (btn) {
      btn.textContent = theme === 'light' ? 'Dark' : 'Light';
      btn.setAttribute('aria-label', 'Switch to ' + (theme === 'light' ? 'dark' : 'light') + ' theme');
    }
  }

  function initialTheme() {
    try {
      var stored = localStorage.getItem(storageKey);
      if (stored === 'light' || stored === 'dark') {
        return stored;
      }
    } catch (e) {
      // no-op
    }
    return 'dark';
  }

  function addToggleButton() {
    if (document.getElementById('theme-toggle-btn')) {
      return;
    }
    var btn = document.createElement('button');
    btn.id = 'theme-toggle-btn';
    btn.className = 'theme-toggle';
    btn.type = 'button';
    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    });
    document.body.appendChild(btn);
  }

  document.addEventListener('DOMContentLoaded', function () {
    addToggleButton();
    applyTheme(initialTheme());
  });
})();
