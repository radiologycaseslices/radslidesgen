# RadSlides Gen

**Instagram slide maker for radiology educators.**  
Create 1080×1080 case slides with images, captions, and formatting — download as PNG, ready to post.

🔗 **Live app:** [radiologycaseslices.github.io/radslidesgen](https://radiologycaseslices.github.io/radslidesgen)  
📸 **Instagram:** [@radiologycaseslices](https://instagram.com/radiologycaseslices)

---

## Features

- 1080×1080px slides — correct for Instagram feed posts
- Multi-slide support — use `---` to separate slides
- Image upload — up to 4 images per slide with captions
- Text formatting — Bold, Cyan, Yellow, Red, Green color highlights
- Font size controls — Auto-fit or manual A+ / A−
- `@radiologycaseslices` watermark on every slide
- Download each slide as PNG
- Keyboard navigation — Left / Right arrow keys
- Works offline — installable as a PWA

---

## How to use

1. Type your slide content in the editor using markdown-style syntax:
   - `# Heading` for title
   - `## Subheading`
   - `- bullet point` for lists
   - Use `---` on its own line to separate slides
2. Select text and click **B**, **Cyan**, **Yellow** etc. to format
3. Upload images (optional, max 4)
4. Add image captions separated by `---`
5. Click **⚡ Generate**
6. Navigate slides with Prev / Next or arrow keys
7. Click **↓ Download PNG** for each slide

---

## Install as PWA

On Chrome / Edge desktop or Android Chrome:
- Visit the live URL
- Click the **Install** button in the address bar (or browser menu → "Install app")
- Opens as a standalone app, works offline

---

## Deploy your own copy

```bash
git clone https://github.com/radiologycaseslices/radslidesgen
cd radslidesgen
# Open index.html directly in browser, or push to GitHub Pages
```

Enable GitHub Pages: **Repo Settings → Pages → Source: main branch → / (root)**

---

## File structure

```
radslidesgen/
├── index.html       # The entire app (single file)
├── manifest.json    # PWA manifest
├── sw.js            # Service worker (offline support)
├── icons/
│   ├── icon-192.png
│   └── icon-512.png
└── README.md
```

---

*Built for the Indian radiology resident community.*
