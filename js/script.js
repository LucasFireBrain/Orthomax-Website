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

// Detect browser/system language
function detectUserLanguage() {
  const lang = navigator.language || navigator.userLanguage;

  if (lang.startsWith("es")) return "es";
  if (lang.startsWith("zh")) return "zh";
  if (lang.startsWith("pt")) return "pt";
  return "en"; // fallback
}

// Apply translations to the page
function setLanguage(lang) {
  if (!window.translations || !window.translations[lang]) return;

  const t = window.translations[lang];
  document.getElementById("hero-tagline").textContent = t.heroTagline;
  document.getElementById("about-title").textContent = t.aboutTitle;
  document.getElementById("about-text1").textContent = t.aboutText1;
  document.getElementById("about-text2").textContent = t.aboutText2;
  document.getElementById("events-title").textContent = t.eventsTitle;
  document.getElementById("events-note").textContent = t.eventsNote;
  document.getElementById("contact-title").textContent = t.contactTitle;

  // Contact info
  document.getElementById("contact-phone").textContent = t.contactPhone;
  document.getElementById("contact-email").textContent = t.contactEmail;
  document.getElementById("contact-instagram").textContent = t.contactInstagram;
}

document.addEventListener("DOMContentLoaded", async () => {
  window.translations = await loadTranslations();

  // Detect user language and set it
  const defaultLang = detectUserLanguage();
  setLanguage(defaultLang);

  // Sync dropdown to detected language
  const languageSelect = document.getElementById("languageSelect");
  languageSelect.value = defaultLang;

  // Change language when dropdown changes
  languageSelect.addEventListener("change", (e) => {
    setLanguage(e.target.value);
  });
});
