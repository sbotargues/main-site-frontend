import federation from "@originjs/vite-plugin-federation";

export default defineNuxtConfig({
  ssr: false,
  vite: {
    plugins: [
      federation({
        remotes: {
          taskManagerFrontend:
            "taskManagerFrontend@http://localhost:3000/_nuxt/remoteEntry.js",
          // consumir directamente de vercel sin necesidad de levantar el servidor del micro
          //"taskManagerFrontend@https://task-manager-frontend-nu-bice.vercel.app/_nuxt/remoteEntry.js",
        },
        shared: ["vue"],
      }),
    ],
  },

  compatibilityDate: "2024-10-15",
});
