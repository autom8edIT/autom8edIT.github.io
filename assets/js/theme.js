(function () {
  const storageKey = "autom8ed-theme";

  function readTheme() {
    try {
      return localStorage.getItem(storageKey);
    } catch {
      return null;
    }
  }

  function writeTheme(theme) {
    try {
      localStorage.setItem(storageKey, theme);
    } catch {
      // The selected theme still applies for the current page.
    }
  }

  function applyTheme(theme) {
    const flashbang = theme === "flashbang";
    document.body.classList.toggle("flashbang", flashbang);
    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.textContent = flashbang ? "Dark mode" : "Flashbang mode";
      button.setAttribute("aria-pressed", String(flashbang));
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    applyTheme(readTheme() === "flashbang" ? "flashbang" : "dark");

    document.querySelectorAll("[data-theme-toggle]").forEach((button) => {
      button.addEventListener("click", function () {
        const theme = document.body.classList.contains("flashbang")
          ? "dark"
          : "flashbang";
        writeTheme(theme);
        applyTheme(theme);
      });
    });
  });
})();
