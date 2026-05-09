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

### 2. Create the Airtable RSVP base

We use Airtable instead of Google Forms because the responses land in a colorful sortable database (with green/red color-coding, totals row, kanban view, and a real mobile app) — much friendlier to scan than a plain spreadsheet.

Sign up at [airtable.com](https://airtable.com) **with the personal Gmail you want to own the responses**, then:

1. **Create a new base** called **Nuntă Nătălița & Stas**, with one table called `RSVP`.
2. **Define these fields** (delete the default columns):

   | Field | Type | Notes |
   |---|---|---|
   | `Nume` | Single line text | Primary field (rename "Name" to this) |
   | `Vine?` | Single select | Two options: `Da · Sì` (color: green) and `Nu · No` (color: red) |
   | `Persoane` | Number | Integer, 0–6 |
   | `Mesaj` | Long text | Optional — dietary or note |
   | `Trimis la` | Created time | Auto-populated timestamp, no setup |

3. **Add useful views**:
   - `Summary` view → Grid type → group by `Vine?`, add a footer with `SUM(Persoane)` to see total attendees instantly.
   - `Kanban` view → group by `Vine?` → great for checking on phone.

4. **Create the form**: in the table tab → **Create…** → **Form view** → name it `Confirmare nuntă`. Drag in the four user-facing fields (`Nume`, `Vine?`, `Persoane`, `Mesaj`) — leave `Trimis la` off, it auto-fills.

5. **Customize the form** for bilingual guests:
   - Title: `Confirmă prezența · Nătălița & Stas`
   - Subtitle: `Vă rugăm să confirmați până la 15 iulie 2026 / Si prega di confermare entro il 15 luglio 2026`
   - Field labels (paste both languages, e.g. `Nume / Nome`, `Vine? / Verrai?`, `Persoane / Persone`, `Mesaj / Messaggio`)
   - Mark `Nume` and `Vine?` as required.

6. **Email notifications**: form view → settings (gear icon) → toggle **"Email me at <gmail>"** ON. You get an email every time someone RSVPs.

7. **Share the base with Nătălița**: top-right **Share** button → add her Gmail → **Editor** access. She installs the Airtable mobile app and sees RSVPs live, color-coded, with totals.

8. **Get the embed code**: Form view → **Share form** button → **Embed this view on your site** → copy the `<iframe …>` snippet. It looks like:
   ```html
   <iframe class="airtable-embed"
           src="https://airtable.com/embed/appXXXXXX/shrYYYYYY?backgroundColor=…"
           frameborder="0" onmousewheel="" width="100%" height="900"
           style="background: transparent;"></iframe>
   ```

9. **Paste into the site**: open `index.html`, find the comment block **`Airtable RSVP form`** (around line 118), and replace the placeholder `src="<<PASTE_AIRTABLE_EMBED_SRC_HERE>>"` with your real `src` URL. Then `git commit` + `git push`.

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
