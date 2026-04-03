(function () {
  function hasExternalHref(link) {
    var rawHref = link.getAttribute("href");
    if (!rawHref) {
      return false;
    }

    if (rawHref[0] === "#" || rawHref[0] === "/") {
      return false;
    }

    if (/^(mailto:|tel:|javascript:)/i.test(rawHref)) {
      return false;
    }

    var url;
    try {
      url = new URL(rawHref, window.location.href);
    } catch (e) {
      return false;
    }

    return url.origin !== window.location.origin;
  }

  function markExternalLinks() {
    var links = document.querySelectorAll("a[href]");

    links.forEach(function (link) {
      if (!hasExternalHref(link)) {
        return;
      }

      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");

      if (!link.classList.contains("btn")) {
        link.classList.add("external-link");
      }
    });
  }

  document.addEventListener("DOMContentLoaded", markExternalLinks);
})();
