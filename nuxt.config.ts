// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  devServer: {
    port: 3002
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    // 'nprogress/nprogress.css',
    'gentelella/vendors/font-awesome/css/font-awesome.min.css',
    // 'gentelella/vendors/nprogress/nprogress.css',
    'gentelella/build/css/custom.min.css',
    // 'gentelella/vendors/iCheck/skins/flat/green.css',
  ],

  build: {
    transpile: []
  },
  vite: {
    optimizeDeps: {
      include: ['jquery', 'bootstrap', 'gentelella']
    }
  },

  modules: ["@nuxt/scripts"],
  app: {
    head: {
        script: [
            {
              src: 'https://code.jquery.com/jquery-2.2.4.min.js',
              defer: true,
            },
            // {
            //   src: 'https://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js',
            //   defer: true,
            // },
            // {
            //   src: 'https://cdnjs.cloudflare.com/ajax/libs/progressbar.js/1.0.1/progressbar.min.js',
            //   defer: true,
            // },
            // {
            //   src: 'https://cdnjs.cloudflare.com/ajax/libs/iCheck/1.0.2/icheck.min.js',
            //   defer: true,
            // }
        ],
        title: 'Gentelella',
        charset: 'utf-8',
        viewport: 'width=device-width, initial-scale=1'
    }
}
})