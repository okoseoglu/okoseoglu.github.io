(function () {
  // E-mail address is assembled in the browser so it is not in the page source as plain text.
  document.querySelectorAll('[data-mail]').forEach(function (el) {
    var addr = el.getAttribute('data-user') + '@' + el.getAttribute('data-domain');
    var a = document.createElement('a');
    a.href = 'mailto:' + addr + '?subject=' + encodeURIComponent('ogulkoseoglu.com');
    a.textContent = addr;
    el.replaceChildren(a);
  });
})();
