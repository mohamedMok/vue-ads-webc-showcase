import { createApp } from 'vue'
import App from './App.vue'
import "@mozaic-ds/mozaic-web-components/public/icons.js";
const app = createApp(App)
// Only works if using in-browser compilation.
// If using build tools, see config examples below.
app.config.compilerOptions.isCustomElement = (tag) => tag.includes('m-')
app.mount('#app')
