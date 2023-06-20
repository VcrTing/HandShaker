import type { App } from 'vue';

import dropdown from './dropdown/Dropdown.vue'

export default {
    install(app: App) {
        app.component('dropdown', dropdown)
    }
}