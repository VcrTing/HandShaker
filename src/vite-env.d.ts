/// <reference types="vite/client" />

declare global {
    type ONE = { [k: string]: any }
    type MANY = ONE[ ]
    type ID = string | number
    type IDN = string | number | null
}

declare module 'mitt'
declare module 'dayjs'
declare module '~pages'
declare module 'clipboard'
declare module 'vuejs3-datepicker'
declare module 'pinia-plugin-persist'
declare module 'virtual:generated-layouts'
