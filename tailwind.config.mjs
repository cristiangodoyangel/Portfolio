// tailwind.config.mjs

// 1. Importa DaisyUI en la parte de arriba
import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },

  // 2. Añade DaisyUI a la lista de plugins
  plugins: [
    daisyui,
  ],

  // 3. (Recomendado) Dile a DaisyUI qué tema queremos usar
  daisyui: {
    themes: ["autumn", "dark", "cupcake", "bumblebee", "emerald", "corporate", "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden", "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black", "luxury", "dracula", "cmyk", "autumn"],
  },
}