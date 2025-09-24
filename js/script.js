async function loadTranslations() {
  try {
    const response = await fetch("lang/lang.json");
    if (!response.ok) throw new Error("Failed to load lang.json");
    return await response.json();
  } catch (error) {
    console.error("Error loading translations:", error);
    return {};
  }
}

function detectUserLanguage() {
  const lang = navigator.language || navigator.userLanguage;
  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("pt")) return "pt";
  return "en"; // fallback
}

function setLanguage(lang) {
  if (!window.translations || !window.translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (window.translations[lang][key]) {
      el.textContent = window.translations[lang][key];
    }
  });
}

document.addEventListener("DOMContentLoaded", async () => {
  window.translations = await loadTranslations();

  const languageSelect = document.getElementById("languageSelect");

  if (!languageSelect) {
    console.error("Language dropdown not found in DOM!");
    return;
  }

  // detect browser language first
  const defaultLang = detectUserLanguage();
  setLanguage(defaultLang);
  languageSelect.value = defaultLang;

  // allow user override
  languageSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
});