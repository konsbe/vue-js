/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */

// Components
import App from './App.vue'

// Composables
// import { createApp } from 'vue'
import { createApp } from "vue/dist/vue.esm-bundler";

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
// app.config.compilerOptions.isCustomElement = (tag) => {
//     return tag.startsWith('ion-') // (return true)
//   }
