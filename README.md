# Nătălița & Stas — Digital Wedding Invitation

Static site, three languages (RO/EN/IT), Google-Form RSVP, deploys to GitHub Pages in ~2 minutes.

**Wedding:** Sunday, 20 September 2026, 15:00 · Lago Event Park, Dănceni, Chișinău

---

## What you need to do (one-time setup)

### 1. Add the dog-with-ring photo

Drop the original photo (the golden retriever holding the ring on its nose, from page 1 of the PDF) into:

```
assets/dog-ring.jpg
```

Recommended size: ~1200×1600 px, JPG, under ~500 KB. Until you add it, the page shows a subtle placeholder block — the rest of the design still looks correct.

### 2. Create the Google Form (the RSVP system)

Sign in to [forms.google.com](https://forms.google.com) **with the personal Gmail you want to own the responses**, then:

1. Create a blank form. Title it: **Confirmare Nuntă · Nătălița & Stas**
2. Add these four questions:

   | # | Question (paste all 3 languages in the title) | Type | Required |
   |---|----------------------------------------------|------|----------|
   | 1 | Nume / Name / Nome | Short answer | ✅ |
   | 2 | Veniți? / Will you attend? / Verrai? | Multiple choice — options: `Da · Yes · Sì`  and  `Nu · No · No` | ✅ |
   | 3 | Câte persoane? / How many people? / Quante persone? | Dropdown 1–6 | optional |
   | 4 | Restricții alimentare sau un mesaj / Dietary restrictions or a message / Restrizioni alimentari o un messaggio | Paragraph | optional |

3. **Responses tab → ⋮ menu (top-right of the responses tab) → "Get email notifications for new responses"** → toggle ON. Now every RSVP also pings your inbox.
4. **Responses tab → green Sheets icon** → "Create new spreadsheet" → done. All responses now also land in a Google Sheet.
5. Open that Sheet → **Share button** → add Nătălița's Gmail with **Editor** permission.
6. Back on the form: **Send button → `<>` Embed HTML tab** → copy the entire `<iframe …></iframe>` snippet.
7. Open `index.html`, find the comment **`REPLACE the iframe below`** (around line 110), and replace the placeholder `<iframe …></iframe>` with the snippet you copied. Set `width="100%"` and `height="900"` if it isn't already.

### 3. (Optional) Edit the RSVP deadline

In `index.html`, find the line with `<strong>23 august 2026</strong>` (inside the `.rsvp-deadline` paragraph) and change the date. Suggested: ~4 weeks before the wedding.

### 4. Deploy to GitHub Pages

From PowerShell, in this folder:

```powershell
git init
git add .
git commit -m "Initial wedding invitation"
git branch -M main
git remote add origin https://github.com/<YOUR-USERNAME>/nata-stas-wedding.git
git push -u origin main
```

Then on github.com:

1. Open the new repo → **Settings → Pages**.
2. **Source:** Deploy from a branch.
3. **Branch:** `main` / `(root)` → **Save**.
4. Wait ~1 minute. The site is live at:

```
https://<YOUR-USERNAME>.github.io/nata-stas-wedding/
```

That URL is what you paste into WhatsApp / Telegram / email.

---

## Local preview

Just double-click `index.html`. No build step, no `npm install`.

For best results (so relative paths and the Google Form iframe behave like they will on GitHub Pages), serve over HTTP instead:

```powershell
python -m http.server 8000
# then open http://localhost:8000
```

---

## File map

| File | Purpose |
|------|---------|
| `index.html` | Single page, all sections |
| `styles.css` | Styling — fonts, gold accents, mobile layout |
| `script.js` | RO/EN/IT language toggle, persists to `localStorage` |
| `wedding.ics` | "Add to calendar" file (20 Sep 2026 15:00, Europe/Chișinău) |
| `assets/dog-ring.jpg` | Hero photo *(you provide)* |
| `assets/heart.svg` | Gold heart marking the 20th on the calendar |

---

## After the wedding

You can either delete the GitHub repo or set its visibility to private — the live URL will stop working but the Google Sheet keeps all your RSVP data forever.
