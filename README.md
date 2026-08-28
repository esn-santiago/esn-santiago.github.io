# ESN Santiago de Compostela

**Erasmus Student Network · Santiago de Compostela**

Sitio web de **ESN Santiago de Compostela**, orientado a estudiantes internacionales, movilidad, voluntariado, integración y actividades interculturales.

> 🌍 **Students Helping Students**

---

## 📖 Sobre el proyecto

Este repositorio contiene el desarrollo del sitio web de **Erasmus Student Network Santiago de Compostela**, una comunidad local dedicada a acompañar a estudiantes internacionales y fomentar el intercambio cultural y la participación universitaria.

La web centraliza:

- 🎓 Información para estudiantes internacionales
- 📅 Eventos y actividades (integrados vía Eventupp)
- 🪪 Solicitud de la ESNcard
- 💳 Métodos de pago
- 🧑‍🤝‍🧑 Comunidad ESN y voluntariado
- 📍 Consejos y guías sobre Santiago de Compostela (Erasmus tips)
- 📰 Blog con artículos individuales
- 📄 Aviso legal, política de privacidad y términos y condiciones
- 📬 Contacto

---

## 🌐 Idiomas

El sitio está disponible en **7 idiomas**, con enrutado por prefijo de idioma (el español, por defecto, no lleva prefijo):

- 🇪🇸 **Español** (`/`)
- 🇬🇧 **English** (`/en`)
- 🇬🇱 **Galego** (`/gl`)
- 🇫🇷 **Français** (`/fr`)
- 🇩🇪 **Deutsch** (`/de`)
- 🇵🇹 **Português** (`/pt`)
- 🇮🇹 **Italiano** (`/it`)

Los diccionarios de cada idioma viven en [src/i18n/](src/i18n/), y las páginas dinámicas `[...lang]` generan cada versión localizada en base a ellos.

---

## 🛠️ Tecnologías

- [Astro](https://astro.build/) 6 — framework principal (generación estática)
- [React](https://react.dev/) 19 — componentes interactivos (vía `@astrojs/react`)
- TypeScript — tipado y lógica
- [Tailwind CSS](https://tailwindcss.com/) 4 — estilos y diseño responsive
- [Sharp](https://sharp.pixelplumbing.com/) — optimización de imágenes
- Prettier (con `prettier-plugin-astro`) — formateo de código
- pnpm — gestor de paquetes
- GitHub Actions — automatización del despliegue
- GitHub Pages — hosting

---

## 📁 Estructura

```text
.
├── public/
│   └── payment-methods/
│
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── HomePage.astro
│   │   ├── PaymentMethods.astro
│   │   ├── SiteFooter.astro
│   │   ├── SiteNavigation.astro
│   │   └── UpcomingEvents.astro
│   ├── i18n/            # Diccionarios por idioma (es, en, gl, fr, de, pt, it)
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── [...lang]/       # Rutas localizadas ([...slug], blog/[post], index)
│   │   ├── blog/[post].astro
│   │   ├── esncard-form.astro
│   │   ├── events-frame.astro
│   │   └── [...slug].astro
│   └── styles/
│       └── global.css
│
├── .github/
│   └── workflows/
│       └── deploy.yml
│
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🚀 Desarrollo local

### Requisitos

- Node.js `>= 20` (el despliegue usa Node 24)
- [pnpm](https://pnpm.io/) (gestor de paquetes usado por el proyecto)

Comprueba las versiones:

```bash
node --version
pnpm --version
```

### Instalación

Clona el repositorio:

```bash
git clone https://github.com/esn-santiago/esn-santiago.github.io.git
```

Entra en el proyecto:

```bash
cd esn-santiago.github.io
```

Instala las dependencias:

```bash
pnpm install
```

Inicia el servidor de desarrollo:

```bash
pnpm dev
```

La aplicación estará disponible normalmente en:

```text
http://localhost:4321
```

---

## 🏗️ Build

Para generar la versión de producción:

```bash
pnpm build
```

Para comprobar localmente el resultado:

```bash
pnpm preview
```

---

## 🌍 Despliegue

El proyecto se despliega automáticamente en **GitHub Pages** mediante GitHub Actions ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) en cada push a `main`:

```text
git push a main
    ↓
GitHub Actions (pnpm install --frozen-lockfile)
    ↓
pnpm build (Astro)
    ↓
GitHub Pages
```

---

## 🎨 Objetivos de diseño

El sitio busca ofrecer una experiencia:

- 📱 Responsive
- ⚡ Rápida
- ♿ Accesible
- 🌍 Multilingüe (7 idiomas)
- 🧭 Fácil de navegar
- 🎓 Orientada a estudiantes
- 🤝 Centrada en la comunidad

---

## 🤝 Comunidad

ESN Santiago de Compostela forma parte de la comunidad de **Erasmus Student Network**, una red internacional de estudiantes y voluntariado dedicada a apoyar la movilidad y la integración de estudiantes internacionales.

La actividad local se desarrolla en **Santiago de Compostela, Galicia, España**.

---

## 📍 Santiago de Compostela

La web sirve también como punto de entrada para estudiantes que llegan a Santiago:

- Información práctica (Erasmus tips)
- Actividades culturales y eventos
- Comunidad internacional
- Voluntariado
- Experiencias Erasmus

---

## 🔮 Posibles mejoras futuras

- [ ] Calendario de eventos propio (más allá del iframe de Eventupp)
- [ ] Sistema de categorías/etiquetas en el blog
- [ ] Buscador
- [ ] Mapa de actividades en Santiago
- [ ] Galería de fotografías
- [ ] Integración con redes sociales

---

## 👥 Contribución

Las contribuciones y propuestas de mejora son bienvenidas.

Para contribuir:

```bash
git checkout -b feature/nueva-funcionalidad
```

Realiza tus cambios y crea un commit:

```bash
git add .
git commit -m "feat: nueva funcionalidad"
```

Después:

```bash
git push origin feature/nueva-funcionalidad
```

y abre un Pull Request.

---

## 📄 Licencia

Este proyecto se distribuye bajo licencia [MIT](LICENSE).
