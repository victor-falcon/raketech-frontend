import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createAuth0 } from '@auth0/auth0-vue';

const app = createApp(App)

app.use(
    createAuth0({
        domain: import.meta.env.VITE_AUTH_DOMAIN,
        clientId: import.meta.env.VITE_AUTH_CLIENT_ID,
        authorizationParams: {
            redirect_uri: window.location.origin
        }
    })
)

app.mount('#app')
