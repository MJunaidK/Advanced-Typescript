type WrappedInDeep = Promise<Promise<Promise<Promise<Promise<string>>>>>;

type awaitedResult = Awaited<WrappedInDeep>;

async function example<T>(input: T) {
  // type A = Awaited<Promise<string>>;
  const output: Awaited<T> = await input;
  const output1 = await Promise.resolve('Junaid');
}

// Infer: https://stackoverflow.com/questions/60067100/why-is-the-infer-keyword-needed-in-typescript

// 1
interface Example {
  foo: string;
}

type GenericExample<T> = T extends Examlep ? 'foo' : 'bar';

// 2: we declare a new type variable R in MyType, which gets inferred from T.
type MyType<T> = T extends infer R ? R : never;
type T1 = MyType<{ b: boolean }>;

//No equally named type declaration R2 and no infer confuses TS for R2 type
type MyType2<T> = T extends R2 ? R2 : never; // error, R2 undeclared

// 3:
type ReturnType1<T> = T extends (...args: any[]) => infer R ? R : never;

class A {}
type t1 = ReturnType1<A>; // never
type t2 = ReturnType1<() => number>; //number
type t3 = ReturnType1<() => void>; //void

// 4: Without infer R, typescript chooses equally named type declaration R

type R = string;

type ReturnType2<T> = T extends (...args: any[]) => R ? R : never;

class A2 {}
type t4 = ReturnType2<A2>; // never
type t5 = ReturnType2<() => number>; //never
type t6 = ReturnType2<() => void>; //never

// 5: infer R shadows type references of an equally-named type declaration R1:

type R1 = string;

type ReturnType3<T> = T extends (...args: any[]) => infer R1 ? R1 : never;

class A3 {}
type t7 = ReturnType3<A2>; // never
type t8 = ReturnType3<() => number>; //number
type t9 = ReturnType3<() => void>; //void
