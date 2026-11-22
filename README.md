# AeroCarbon Solutions : pitch investisseurs

Diaporama de la soutenance LE03 Speaking 1 (en binôme, environ 6 minutes) : AeroCarbon Solutions, une machine qui capte le CO2 de l'air et le transforme en carburant liquide.

**En ligne :** https://lelio88.github.io/leo3-aerocarbon-pitch/

## Utilisation

- `index.html` : écran public (slides 1920×1080 mises à l'échelle, fond animé).
- `presenter.html` : console présentateur (texte à dire, orateur, étapes, slide suivante, questions probables, chronomètre). Elle s'ouvre avec la touche **P** depuis l'écran public, et les deux fenêtres restent synchronisées.
- Touches : flèches, espace ou clic pour avancer, **F** pour le plein écran, un numéro pour sauter à une slide (11 et 12 sont des slides de réserve pour les questions).
- `AeroCarbon-pitch.pdf` : version PDF de secours.

## Régénérer le PDF

```sh
msedge --headless=new --no-pdf-header-footer --virtual-time-budget=4000 \
  --print-to-pdf=AeroCarbon-pitch.pdf "file:///<chemin>/index.html?print"
```

`?print` empile toutes les slides, toutes les étapes révélées, une slide par page.

## Contenu

- Notes du présentateur : `js/slides-data.js`.
- Slides : `index.html`. Le thème est dans `css/theme.css`.
- Sources des graphiques : U.S. EIA (*Today in Energy*, CAISO curtailment) ; Wikipedia « Energy density » ; The Open University.
