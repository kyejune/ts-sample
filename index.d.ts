
declare module '*.vue' {
    import Vue from 'vue'
    const _default: Vue
    export default _default

    const $store:any;
}



declare namespace NodeJS {
    export interface Process {
        browser: boolean
        server: boolean
    }
}


interface CookieJsAPI {
    readonly version: string;
    readonly enabled: boolean;
    get(key: string, optionalDefaultValue?: any): any;
    set(key: string, value: any, expireTimestamp: number): any;
    remove(key: string): void;
    each(callback: (val: any, namespacedKey: string) => void): void;
    clearAll(): void;
    hasNamespace(namespace: string): boolean;
}