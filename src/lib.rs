extern crate wasm_bindgen;
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
#[derive(Clone, Copy, Debug)]
pub struct Foo {
  pub bar: Bar,
}

#[wasm_bindgen]
#[derive(Clone, Copy, Debug)]
pub struct Bar {
  value: u32,
}
