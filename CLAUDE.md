# CLAUDE.MD — CAFORMAC SITE (V5 FINAL)
Pixel-perfect execution spec for Opus 4.6

## 0) ROLE
You are Claude Opus 4.6.
You must BUILD the CAFORMAC website as a static site (HTML/CSS/JS) with the exact "INSEAD-like" visual grammar from the reference screenshots:
- deep institutional green stats block with subtle circles + diagonal hatch
- cards with image + ONLY top-right rounded corner
- brochure section with mockup + large whitespace + subtle diagonal texture
- full-bleed hero images
- testimonials cards with orange quote marks

No creative reinterpretation. No extra pages. No frameworks.

Business goal: Premium B2B authority + conversion to one CTA: "Diagnostic offert".

Target audience: DG (CEO) and DRH (HR Directors) in Côte d'Ivoire and UEMOA zone.

Brand identity:
- Name on site: CAFORMAC (not AFRICONSULT)
- Legal name (footer only): AFRICONSULT & ENGINEERING SA
- Tagline: Former. Structurer. Faire Performer.
- Tone: Authoritative, professional, direct. Sentences ≤ 18 words. No HR jargon. No superlatives.

---

## 1) NON-NEGOTIABLE ARCHITECTURE (4 pages only)
Static site with 4 pages:
1. `index.html` (Accueil)
2. `methode.html` (Méthode & Preuves)
3. `qui.html` (Qui nous sommes)
4. `diagnostic.html` (Diagnostic offert)

Global CTA (only one, everywhere): **Diagnostic offert**
- Primary button label: "Demander un diagnostic"
- Floating WhatsApp button on all pages (bottom-right)
- WhatsApp pre-filled message: "Bonjour, je souhaite un diagnostic formation."

### 1.1 Navigation (all pages)
Menu items (left): Méthode · Qui sommes-nous
CTA button (right, green): Diagnostic offert
Logo "CAFORMAC" links to index.html (no separate "Accueil" link).
Mobile: hamburger menu.

### 1.2 Footer (all pages)
```
CAFORMAC — Former. Structurer. Faire Performer.
AFRICONSULT & ENGINEERING SA · Certifié FDFP
Abidjan, Côte d'Ivoire · Zone UEMOA
Tél : (+225) 07 97 66 05 43
Email : contact@caformac.com
LinkedIn icon (link to profile)
```

### 1.3 SEO meta tags
- index.html: "CAFORMAC — Formation stratégique Côte d'Ivoire | Des résultats, pas des heures"
- methode.html: "Méthode FMP | Formation · Maturité · Performance | CAFORMAC Abidjan"
- qui.html: "À propos de CAFORMAC | Cabinet certifié FDFP | Abidjan"
- diagnostic.html: "Diagnostic formation offert | CAFORMAC Abidjan"

---

## 2) DESIGN SYSTEM — LOCKED (TOKENS + TYPO)
### 2.1 Color tokens (must be used)
Use CSS variables exactly:

```css
:root{
  /* brand */
  --green:#0B6F5A;         /* Primary CTA / key accents */
  --green-deep:#0A5F4D;    /* Strong backgrounds / hover / stats block base */
  --green-line:#2E8F7A;    /* 1px dividers / thin accents / card bottom bar */
  --orange:#D78A2D;        /* Micro accents ONLY (quote marks, tiny details) */

  /* neutrals */
  --text:#111827;
  --gray-50:#F9FAFB;
  --gray-100:#F3F4F6;
  --gray-200:#E5E7EB;
  --white:#FFFFFF;

  /* effects */
  --border: rgba(17,24,39,.10);
  --shadow-soft: 0 6px 18px rgba(17,24,39,.06);

  /* radius */
  --r: 16px;
  --r-one: 22px; /* ONLY top-right corner on card images */
}
```

Rules:
* White (#FFFFFF) dominates.
* Green is used strategically; never everywhere.
* Orange is ONLY for micro-details (quote marks, tiny accents). Never for big blocks.

### 2.2 Typography (must match "INSEAD-like" feel)

Font stack:
* Use Inter via Google Fonts if allowed, else system-ui fallback.
* Headings are NOT bold; premium comes from spacing + weight control.

Rules:
* Titles: weight 300–500 max
* Body: weight 400 with generous line-height
* Stats numbers: weight 200 (ultra light)
* Slight negative tracking on large headings and big numbers

Desktop scale:
* H1: 56px / w300 / lh 1.08 / ls -0.02em
* H2: 36px / w400 / lh 1.15 / ls -0.01em
* H3: 22px / w600 / lh 1.25
* Body: 16px / w400 / lh 1.7
* Small: 14px / w400 / lh 1.6
* Stats number: 56–64px / w200 / ls -0.02em

Mobile scale:
* H1: 34px
* H2: 26px
* Stats number: 42–48px

Implementation requirement:
* Create utility classes or CSS rules that enforce those sizes/weights on all pages.

---

## 3) LAYOUT GRID + SPACING (LOCKED)

* Container max width: 1120px
* Side padding: 22–24px
* Vertical section padding: 72–96px desktop, 48–72px mobile
* Borders: 1px max (`var(--gray-200)` or `var(--border)`)
* Shadows: very subtle only (`--shadow-soft`)
* Mobile-first responsive

---

## 4) PAGE 1 — ACCUEIL (index.html)

Order must be EXACT:

1. HERO (full-bleed)
2. Bloc "Constat"
3. Bloc "FMP teaser"
4. Domaines (6 INSEAD-like cards)
5. Bloc "Résultats constatés" (green stats block)
6. Bandeau logos
7. Bloc "3 impacts"
8. CTA final + signature citation

### 4.1 HERO (full-bleed)

* Full width image edge-to-edge
* Light dark overlay
* Left-aligned text (not centered), generous top margin
* No text box

Copy (exact):
```
Vos formations coûtent des millions.
Vos équipes ne changent pas.
Nous réglons ce problème.
```

CTA button in `--green`: "Demander un diagnostic"
Micro line under CTA: "Certifié FDFP · Abidjan · Zone UEMOA"

### 4.2 Bloc "Constat"

Light gray background (--gray-50).

Copy (exact):
```
Title: Des millions investis. Rien ne change sur le terrain.

Text: Les mêmes programmes sont reconduits chaque année. Les mêmes formateurs répètent les mêmes contenus. Les budgets sont consommés. Les équipes reviennent en poste et rien ne change.
```

Key stat displayed large (stats number style):
```
80%
du contenu appris en formation est perdu en 30 jours. Sans suivi.
```

### 4.3 Bloc "FMP teaser"

3 cards side by side. Each card: letter (F/M/P) large + title + one line.

Copy (exact):
```
F — Formation
Conçue sur vos enjeux, pas sur un catalogue.

M — Maturité
Montée en compétence ancrée dans le quotidien.

P — Performance
Suivi à J+15. Validé au changement, pas à la présence.
```

Link below: "Voir comment ça fonctionne →" (links to methode.html)

### 4.4 Domain cards (must mimic the reference card style)

Each card:
* White card with thin border and very subtle shadow
* Image 100% width on top
* ONLY top-right corner of the image rounded (`--r-one`). Do NOT round all corners.
* Bottom thin green bar (3–5px) in `--green-line`
* Small arrow block at bottom-right
* Title + one-line descriptor
* No link text (detail is for the RDV, not the site)

6 domains (CAFORMAC's actual domains — DO NOT CHANGE):

1. Hôtellerie & Services — Excellence opérationnelle terrain
2. Supply Chain & FMCG — Performance logistique et distribution
3. Management Opérationnel — Leadership et pilotage d'équipe
4. Relation Client — Fidélisation et posture de service
5. Structuration RH & GPEC — Organisation et compétences
6. Anglais Professionnel — Contextualisé au poste

### 4.5 Green Stats block (pixel-perfect requirement)

This section MUST recreate the exact visual grammar:
* Deep green background (`--green-deep` base)
* Two large tone-on-tone circles (opacity 6–8%)
* Right-side diagonal hatch (very thin lines, subtle)
* 1px dividers between stats
* Stats in a 3x2 grid desktop, stacked mobile
* Numbers are ultra-light weight 200

6 stats (exact — DO NOT CHANGE):

```
85%          taux de complétion des programmes
4,5/5        satisfaction moyenne mesurée
92%          d'application terrain constatée à J+15
100+         dirigeants formés — Programme FDFP 2025
25           outils opérationnels livrés par programme
6            domaines d'intervention métier
```

If circles/hatch/dividers/typography are missing → NON COMPLIANT.

### 4.6 Bandeau logos

Scrolling or static row of client logos. 10 max. No title above (logos speak for themselves).
Use placeholder gray rectangles if actual logos not available.

### 4.7 Bloc "3 impacts"

3 cards side by side.

Copy (exact):
```
Card 1 — Des résultats, pas des attestations
Vos équipes appliquent dès le retour en poste. Le suivi garantit que le changement tient.

Card 2 — Aligné sur vos priorités
La direction et le DRH sont impliqués dès la conception. Chaque heure investie a un impact direct.

Card 3 — Un investissement qui se justifie
Chaque mission produit des indicateurs mesurables. Des faits, pas des impressions.
```

### 4.8 CTA final + signature citation

Copy (exact):
```
Title: Votre formation ne produit pas de résultats.
Subtitle: On peut changer ça. 30 minutes. Gratuit.
Button: Demander un diagnostic →
```

Below button, signature citation in italic, orange quote marks:
```
"Nous ne vendons pas des heures de formation. Nous structurons la performance."
```

---

## 5) PAGE 2 — MÉTHODE & PREUVES (methode.html)

Order must be EXACT:

1. Problème (short)
2. Co-construction (3-actor table)
3. Cycle FMP (3 phases, detailed)
4. Processus (4 steps, visual timeline)
5. Formats (3 cards)
6. Comparaison table
7. Preuves (stats + cas + logos)
8. CTA

### 5.1 Problème

Copy (exact):
```
Title: Le problème n'est pas la formation. C'est l'absence de pilotage.

Text: Les formations classiques mobilisent vos équipes pendant 2 jours. Personne ne vérifie ce qui se passe après. Les budgets sont consommés. Les équipes reviennent en poste. Rien ne change.
```

### 5.2 Co-construction (table)

Copy (exact):
```
Title: Chaque programme est construit avec ceux qui vivent le problème.
```

3-row table:

| QUI | RÔLE | CE QUE ÇA GARANTIT |
|-----|------|---------------------|
| Votre direction | Définit les enjeux business prioritaires | La formation attaque les vrais problèmes |
| Votre DRH | Intègre la réalité de l'organisation | Les équipes adhèrent |
| Équipe CAFORMAC | Diagnostic, conception, suivi terrain | Contenu calibré pour le contexte africain |

### 5.3 Cycle FMP (3 phases, detailed)

Title: "Le cycle FMP : de la salle au terrain"

Phase 1 — Formation (exact copy):
```
Immersion intensive. Les participants travaillent sur des cas issus de leur entreprise. Chaque module est lié à un enjeu identifié lors du diagnostic. Objectif : des outils concrets, pas des théories.
```

Phase 2 — Maturité (exact copy):
```
Retour en poste. Application immédiate. Le manager de proximité est impliqué : il observe, il accompagne, il valide. La formation ne s'arrête pas à la salle.
```

Phase 3 — Performance (exact copy):
```
Suivi structuré à J+15. Mesure d'application terrain. Retour d'expérience. Ajustements. Restitution aux managers et à la direction.
```

Citation after Phase 3 (use orange quote marks):
```
"La mission n'est validée que si un changement opérationnel est constaté et documenté."
```

### 5.4 Processus (4 steps, visual timeline)

Horizontal on desktop, vertical on mobile. Step 04 visually larger (differentiator).

```
01 Diagnostic — Enjeux et écarts de compétences
02 Conception — Micro-modules et cas terrain
03 Formation terrain — Présentiel, simulation, feedback
04 Suivi J+15 — Mesure d'application et restitution
```

### 5.5 Formats (3 cards)

Title: "Des formats conçus pour la réalité terrain"

3 cards (exact copy):
```
Card 1 — Présentiel terrain
Sessions dans l'environnement de travail du client.

Card 2 — Sessions intensives
Blocs concentrés sur les périodes creuses de l'activité.

Card 3 — Suivi à distance
Points de contrôle entre les sessions pour maintenir la dynamique.
```

Below cards, one line:
```
Adaptation ciblée ou conception sur mesure. Le diagnostic détermine la bonne formule.
```

### 5.6 Comparaison table

| | Ailleurs | CAFORMAC |
|---|---|---|
| Objectif | Conformité administrative | Enjeux opérationnels |
| Impact | Aucun suivi | Mesuré à J+15 |
| Manager | Spectateur | Responsabilisé |
| Succès | Taux de présence | Changement terrain |
| Formation | Dépense | Investissement |

Style: left column gray muted, right column bold. CAFORMAC column header in --green.

### 5.7 Preuves (stats + cas + logos)

3 key stats displayed large:
```
100+         dirigeants formés — Programme FDFP 2025
25           outils opérationnels livrés
6            domaines d'intervention métier
```

Cas client (exact copy):
```
Programme FDFP / ANESPLACI — Décembre 2025
100 dirigeants d'établissements privés formés à Abengourou.
25 outils opérationnels livrés. Contrat d'objectifs personnalisé.
Source : Agence Ivoirienne de Presse, 23/12/2025.
```

Link to AIP article if available.

Client logos: same banner as Accueil.

### 5.8 CTA

```
Title: Vous voulez savoir ce que ça changerait chez vous ?
Button: Diagnostic offert →
```

---

## 6) PAGE 3 — QUI NOUS SOMMES (qui.html)

Minimal, credible. No fluff.

### 6.1 Founder block (5 lines max)

Copy (exact):
```
+10 ans dans l'écosystème formation. Côté financeurs. Côté organismes. Côté entreprise.
6 ans de pilotage RH pour 400 collaborateurs en France.
J'ai vu où les formations échouent.
J'ai construit un modèle pour que ça n'arrive plus.
```

### 6.2 Cabinet facts

List format, no prose:
```
NOM : CAFORMAC (AFRICONSULT & ENGINEERING SA)
CERTIFIÉ : FDFP
BASE : Abidjan, Côte d'Ivoire
ZONE : Côte d'Ivoire et zone UEMOA
ÉQUIPE : Réseau d'experts terrain, sélectionnés par spécialité sectorielle
```

### 6.3 CTA

Button: "Diagnostic offert →"

---

## 7) PAGE 4 — DIAGNOSTIC OFFERT (diagnostic.html)

Order EXACT:

1. Accroche
2. WhatsApp button (ABOVE form — channel #1 in West Africa for B2B)
3. Form (5 fields only)
4. Direct contacts
5. Proof reassurance

### 7.1 Accroche

Copy (exact):
```
Title: Votre formation coûte. Elle devrait rapporter.
Subtitle: 30 minutes. Gratuit. On analyse votre situation et on vous dit ce qu'on changerait.
```

### 7.2 WhatsApp button

Full-width green button (WhatsApp green #25D366), above form:
```
Label: Écrire sur WhatsApp
Link: https://wa.me/2250797660543?text=Bonjour%2C%20je%20souhaite%20un%20diagnostic%20formation.
```

### 7.3 Form (5 fields only — NO message field)

```
Field 1: Nom complet (text)
Field 2: Entreprise (text)
Field 3: Fonction (dropdown: DG / DRH / Responsable formation / Autre)
Field 4: Téléphone (tel)
Field 5: Email (email)
Button: Demander mon diagnostic →
```

### 7.4 Direct contacts

```
Téléphone : (+225) 07 97 66 05 43
Email : contact@caformac.com
Adresse : Abidjan, Côte d'Ivoire
```

### 7.5 Proof reassurance

Copy (exact):
```
Certifié FDFP. 100+ dirigeants formés en 2025. Source : Agence Ivoirienne de Presse.
```

---

## 8) TEXTURES (MANDATORY, subtle)

* On green blocks: tone-on-tone circles + hatch lines (opacity <= 8%)
* On light sections: subtle diagonal texture (very low opacity), never loud

If texture is visible at first glance, it is too strong.

---

## 9) ABSOLUTE PROHIBITIONS

No:
* frameworks, build tools, CMS
* gradients flashy
* glassmorphism
* heavy animations
* thick shadows
* rounded everything
* multiple CTAs (only "Diagnostic offert")
* carousels
* fake testimonials or invented quotes
* lorem ipsum anywhere
* English text anywhere (site is 100% French)

---

## 10) DELIVERABLES

* 4 HTML pages
* 1 main CSS file (organized by components)
* Minimal JS (only for mobile nav, smooth scroll, WhatsApp widget, form validation)
* Fast load (<3s), optimized images placeholders
* Clean folder structure:

```
/index.html
/methode.html
/qui.html
/diagnostic.html
/CLAUDE.MD            (ne pas déployer — spec interne)
/assets/
  /css/style.css
  /js/main.js
  /img/               Logo + images du site
```

---

## 11) CONTENT INTEGRITY RULES

* All copy marked "(exact)" or "(exact copy)" must be used VERBATIM. Do not rephrase, shorten, or "improve".
* All stats must match section 4.5 and 5.7 exactly. Do not invent additional numbers.
* The 6 domains in section 4.4 are LOCKED. Do not substitute, rename, or reorder.
* Do not add pages, sections, or content blocks beyond what is specified.
* Do not add testimonials — CAFORMAC has none published yet.
* Do not add team member photos or bios beyond the founder block.

---

## 12) FINAL QA CHECKLIST (must pass)

- [ ] Only 4 HTML files exist
- [ ] Single CTA everywhere: "Diagnostic offert" / "Demander un diagnostic"
- [ ] Hero is full-bleed + left aligned
- [ ] Cards: image top-right ONLY rounded
- [ ] Stats green block: circles + hatch + 1px dividers + w200 numbers
- [ ] Orange used only for quote marks/micro accents
- [ ] Typography weights match (no bold headings)
- [ ] Spacing generous, white dominant
- [ ] Mobile responsive perfect
- [ ] WhatsApp floating button present on all pages
- [ ] WhatsApp button ABOVE form on diagnostic.html
- [ ] Navigation: Méthode · Qui sommes-nous · [Diagnostic offert]
- [ ] Footer: CAFORMAC + AFRICONSULT legal + FDFP + contacts
- [ ] SEO meta tags on all 4 pages
- [ ] All copy matches spec verbatim
- [ ] 6 domains match CAFORMAC actuals
- [ ] 6 stats match section 4.5 exactly
- [ ] No fake testimonials, no lorem ipsum, no English text
- [ ] Form has exactly 5 fields (no message field)
- [ ] Fonction field is dropdown (DG / DRH / Responsable formation / Autre)
- [ ] Site is 100% French

END.
