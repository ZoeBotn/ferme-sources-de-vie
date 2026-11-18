# Site de La Ferme Sources de Vie

## Mettre le site en ligne (GitHub + Vercel)
1. GitHub : créer un dépôt (ex. `ferme-sources-de-vie`) et y déposer le contenu de ce dossier (index.html doit être à la racine).
2. Vercel : « Add New… → Project », importer le dépôt, Framework Preset « Other », ne rien remplir d'autre, « Deploy ».
3. Le site est en ligne sur `https://<nom-du-projet>.vercel.app`.

## Modifier les prix ou les miels (George)
Tout se trouve dans **`contenu.js`** : prix, coordonnées, liste des miels.
Sur GitHub, ouvrir le fichier, cliquer sur le crayon, modifier, puis « Commit changes ».
Vercel remet le site à jour tout seul en moins d'une minute.
Après une modification, augmenter le numéro `?v=` dans index.html (ex. `?v=14` → `?v=15`) pour que les visiteurs voient la nouvelle version tout de suite.

## Fichiers
- `index.html` : la page
- `style.css` : l'apparence
- `contenu.js` : textes, prix, miels (à modifier)
- `icones.js` : illustrations des parfums
- `app.js` : fonctionnement (ne pas toucher)
- `img/` : photos et logo (`logo-sources-de-vie.png` = logo haute définition sans fond)
