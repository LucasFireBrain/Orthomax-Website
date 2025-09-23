// Language Switching with one JSON
const switcher = document.getElementById("language-switcher");
let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch("lang/lang.json");
    translations = await response.json();

    // Load saved language or default to English
    const savedLang = localStorage.getItem("lang") || "en";
    switcher.value = savedLang;
    setLanguage(savedLang);
  } catch (err) {
    console.error("Error loading translations:", err);
  }
}

function setLanguage(lang) {
  if (!translations[lang]) return;

  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  localStorage.setItem("lang", lang); // remember choice
}

switcher.addEventListener("change", e => {
  setLanguage(e.target.value);
});

loadTranslations();
