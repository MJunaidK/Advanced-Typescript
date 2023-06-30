/*type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};*/

type Example1 = { a: number };
let example1: Readonly<Example1> = { a: 123 };
example1.a = 456; // Error readonly

type Example2 = { a: { b: number } };
let example2: Readonly<Example2> = { a: { b: 123 } };
example2.a.b = 456; // No error 😌

//however a type that you can create yourself which will be recursive type very similar to read-only called  deep read-only which simply maps the individual members value back to the recursive type read only

type DeepReadOnly<T> = {
  readonly [P in keyof T]: DeepReadOnly<T[P]>;
};

type Example3 = { a: { b: number } };
let example3: DeepReadOnly<Example3> = { a: { b: 123 } };
example3.a.b = 456; // No error 😌
