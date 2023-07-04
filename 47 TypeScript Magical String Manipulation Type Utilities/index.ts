//  creating a utility type function that takes a string literal as input and is designed to return its uppercase variant
export type UppercaseSimple<T> = T extends 'a' ? 'A' : T extends 'b' ? 'B' : T;

type a = UppercaseSimple<'a'>;
type b = UppercaseSimple<'b'>;

// one level beyond this and create a recursive version

export type UppercaseRecursive<T> = T extends `a${infer Rest}`
  ? `A${UppercaseRecursive<Rest>}`
  : T extends `b${infer Rest}`
  ? `B${UppercaseRecursive<Rest>}`
  : T;

type abba = UppercaseRecursive<'abba'>;

// built-in type utility within typescript called uppercase which does exactly the same thing

type abba1 = Uppercase<'abba'>;
const s: abba1 = 'ABBA';

type Loud = 'Hello FAM';
type Quiet = Lowercase<Loud>;

type nw = 'nationwide is on your side';
type nationwide = Capitalize<nw>;

type UncomfortableGreeting = Uncapitalize<Loud>;

// do not work on punctuations so exclamation mark
type Scream = Uppercase<'Hello!'>;

// do work on special characters
type CV = Uppercase<'résumé'>;
type gammaGamma = Uppercase<'γγ'>;

// Use case utilized by combining them with typescript template literal types
type Getter<T extends string> = `get${Capitalize<T>}`;
type Setter<T extends string> = `set${Capitalize<T>}`;

type name = 'Name';
type getName = Getter<name>;
type setName = Setter<name>;
