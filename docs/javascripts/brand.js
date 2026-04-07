// Colorize the "ME" in "boostME" in the header title.
(function () {
  function colorize() {
    const selectors = [
      ".md-header__title .md-ellipsis",
      ".md-header__topic .md-ellipsis",
      ".md-header__title",
    ];
    for (const sel of selectors) {
      document.querySelectorAll(sel).forEach((el) => {
        if (el.dataset.bmeColorized) return;
        const text = el.textContent;
        if (!text || !text.includes("boostME")) return;
        el.innerHTML = el.innerHTML.replace(
          /boostME/g,
          'boost<span class="bme-me">ME</span>'
        );
        el.dataset.bmeColorized = "1";
      });
    }
  }
  colorize();
  document.addEventListener("DOMContentLoaded", colorize);
  // Material for MkDocs uses instant navigation — re-run on location changes.
  if (typeof document$ !== "undefined" && document$.subscribe) {
    document$.subscribe(colorize);
  } else {
    new MutationObserver(colorize).observe(document.body, {
      childList: true,
      subtree: true,
    });
  }
})();
