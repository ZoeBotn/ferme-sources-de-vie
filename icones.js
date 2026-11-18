/* Illustrations des parfums — dessinées en SVG.
   Pour un nouveau miel, ajoutez  icone: "nom"  dans contenu.js
   (noms disponibles : voir la liste ci-dessous). */
const ICONES = (function () {
  const T = 'stroke="#24211E" stroke-width="2" stroke-linejoin="round" stroke-linecap="round"';
  const v = function (s) { return '<svg viewBox="0 0 64 64" aria-hidden="true">' + s + "</svg>"; };
  const petale = function (cx, cy, r, f) { return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + f + '" ' + T + "/>"; };
  const fleur4 = function (x, y) {
    return '<g ' + T + ' fill="#FFD83A"><circle cx="' + x + '" cy="' + (y - 4) + '" r="3.6"/><circle cx="' + (x + 4) + '" cy="' + y + '" r="3.6"/><circle cx="' + x + '" cy="' + (y + 4) + '" r="3.6"/><circle cx="' + (x - 4) + '" cy="' + y + '" r="3.6"/></g><circle cx="' + x + '" cy="' + y + '" r="1.8" fill="#C98A00"/>';
  };
  const marguerite = function (x, y) {
    let p = "";
    for (let a = 0; a < 360; a += 45) {
      p += '<ellipse cx="' + x + '" cy="' + (y - 6) + '" rx="2.6" ry="5" fill="#fff" ' + T + ' stroke-width="1.5" transform="rotate(' + a + " " + x + " " + y + ')"/>';
    }
    return p + '<circle cx="' + x + '" cy="' + y + '" r="3.4" fill="#FFCA00" ' + T + ' stroke-width="1.5"/>';
  };

  return {
    aubepine: v(
      '<path d="M10 56 Q22 46 30 36" fill="none" ' + T + "/>" +
      '<path d="M18 49 q-10 -2 -11 -11 q9 1 11 11z" fill="#9BB06A" ' + T + "/>" +
      '<path d="M24 43 q3 -10 12 -10 q-2 9 -12 10z" fill="#9BB06A" ' + T + "/>" +
      petale(38, 15, 7, "#fff") + petale(46.6, 22.2, 7, "#fff") + petale(43.3, 32.3, 7, "#fff") + petale(32.7, 32.3, 7, "#fff") + petale(29.4, 22.2, 7, "#fff") +
      '<circle cx="38" cy="24" r="4.5" fill="#E89AAE" ' + T + "/>" +
      '<circle cx="14" cy="16" r="3" fill="#fff" ' + T + ' stroke-width="1.5"/><circle cx="20" cy="22" r="2.4" fill="#fff" ' + T + ' stroke-width="1.5"/>'
    ),
    colza: v(
      '<path d="M32 60 V22 M32 44 L22 34 M32 38 L42 30" fill="none" ' + T + "/>" +
      '<path d="M32 52 q-12 -2 -14 -10 q10 0 14 10z" fill="#8FAA55" ' + T + "/>" +
      fleur4(32, 16) + fleur4(21, 30) + fleur4(43, 26) + fleur4(26, 20) + fleur4(39, 15)
    ),
    pomme: v(
      '<path d="M32 22 c-6 -5 -19 -4 -21 8 c-2 13 7 26 15 26 c3 0 4 -2 6 -2 s3 2 6 2 c8 0 17 -13 15 -26 c-2 -12 -15 -13 -21 -8z" fill="#E2553E" ' + T + "/>" +
      '<path d="M32 22 q0 -7 3 -12" fill="none" ' + T + "/>" +
      '<path d="M35 14 q9 -7 16 -2 q-7 7 -16 2z" fill="#8FAA55" ' + T + "/>" +
      '<ellipse cx="21" cy="32" rx="3" ry="6" fill="#fff" opacity=".5" transform="rotate(20 21 32)"/>'
    ),
    tilleul: v(
      '<path d="M40 10 q12 6 13 26 q-10 -8 -13 -26z" fill="#E9E6A6" ' + T + "/>" +
      '<path d="M47 30 V42 M47 42 l-4 5 M47 42 l4 4" fill="none" ' + T + "/>" +
      '<circle cx="43" cy="48" r="3" fill="#C9B36A" ' + T + ' stroke-width="1.5"/><circle cx="51" cy="47" r="3" fill="#C9B36A" ' + T + ' stroke-width="1.5"/>' +
      '<path d="M28 56 C12 48 8 30 16 22 C22 16 28 20 28 26 C28 20 36 14 42 20 C50 28 44 48 28 56z" fill="#A9C26E" ' + T + "/>" +
      '<path d="M28 54 V26 M28 40 l-8 -6 M28 34 l7 -6 M28 46 l7 -5" fill="none" ' + T + ' stroke-width="1.5"/>'
    ),
    sapin: v(
      '<path d="M8 58 q24 -8 48 0" fill="#B9C98A" ' + T + "/>" +
      '<rect x="29" y="48" width="6" height="8" fill="#8A5A2E" ' + T + "/>" +
      '<path d="M32 6 L43 22 H37 L47 35 H40 L51 49 H13 L24 35 H17 L27 22 H21z" fill="#4F6B3A" ' + T + "/>" +
      '<circle cx="47" cy="12" r="1.5" fill="#FFCA00"/><circle cx="14" cy="18" r="1.5" fill="#FFCA00"/>'
    ),
    soleil: v(
      '<g ' + T + ' fill="none"><path d="M32 6 v7 M32 51 v7 M6 32 h7 M51 32 h7 M13.6 13.6 l5 5 M45.4 45.4 l5 5 M13.6 50.4 l5 -5 M45.4 18.6 l5 -5"/></g>' +
      '<circle cx="32" cy="32" r="13" fill="#FFCA00" ' + T + "/>" +
      '<path d="M26 34 q6 5 12 0" fill="none" ' + T + "/>" +
      '<circle cx="27" cy="29" r="1.5" fill="#24211E"/><circle cx="37" cy="29" r="1.5" fill="#24211E"/>' +
      '<circle cx="23" cy="34" r="2" fill="#F2A08F" opacity=".8"/><circle cx="41" cy="34" r="2" fill="#F2A08F" opacity=".8"/>'
    ),
    prairie: v(
      '<g fill="none" ' + T + '><path d="M10 58 q2 -14 -2 -24"/><path d="M16 58 q0 -16 6 -26"/><path d="M24 58 q2 -12 -2 -20"/><path d="M34 58 q-2 -18 4 -30"/><path d="M42 58 q2 -12 -2 -20"/><path d="M50 58 q0 -14 6 -22"/></g>' +
      '<g ' + T + ' stroke-width="1.5" fill="#FFCA00"><ellipse cx="22" cy="28" rx="3" ry="4"/><ellipse cx="25" cy="22" rx="3" ry="4"/><ellipse cx="19" cy="22" rx="3" ry="4"/></g>' +
      '<g ' + T + ' stroke-width="1.5" fill="#A889C9"><circle cx="38" cy="25" r="3"/><circle cx="35" cy="20" r="3"/><circle cx="41" cy="19" r="3"/><circle cx="38" cy="14" r="3"/></g>' +
      '<g ' + T + ' stroke-width="1.5" fill="#fff"><circle cx="56" cy="32" r="3"/><circle cx="53" cy="28" r="3"/><circle cx="59" cy="28" r="3"/></g>'
    ),
    chene: v(
      '<path d="M22 52 C18 48 13 46 15 42 C11 40 11 34 16 33 C12 29 14 23 19 24 C18 19 23 15 27 19 C28 13 34 12 35 18 C39 15 44 18 41 23 C46 23 47 29 43 31 C47 34 45 39 40 38 C42 43 38 46 34 44 C33 49 27 50 26 46z" fill="#7C8F45" ' + T + "/>" +
      '<path d="M22 52 L33 22" fill="none" ' + T + ' stroke-width="1.5"/>' +
      '<ellipse cx="47" cy="49" rx="7" ry="9" fill="#C08A45" ' + T + "/>" +
      '<path d="M39 44 q8 -7 16 0 q0 -6 -8 -7 q-8 1 -8 7z" fill="#8A5A2E" ' + T + "/>" +
      '<path d="M47 37 v-4" ' + T + "/>"
    ),
    chataigne: v(
      '<path d="M18 40 C12 28 20 14 32 12 C44 14 52 28 46 40" fill="#9BB06A" ' + T + "/>" +
      '<g ' + T + ' stroke-width="1.3"><path d="M16 30 l-5 -2 M18 22 l-4 -4 M24 15 l-2 -5 M32 12 v-5 M40 15 l2 -5 M46 22 l4 -4 M48 30 l5 -2"/></g>' +
      '<path d="M32 22 C20 26 14 38 18 46 C22 54 42 54 46 46 C50 38 44 26 32 22z" fill="#7A3E1C" ' + T + "/>" +
      '<path d="M19 46 C24 52 40 52 45 46 C40 49 24 49 19 46z" fill="#D9B98A" ' + T + ' stroke-width="1.5"/>' +
      '<path d="M32 22 v-3" ' + T + "/>" +
      '<ellipse cx="26" cy="34" rx="2.5" ry="5" fill="#fff" opacity=".35" transform="rotate(25 26 34)"/>'
    ),
    ronce: v(
      '<path d="M8 58 C10 36 24 20 46 14" fill="none" stroke="#24211E" stroke-width="5" stroke-linecap="round"/>' +
      '<path d="M8 58 C10 36 24 20 46 14" fill="none" stroke="#8C4A5E" stroke-width="2.5" stroke-linecap="round"/>' +
      '<g fill="#8C4A5E" ' + T + ' stroke-width="1.2"><path d="M11 46 l-6 -1 l5 -3z"/><path d="M15 36 l-3 -6 l6 3z"/><path d="M22 28 l-1 -6 l5 4z"/><path d="M32 20 l1 -6 l3 5z"/><path d="M14 40 l6 2 l-5 2z"/><path d="M27 24 l6 1 l-5 3z"/></g>' +
      '<path d="M18 44 C14 34 22 30 28 34 C26 40 22 44 18 44z" fill="#7C9A4A" ' + T + '/>' +
      '<path d="M18 44 L26 35" fill="none" ' + T + ' stroke-width="1.3"/>' +
      '<path d="M40 22 C46 18 54 22 52 30 C48 30 42 28 40 22z" fill="#7C9A4A" ' + T + '/>' +
      petale(46, 34, 6, "#FBE3EC") + petale(53.6, 39.5, 6, "#FBE3EC") + petale(50.7, 48.5, 6, "#FBE3EC") + petale(41.3, 48.5, 6, "#FBE3EC") + petale(38.4, 39.5, 6, "#FBE3EC") +
      '<circle cx="46" cy="42" r="4" fill="#FFD83A" ' + T + ' stroke-width="1.5"/>' +
      '<g fill="#C98A00"><circle cx="44.5" cy="40.5" r=".9"/><circle cx="47.5" cy="41" r=".9"/><circle cx="46" cy="43.5" r=".9"/></g>'
    ),
    sauvages: v(
      '<path d="M20 60 L24 34 M32 60 V30 M44 60 L40 36" fill="none" ' + T + "/>" +
      '<g ' + T + ' fill="#D9412F"><circle cx="18" cy="24" r="7"/><circle cx="28" cy="24" r="7"/><circle cx="23" cy="17" r="7"/><circle cx="23" cy="30" r="6"/></g>' +
      '<circle cx="23" cy="24" r="3" fill="#24211E"/>' +
      marguerite(43, 28) +
      '<g ' + T + ' fill="#5E86C9" stroke-width="1.5"><path d="M32 6 l2 6 l6 -2 l-4 5 l5 4 l-6 1 l1 6 l-4 -4 l-4 4 l1 -6 l-6 -1 l5 -4 l-4 -5 l6 2z"/></g>'
    ),
    trefle: v(
      '<path d="M30 58 Q32 44 32 32" fill="none" ' + T + "/>" +
      '<g ' + T + ' fill="#6F9B4A">' +
      '<path d="M32 32 C22 32 16 22 22 18 C26 15 30 18 32 22 C34 18 38 15 42 18 C48 22 42 32 32 32z" transform="rotate(0 32 32) translate(0 -6)"/>' +
      '<path d="M32 32 C22 32 16 22 22 18 C26 15 30 18 32 22 C34 18 38 15 42 18 C48 22 42 32 32 32z" transform="rotate(120 32 32) translate(0 -6)"/>' +
      '<path d="M32 32 C22 32 16 22 22 18 C26 15 30 18 32 22 C34 18 38 15 42 18 C48 22 42 32 32 32z" transform="rotate(240 32 32) translate(0 -6)"/></g>' +
      '<g fill="#fff" opacity=".6"><path d="M32 18 q-3 3 0 6"/></g>' +
      '<circle cx="50" cy="48" r="7" fill="#F4E7EF" ' + T + "/>" +
      '<path d="M46 45 l2 2 M50 43 v3 M54 45 l-2 2 M46 50 l2 -1 M54 50 l-2 -1" ' + T + ' stroke-width="1.3"/>' +
      '<path d="M50 55 v5" ' + T + "/>"
    ),
    vanille: v(
      '<path d="M12 56 C22 40 30 24 46 10" fill="none" stroke="#24211E" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M12 56 C22 40 30 24 46 10" fill="none" stroke="#5A3820" stroke-width="3" stroke-linecap="round"/>' +
      '<path d="M20 58 C30 44 38 30 52 20" fill="none" stroke="#24211E" stroke-width="6" stroke-linecap="round"/>' +
      '<path d="M20 58 C30 44 38 30 52 20" fill="none" stroke="#5A3820" stroke-width="3" stroke-linecap="round"/>' +
      '<g ' + T + ' fill="#F3EBB5"><ellipse cx="44" cy="40" rx="4" ry="9"/><ellipse cx="44" cy="40" rx="4" ry="9" transform="rotate(72 44 44)"/><ellipse cx="44" cy="40" rx="4" ry="9" transform="rotate(-72 44 44)"/><ellipse cx="44" cy="40" rx="4" ry="9" transform="rotate(144 44 44)"/><ellipse cx="44" cy="40" rx="4" ry="9" transform="rotate(-144 44 44)"/></g>' +
      '<circle cx="44" cy="44" r="3.5" fill="#E8C64A" ' + T + "/>"
    ),
    cannelle: v(
      '<g ' + T + '>' +
      '<rect x="10" y="20" width="44" height="9" rx="4.5" fill="#A0592A" transform="rotate(-12 32 24)"/>' +
      '<rect x="10" y="31" width="44" height="9" rx="4.5" fill="#B5682F" transform="rotate(-12 32 35)"/>' +
      '<rect x="10" y="42" width="44" height="9" rx="4.5" fill="#A0592A" transform="rotate(-12 32 46)"/></g>' +
      '<path d="M30 16 C26 30 30 44 28 58 M36 15 C32 30 36 44 34 57" fill="none" stroke="#E2553E" stroke-width="2.5" stroke-linecap="round"/>' +
      '<g ' + T + ' fill="#7A3E1C" stroke-width="1.3"><path d="M50 10 l2 4 l4 -1 l-2 4 l3 3 l-4 1 l0 4 l-3 -3 l-3 3 l0 -4 l-4 -1 l3 -3 l-2 -4 l4 1z"/></g>'
    ),
    noisette: v(
      '<path d="M14 30 C10 22 18 14 22 18 C22 10 32 8 34 16 C38 8 48 12 46 20 C54 18 56 28 50 30" fill="#9BB06A" ' + T + "/>" +
      '<path d="M32 22 C20 24 14 36 18 46 C22 56 42 56 46 46 C50 36 44 24 32 22z" fill="#A5652E" ' + T + "/>" +
      '<path d="M18 30 C24 24 40 24 46 30 C42 33 22 33 18 30z" fill="#D9B98A" ' + T + "/>" +
      '<path d="M27 38 q2 8 0 14 M37 38 q-2 8 0 14" fill="none" stroke="#7A3E1C" stroke-width="1.3" stroke-linecap="round" opacity=".7"/>' +
      '<ellipse cx="25" cy="42" rx="2.2" ry="5" fill="#fff" opacity=".3"/>'
    ),
    gingembre: v(
      '<path d="M8 40 C8 32 16 30 20 34 C20 26 28 22 32 28 C34 20 44 18 46 26 C52 22 58 28 54 34 C58 38 56 46 50 46 C48 52 40 52 38 48 C34 54 24 54 22 48 C16 52 8 48 8 40z" fill="#E3BE7B" ' + T + "/>" +
      '<g fill="none" stroke="#9C7500" stroke-width="1.3" stroke-linecap="round" opacity=".8"><path d="M16 38 q2 4 0 8"/><path d="M28 32 q2 5 0 10"/><path d="M42 30 q2 4 0 8"/><path d="M48 38 q2 3 0 6"/></g>' +
      '<path d="M32 28 C30 18 34 10 40 6 M46 26 C48 18 52 14 58 12" fill="none" stroke="#6F9B4A" stroke-width="2.5" stroke-linecap="round"/>'
    ),
  };
})();
