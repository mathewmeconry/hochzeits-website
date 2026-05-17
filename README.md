# Hochzeits-Website

Statische Hochzeits-Website gebaut mit [Astro](https://astro.build), deployed via **GitHub Actions → GitHub Pages**.

## ✨ Stack

| Was | Womit |
|-----|-------|
| Framework | [Astro](https://astro.build) 5, output: `static` |
| Fonts | [Cormorant Garamond](https://fonts.google.com/specimen/Cormorant+Garamond) via Google Fonts |
| Package Manager | [pnpm](https://pnpm.io) ≥ 9 |
| Deployment | GitHub Actions · `withastro/action@v3` |

---

## 🚀 Lokale Entwicklung

```bash
# Abhängigkeiten installieren
pnpm install

# Entwicklungsserver starten (http://localhost:4321)
pnpm dev

# Produktions-Build erstellen (Ausgabe: dist/)
pnpm build

# Build lokal vorschauen
pnpm preview
```

---

## ✏️ Inhalte anpassen

**Alle Inhalte befinden sich in einer einzigen Datei:**

```
src/content/wedding.ts
```

Dort lassen sich Namen, Datum, Location, RSVP-Frist und Links anpassen,
ohne eine einzige Komponente anfassen zu müssen.
Alle Stellen, die noch ausgefüllt werden müssen, sind mit `// [PLACEHOLDER]` markiert.

### Heldenbereich — Hochzeitsfoto hinzufügen

In `src/components/Hero.astro` ist ein CSS-Variable-Platzhalter vorbereitet.
Foto unter `public/images/hero.jpg` ablegen und in der Section ergänzen:

```html
<section class="hero" style="--hero-bg-image: url('/images/hero.jpg')">
```

Anschließend im `<style>`-Block die Overlay-`opacity` im `.hero__overlay`-Selektor
auf einen passenden Wert setzen (z. B. `0.55`) und ein Farbverlauf-Overlay ergänzen.

### Google Maps einbetten

1. Auf [maps.google.com](https://maps.google.com) die Location suchen.
2. **Teilen → Karte einbetten** → Einbettungs-URL kopieren.
3. In `src/content/wedding.ts` bei `venue.mapsEmbedUrl` eintragen.

---

## 🌐 GitHub Pages einrichten

### 1. `site`-URL setzen

`astro.config.mjs` öffnen und `site` auf die eigene GitHub-Pages-URL setzen:

```js
site: 'https://<username>.github.io', // eigene Root-Seite
// oder bei Projekt-Page:
site: 'https://<username>.github.io/hochzeits-website',
base: '/hochzeits-website',
```

### 2. GitHub-Repository konfigurieren

Repository → **Settings → Pages → Source: GitHub Actions** auswählen.

### 3. Deployen

Beim nächsten Push auf `main` wird die Seite automatisch gebaut und deployt.
Den Status verfolgen unter **Actions** → *Deploy to GitHub Pages*.

---

## 📁 Projektstruktur

```
hochzeits-website/
├── .github/
│   └── workflows/
│       └── deploy.yml          # GitHub Actions Deploy-Workflow
├── public/
│   └── favicon.svg
├── src/
│   ├── content/
│   │   └── wedding.ts          ← ALLE INHALTE HIER ANPASSEN
│   ├── layouts/
│   │   └── Layout.astro        # HTML-Rahmen, Fonts, globale Styles, Scroll-Animation
│   ├── pages/
│   │   └── index.astro         # Einstiegspunkt
│   └── components/
│       ├── Hero.astro           # Vollbild-Header mit Namens- und Datumsanzeige
│       ├── Location.astro       # Ort & Google Maps
│       ├── Menu.astro           # Menükarte (Vorspeise, Hauptgang, Dessert)
│       ├── RSVP.astro           # Anmeldebereich mit CTA-Button
│       ├── Photos.astro         # Foto-Teilen-Bereich
│       └── Footer.astro         # Namen & Datum
├── astro.config.mjs
├── package.json
└── tsconfig.json
```
