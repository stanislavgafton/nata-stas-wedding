const i18n = {
  ro: {
    hero_title: "Ne-am hotărât",
    hero_sub: "să devenim oameni serioși",
    hero_foot: "Și…ne căsătorim!",
    we: "Noi,",
    parents_intro: "Alături de părinții noștri dragi:",
    godparents_intro: "Și de nașii noștri minunați:",
    invite_line: "Vă invităm cu drag să fiți alături de noi la celebrarea căsătoriei noastre!",
    month: "Septembrie",
    d_mo: "Lu", d_tu: "Ma", d_we: "Mie", d_th: "Joi", d_fr: "Vi", d_sa: "Sâm", d_su: "Dum",
    restaurant: "RESTAURANT",
    day: "Duminică",
    city: "or. Chișinău, Dănceni",
    gift_note: "Vom fi recunoscători dacă tradiționalul buchet de flori va fi înlocuit cu o carte sau o sticlă de vin!",
    add_calendar: "📅 Adaugă în calendar",
    rsvp_title: "Confirmă prezența",
    rsvp_deadline_pre: "Vă rugăm să confirmați până la",
    rsvp_deadline_date: "15 iulie 2026",
    form_placeholder: "Formularul de confirmare va apărea aici. (Lipiți codul iframe Google Form.)"
  },
  it: {
    hero_title: "Abbiamo deciso",
    hero_sub: "di fare sul serio",
    hero_foot: "E…ci sposiamo!",
    we: "Noi,",
    parents_intro: "Insieme ai nostri cari genitori:",
    godparents_intro: "E ai nostri meravigliosi padrini:",
    invite_line: "Vi invitiamo con affetto a festeggiare con noi il nostro matrimonio!",
    month: "Settembre",
    d_mo: "Lun", d_tu: "Mar", d_we: "Mer", d_th: "Gio", d_fr: "Ven", d_sa: "Sab", d_su: "Dom",
    restaurant: "RISTORANTE",
    day: "Domenica",
    city: "Chișinău, Dănceni",
    gift_note: "Vi saremmo grati se il tradizionale bouquet di fiori fosse sostituito da un libro o una bottiglia di vino!",
    add_calendar: "📅 Aggiungi al calendario",
    rsvp_title: "Conferma presenza",
    rsvp_deadline_pre: "Si prega di confermare entro il",
    rsvp_deadline_date: "15 luglio 2026",
    form_placeholder: "Il modulo di conferma apparirà qui. (Incolla il codice iframe del Google Form.)"
  }
};

function applyLang(lang) {
  if (!i18n[lang]) lang = "ro";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  document.querySelectorAll(".lang-toggle button").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });
  try { localStorage.setItem("nata-stas-lang", lang); } catch (e) {}
}

document.querySelectorAll(".lang-toggle button").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

(function init() {
  let saved = "ro";
  try { saved = localStorage.getItem("nata-stas-lang") || "ro"; } catch (e) {}
  applyLang(saved);
})();
