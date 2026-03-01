# aprendeconmoni 🎵

> Landing page premium para **aprendeconmoni** — clases de arpa, partituras y música.

## 🎨 Paleta de Colores

| Variable | Color | Uso |
|---|---|---|
| `--primary-500` | `#A855F7` | Color principal (púrpura) |
| `--primary-400` | `#c084fc` | Hover states |
| `--primary-600` | `#9333ea` | Botones activos |
| `--bg-primary` | `#000000` | Fondo negro |
| `--bg-secondary` | `#09090B` | Fondo oscuro secciones |

## 📁 Estructura

```
aprendeconmoni/
├── index.html         # Página principal
├── styles.css         # All styles (dark mode premium)
├── script.js          # Animations & interactions
├── README.md          # Este archivo
└── images/
    ├── logo.png           # Logo principal (generado con IA)
    ├── hero_visual.png    # Visual del hero (generado con IA)
    ├── service_1.png      # Clases de Arpa (generado con IA)
    ├── service_2.png      # Lectura de Partituras (generado con IA)
    ├── service_3.png      # Técnica & Postura (generado con IA)
    ├── service_4.png      # Música para Eventos (generado con IA)
    ├── service_5.png      # Arpa desde Cero (CSS art fallback)
    └── service_6.png      # Repertorio Musical (CSS art fallback)
```

## 📌 Secciones

1. **Hero** — Título, CTA y visual del arpa con estadísticas
2. **Social Proof** — Logos y credenciales
3. **Servicios** — 6 flip cards interactivas con imágenes
4. **Mi Mundo** — Showcase con visualización de cuerdas
5. **Proceso** — 4 pasos para empezar
6. **Testimonios** — 4 reseñas de alumnos
7. **Sobre Mí** — Bio de Moni con redes sociales
8. **CTA Final** — Llamada a la acción
9. **Contacto** — Formulario + info de contacto
10. **Footer** — Links + redes + copyright

## ✏️ Personalización Rápida

### Cambiar color principal
En `styles.css`, busca `--primary-500` y reemplaza `#A855F7` por tu color:
```css
--primary-500: #TU_COLOR;
--primary-rgb: R, G, B;  /* Valores RGB del color */
```

### Cambiar textos
Abre `index.html` y busca el texto que deseas cambiar. Los títulos principales están en etiquetas `<h1>`, `<h2>`, `<h3>`.

### Agregar tu foto
Reemplaza el archivo `images/hero_visual.png` con tu foto o imagen preferida.

### Agregar links reales a redes sociales
En `index.html`, busca los elementos con `id="link-instagram"`, `id="link-youtube"`, `id="link-tiktok"` y actualiza el atributo `href`.

### Activar el formulario de contacto
El formulario actualmente simula el envío. Para activarlo, integra un servicio como:
- **Formspree**: https://formspree.io
- **Netlify Forms**: Agrega `netlify` al tag `<form>`
- **EmailJS**: Para envío directo desde JavaScript

## 🚀 Publicación

### GitHub Pages (Gratuito)
1. Crea un repositorio en GitHub
2. Sube todos los archivos
3. Ve a Settings → Pages → Deploy from branch (main)

### Netlify (Gratuito)
1. Arrastra la carpeta del proyecto a https://app.netlify.com/drop

### Vercel (Gratuito)
1. Conecta tu repositorio GitHub en https://vercel.com

## 📱 Responsive

La web es 100% responsive con breakpoints en:
- **Desktop XL**: 1440px+
- **Desktop**: 1024px - 1439px  
- **Tablet**: 768px - 1023px
- **Mobile**: hasta 767px

## 🎵 Funcionalidades Interactivas

- ✅ Sistema de 50 partículas flotantes
- ✅ Flip cards 3D (hover desktop / tap mobile)
- ✅ Contadores animados con easing
- ✅ Navbar sticky con blur al scroll
- ✅ Animación interactiva de cuerdas del arpa
- ✅ Scroll reveal con Intersection Observer
- ✅ Formulario con feedback visual
- ✅ Tilt effect en testimonios
- ✅ Menú hamburguesa en mobile
- ✅ Parallax sutil en hero

---

© 2026 aprendeconmoni. Hecho con 💜 y música.
