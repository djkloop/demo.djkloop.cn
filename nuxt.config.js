module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'demo.djkloop.cn',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: '基于vue的Nuxt框架 - Nuxt.js project'
      },
      {
        name: 'keywords',
        content: 'vue, vue-router, vuex, nuxt, demo, blog'
      },
      {
        name: 'author',
        content: 'djkloop'
      }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  css: [
    '@/assets/normalize.css',
    'element-ui/lib/theme-chalk/display.css',
    '@/assets/main.scss'
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#409EFF' },
  /*
  ** Add element-ui in our app, see plugins/element-ui.js file
  */
   plugins: [
    '@/plugins/element-ui'
  ],
  build: {
    vender:['element-ui'],
    babel: {
      'plugins': [['component', [
        {
          'libraryName': 'element-ui',
          'styleLibraryName': 'theme-chalk'
        },
        'transform-async-to-generator',
        'transform-runtime'
      ]]],
      comments: true
    },
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
