/// <reference types="vite/client" />

declare global {
    type ONE = { [k: string]: any }
    type MANY = ONE[ ]
    type ID = string | number
    type IDN = string | number | null
}

declare module 'mitt'
declare module '~pages'
declare module 'virtual:generated-layouts'