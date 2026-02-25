# CAFORMAC — Site vitrine statique

Site web premium et minimaliste pour CAFORMAC, cabinet de conseil et formation B2B basé à Abidjan (zone UEMOA).

**Positionnement** : Formation orientée performance · Méthode FMP · Certifié FDFP
**Objectif unique** : Convertir les DG et DRH vers un diagnostic offert.

## Structure du projet

```
/
├── index.html          Accueil
├── methode.html        Méthode & Preuves
├── qui.html            Qui nous sommes
├── diagnostic.html     Diagnostic offert (formulaire + WhatsApp)
├── CLAUDE.MD           Spec technique et contenu (ne pas déployer)
├── assets/
│   ├── css/style.css   Feuille de style globale
│   ├── js/main.js      Menu mobile + animations scroll + form validation
│   └── img/            Logo + images du site
└── README.md
```

## Stack technique

- HTML5 sémantique
- CSS pur (variables, grid, flexbox, responsive mobile-first)
- JavaScript vanilla minimal (menu hamburger, IntersectionObserver, validation formulaire)
- Aucun framework, aucune dépendance, aucun build tool

## Déploiement

Glisser-déposer le dossier racine sur [Netlify Drop](https://app.netlify.com/drop) ou tout hébergeur statique.
Ne pas inclure `CLAUDE.MD` dans le déploiement (spec interne uniquement).

## Personnalisation

- **WhatsApp** : le numéro actuel est `2250797660543` — à modifier dans les 4 fichiers HTML si changement
- **Logos clients** : ajouter les images dans `assets/img/` et mettre à jour la section logos dans `index.html` et `methode.html`
- **Formulaire** : connecter l'attribut `action` du formulaire à un service (Netlify Forms, Formspree, etc.)
- **Polices** : Inter est chargée via Google Fonts ; modifier le lien `<link>` pour changer de police
- **Images** : remplacer les placeholders dans `assets/img/` par les visuels définitifs

## Architecture

4 pages uniquement. CTA unique : « Demander un diagnostic ». Détails complets dans `CLAUDE.MD`.
