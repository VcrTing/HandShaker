import type { App } from 'vue'

import { createPinia } from 'pinia'
import persist from 'pinia-plugin-persistedstate'

import router from './router';

import instrument from '../ui/instrument';

export function instaii(app: App) {
    const store = createPinia(); 
    store.use(persist)

    return app.use( store ).use( router ).use( instrument )
}