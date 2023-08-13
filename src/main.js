/**
 * main.js
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
// Composables
import { createApp } from 'vue'

// Components
import App from './App.vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')

//Bootstrap styling
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
