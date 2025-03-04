import { assertEquals, assertThrows } from "@std/assert";
import { assertArray, assertArrayType, isArray } from "./array.ts";
import { type } from "./type.ts";

Deno.test({
  name: "array",
  fn: () => {
    const value: unknown = [];
    const [t, v] = type(value);
    assertArrayType(t);
    assertArray(v);
    assertEquals(true, isArray(v));
    assertEquals(value, v);
  },
});

Deno.test({
  name: "not array",
  fn: () => {
    assertThrows(() => assertArray({}));
  },
});
