(function () {
  // E-mail address is assembled in the browser so it is not in the page source as plain text.
  document.querySelectorAll('[data-mail]').forEach(function (el) {
    var addr = el.getAttribute('data-user') + '@' + el.getAttribute('data-domain');
    var a = document.createElement('a');
    a.href = 'mailto:' + addr + '?subject=' + encodeURIComponent('ogulkoseoglu.com');
    a.textContent = addr;
    el.replaceChildren(a);
  });

  // Session recording (Inspectlet) only runs after the visitor accepts.
  var KEY = 'analytics-consent';
  function get() { try { return localStorage.getItem(KEY); } catch (e) { return null; } }
  function set(v) { try { localStorage.setItem(KEY, v); } catch (e) {} }
  function load() {
    window.__insp = window.__insp || [];
    window.__insp.push(['wid', 225066365]);
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://cdn.inspectlet.com/inspectlet.js?wid=225066365&r=' + Math.floor(Date.now() / 3600000);
    document.head.appendChild(s);
  }
  var banner = document.getElementById('consent');
  var v = get();
  if (v === 'yes') { load(); }
  else if (v !== 'no' && banner) {
    banner.classList.add('show');
    banner.addEventListener('click', function (e) {
      var c = e.target.getAttribute && e.target.getAttribute('data-choice');
      if (!c) return;
      set(c); banner.classList.remove('show');
      if (c === 'yes') load();
    });
  }
})();
