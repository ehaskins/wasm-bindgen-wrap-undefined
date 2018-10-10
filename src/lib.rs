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

#[wasm_bindgen]
impl Foo {
  pub fn new() -> Foo {
    Foo {
      bar: Bar { value: 0 },
    }
  }

  pub fn inc(&mut self) {
    self.bar.value = self.bar.value + 1;
  }
}
