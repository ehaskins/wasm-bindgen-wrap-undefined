/* tslint:disable */
import * as wasm from './libcounter_bg';

function freeFoo(ptr) {

    wasm.__wbg_foo_free(ptr);
}
/**
*/
export class Foo {
    /**
    * @returns {Bar}
    */
    get bar() {
        return Bar.__wrap(wasm.__wbg_get_foo_bar(this.ptr));
    }
    set bar(arg0) {
        const ptr0 = arg0.ptr;
        if (ptr0 === 0) {
            throw new Error('Attempt to use a moved value');
        }
        arg0.ptr = 0;
        return wasm.__wbg_set_foo_bar(this.ptr, ptr0);
    }
    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeFoo(ptr);
    }
}

function freeBar(ptr) {

    wasm.__wbg_bar_free(ptr);
}
/**
*/
export class Bar {

    free() {
        const ptr = this.ptr;
        this.ptr = 0;
        freeBar(ptr);
    }
}

const lTextDecoder = typeof TextDecoder === 'undefined' ? require('util').TextDecoder : TextDecoder;

let cachedTextDecoder = new lTextDecoder('utf-8');

let cachegetUint8Memory = null;
function getUint8Memory() {
    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== wasm.memory.buffer) {
        cachegetUint8Memory = new Uint8Array(wasm.memory.buffer);
    }
    return cachegetUint8Memory;
}

function getStringFromWasm(ptr, len) {
    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));
}

export function __wbindgen_throw(ptr, len) {
    throw new Error(getStringFromWasm(ptr, len));
}

