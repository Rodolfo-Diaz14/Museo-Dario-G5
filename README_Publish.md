
# README_Publish — Versión ULTRA (A‑Frame + AR + Imágenes locales)

## Estructura esperada
- `index.html` (raíz)
- `ar.html`, `ar-marker.html`
- `css/`, `js/`, `assets/`

## GitHub Pages
1) Sube **todo el contenido** (no el ZIP) a la **raíz** del repo.
2) Settings → Pages → Source: *Deploy from a branch* → `main` → `/(root)`.
3) Espera 30–60 s y abre `https://<usuario>.github.io/<repo>/`.

## Netlify
1) Add new site → Deploy manually → arrastra la carpeta del sitio.
2) La URL generada será tipo `https://<sitio>.netlify.app/`.

## Cloudflare Pages
1) Workers & Pages → Create Application → **Pages** → Connect to Git.
2) Framework preset: **None** | Build command: **(vacío)** | Output directory: **/**.

## Notas
- Las imágenes son **locales** para máxima compatibilidad.
- Para **AR Hit‑Test** (`ar.html`), usar **Android + Chrome** (WebXR).
- Para **AR con marcador** (`ar-marker.html`), imprimir patrón Hiro (enlace dentro de la página).
