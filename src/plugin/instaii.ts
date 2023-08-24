import type { App } from 'vue'

import persist from 'pinia-plugin-persistedstate'
import { createPinia } from 'pinia'

import router from './router';

import { abilitiesPlugin, Can } from '@casl/vue'
import ability from './casi/ability'

export function instaii(app: App) {
    const store = createPinia(); 
    store.use(persist)

    return app
        .use( store )
        .use( router )
        .component('can', Can)
        .use(abilitiesPlugin, ability, { useGlobalProperties: true })
}