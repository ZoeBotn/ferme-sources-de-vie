/* Fonctionnement du site — pas besoin de modifier ce fichier.
   Les textes et les prix sont dans contenu.js */

(function () {
  "use strict";

  /* ---------- Petit pot de miel dessiné ---------- */
  function pot(couleur, opts) {
    opts = opts || {};
    const id = "g" + Math.random().toString(36).slice(2, 8);
    const grains = opts.vanille
      ? '<g fill="#3a2414" opacity=".55"><circle cx="40" cy="62" r="1.2"/><circle cx="78" cy="58" r="1"/><circle cx="56" cy="112" r="1.1"/><circle cx="84" cy="108" r="1.2"/><circle cx="36" cy="104" r="1"/></g>'
      : "";
    return (
      '<svg viewBox="0 0 120 140" class="pot-svg" aria-hidden="true">' +
      '<defs><linearGradient id="' + id + '" x1="0" x2="1">' +
      '<stop offset="0" stop-color="' + couleur + '" stop-opacity=".85"/>' +
      '<stop offset=".45" stop-color="' + couleur + '"/>' +
      '<stop offset="1" stop-color="' + couleur + '" stop-opacity=".8"/></linearGradient></defs>' +
      '<ellipse cx="60" cy="134" rx="40" ry="4" fill="#000" opacity=".08"/>' +
      '<rect x="18" y="30" width="84" height="102" rx="16" fill="url(#' + id + ')" stroke="#2a2420" stroke-opacity=".15"/>' +
      grains +
      '<rect x="26" y="40" width="7" height="80" rx="3.5" fill="#fff" opacity=".35"/>' +
      '<rect x="22" y="12" width="76" height="22" rx="6" fill="#24211E"/>' +
      '<rect x="22" y="26" width="76" height="4" fill="#000" opacity=".25"/>' +
      '<rect x="18" y="62" width="84" height="44" fill="#fffdf6"/>' +
      '<rect x="18" y="94" width="84" height="12" fill="#24211E"/>' +
      '<path d="M60 66 l9 5 v10 l-9 5 l-9 -5 v-10z" fill="none" stroke="#9C7500" stroke-width="1.6"/>' +
      '<ellipse cx="60" cy="76" rx="3.4" ry="4.6" fill="#FFCA00" stroke="#24211E" stroke-width="1"/>' +
      '<path d="M43 84 q17 -6 34 0 v5 q-17 -6 -34 0z" fill="#FFCA00"/>' +
      '<rect x="40" y="99" width="40" height="2" rx="1" fill="#E9D9A6" opacity=".8"/>' +
      "</svg>"
    );
  }

  /* ---------- Contact et prix ---------- */
  document.querySelectorAll("[data-contact]").forEach(function (el) {
    el.textContent = CONTACT[el.dataset.contact] || "";
  });
  document.querySelectorAll("[data-prix]").forEach(function (el) {
    el.textContent = PRIX[el.dataset.prix] || "";
  });
  const tel = CONTACT.telephone.replace(/\s/g, "");
  document.querySelectorAll('[data-lien="tel"]').forEach(function (a) { a.href = "tel:" + tel; });
  document.querySelectorAll('[data-lien="mail"]').forEach(function (a) { a.href = "mailto:" + CONTACT.email; });
  document.getElementById("annee").textContent = new Date().getFullYear();

  /* Pots de la section tarifs */
  const tailles = { petit: 0.72, moyen: 0.86, grand: 1 };
  document.querySelectorAll("[data-pot]").forEach(function (el) {
    el.innerHTML = pot("#E6A73A");
    el.style.setProperty("--echelle", tailles[el.dataset.pot]);
  });

  /* ---------- Grille des miels ---------- */
  const grille = document.getElementById("grille-miels");
  const hex = '<svg viewBox="0 0 10 11"><path d="M5 0.5 l4.3 2.5 v5 l-4.3 2.5 l-4.3 -2.5 v-5z"/></svg>';

  const miels = MIELS.filter(function (m) { return m.dispo !== false; });
  const photos = (typeof PHOTOS_MIELS !== "undefined") ? PHOTOS_MIELS : [];
  photos.forEach(function (p, i) {
    const fig = document.createElement("figure");
    fig.className = "polaroid";
    fig.innerHTML = '<img src="img/' + p.fichier + '" alt="">';
    document.getElementById(i < Math.ceil(photos.length / 2) ? "photos-gauche" : "photos-droite").appendChild(fig);
  });

  miels.forEach(function (m, i) {
    const carte = document.createElement("article");
    carte.className = "miel";
    const tags = [];
    if (m.bio) tags.push("bio");
    if (m.gamme === "gourmand") tags.push("gourmand");
    else if (m.intensite <= 2) tags.push("doux");
    else if (m.intensite >= 3) tags.push("corse");
    carte.dataset.tags = tags.join(" ");

    let badges = "";
    if (m.bio) badges += '<span class="badge-bio">BIO</span>';
    if (m.phare) badges += '<span class="badge badge-phare">Notre phare</span>';
    if (m.nouveau) badges += '<span class="badge badge-nouveau">Nouveau</span>';
    if (m.promo) badges += '<span class="badge badge-promo">Petit prix</span>';

    let gout = "";
    if (m.intensite) {
      let h = "";
      for (let k = 1; k <= 5; k++) h += '<span class="' + (k <= m.intensite ? "plein" : "") + '">' + hex + "</span>";
      gout = '<div class="intensite" title="Intensité ' + m.intensite + ' sur 5"><span class="intensite-label">Doux</span><span class="hexs">' + h + '</span><span class="intensite-label">Corsé</span></div>';
    } else {
      gout = '<div class="intensite"><span class="intensite-label gourmand">Miel gourmand</span></div>';
    }

    const icone = (typeof ICONES !== "undefined" && ICONES[m.icone]) || "";
    carte.innerHTML =
      '<div class="miel-icone" style="--teinte:' + m.couleur + '">' + icone + "</div>" +
      '<div class="miel-corps">' +
      '<div class="miel-badges">' + badges + "</div>" +
      "<h3>" + m.nom + "</h3>" +
      '<p class="miel-origine">' + m.origine + "</p>" +
      '<p class="miel-texte">' + m.texte + "</p>" +
      gout + "</div>";
    grille.appendChild(carte);

  });

  /* Filtres */
  document.querySelectorAll(".filtre").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".filtre").forEach(function (x) { x.classList.remove("actif"); });
      b.classList.add("actif");
      const f = b.dataset.filtre;
      grille.querySelectorAll(".miel").forEach(function (c) {
        c.hidden = !(f === "tous" || c.dataset.tags.split(" ").indexOf(f) > -1);
      });
    });
  });

  /* ---------- Menu mobile ---------- */
  const menuBtn = document.querySelector(".menu-btn");
  const menu = document.querySelector(".menu");
  menuBtn.addEventListener("click", function () {
    const ouvert = menu.classList.toggle("ouvert");
    menuBtn.setAttribute("aria-expanded", ouvert);
  });
  menu.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () { menu.classList.remove("ouvert"); menuBtn.setAttribute("aria-expanded", false); });
  });

})();
