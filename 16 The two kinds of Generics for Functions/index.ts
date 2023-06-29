type A<T> = (x: T) => T;
type B = <T>(x: T) => T;

//declare const a: A; // Error missing generic argument
declare const aNum: A<number>;
declare const aStr: A<string>;

declare const b: B;
//declare const bIsNotGeneric: B<number>; // Error: B is not generic

//  annotate both of these functions with the same type a simply by passing in the generic argument that is relevant to the function
const numToNum: A<number> = function (x: number) {
  return x + 10;
};

const strToStr: A<string> = function (x: string) {
  return x + 'World';
};

// b itself is actually not generic however it points to a generic function
const identity: B = function <T>(x: T) {
  return x;
};

// Interface Equivalents

type A1<T> = (x: T) => T;

interface GenericInterfaceForFunction<T> {
  (x: T): T;
}
type B1 = <T>(x: T) => T;
interface InterfaceForGenericFunction {
  <T>(x: T): T;
}
