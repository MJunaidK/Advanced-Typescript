// within JavaScript only a string number or a symbol can be used as a key within a JavaScript property

const str: string = 'key';
const num: number = 1337;
const sym: symbol = Symbol();

const valid = {
  [str]: 'valid',
  [num]: 'valid',
  [sym]: 'valid',
};

const obj = {};

const invalid = {
  [obj]: 'invalid',
};

//  if you wanted to create a type which could accept any of the valid Keys you could do that with the key of operator and apply that to the any type

type validKey = keyof any;
let example: validKey;
example = str;
example = num;
example = sym;
example = obj;

// you don't need to create this type yourself because this is actually provided by the typescript compiler as a part of the standard Library definition with the type name property key

let example1: PropertyKey;
example1 = str;
example1 = num;
example1 = sym;
example1 = obj;
