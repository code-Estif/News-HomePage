// Mobile navigation toggle
(function () {
  var body = document.body;
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.getElementById('primary-navigation');
  var backdrop = document.querySelector('.backdrop');

  function setExpanded(isExpanded) {
    toggle.setAttribute('aria-expanded', String(isExpanded));
    if (isExpanded) {
      body.classList.add('nav-open');
      // trap focus basic: focus the first link on open
      var firstLink = nav && nav.querySelector('a');
      if (firstLink) firstLink.focus();
    } else {
      body.classList.remove('nav-open');
      toggle.focus();
    }
  }

  function isExpanded() {
    return toggle.getAttribute('aria-expanded') === 'true';
  }

  if (toggle) {
    toggle.addEventListener('click', function () {
      setExpanded(!isExpanded());
    });
  }

  if (backdrop) {
    backdrop.addEventListener('click', function () { setExpanded(false); });
  }

  // close on Escape
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && isExpanded()) setExpanded(false);
  });
})();


