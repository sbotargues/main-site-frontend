import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  ssr: false,
  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/css/tailwind.css"],

  vite: {
    plugins: [
      federation({
        remotes: {
          taskManagerFrontend: "http://localhost:3000/_nuxt/remoteEntry.js",
          // Puedes también hacer referencia a un URL en producción:
          // "taskManagerFrontend": "https://task-manager-frontend-nu-bice.vercel.app/_nuxt/remoteEntry.js"
        },
        shared: ["vue"],
      }),
    ],
  },

  compatibilityDate: "2024-10-15",
});
