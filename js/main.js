const banner = document.querySelector(".cookie-banner");
const consentButtons = document.querySelectorAll("[data-consent]");
const themeToggle = document.querySelector(".theme-toggle");

const CONSENT_KEY = "mnv-cookie-consent";
const THEME_KEY = "mnv-theme";

const storedConsent = localStorage.getItem(CONSENT_KEY);
if (storedConsent && banner) {
  banner.classList.add("hidden");
}

consentButtons.forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setItem(CONSENT_KEY, button.dataset.consent);
    banner?.classList.add("hidden");
  });
});

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  themeToggle.textContent = theme === "light" ? "☀️" : "🌙";
};

const storedTheme = localStorage.getItem(THEME_KEY) || "dark";
applyTheme(storedTheme);

themeToggle?.addEventListener("click", () => {
  const nextTheme = document.documentElement.dataset.theme === "light" ? "dark" : "light";
  localStorage.setItem(THEME_KEY, nextTheme);
  applyTheme(nextTheme);
});
