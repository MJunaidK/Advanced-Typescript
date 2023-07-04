// Challenge: return the type of the first element within that array

/* Your Code Here */

type First<T> = any;

//  simple generic constraint that t must extend some form of an array
type First1<T extends any[]> = any;
// we can use a simple lookup type to look up the type of the zeroth index, this handles all except for the one where we want first of an empty Tuple to give us never
type First2<T extends any[]> = T[0];
// our first on an empty Tuple is actually returning the type undefined whereas the expectation is that this should return never, within the test case it is a good idea to map an empty array into never because an undefined might be an actual valid member of an array

//we need to figure out is if T is exactly an empty Tuple and we can do that with the conditional type checking if T extends an empty double and if so conditionally return never otherwise return T of 0

type First3<T extends any[]> = T extends [] ? never : T[0];

/* Test Cases */
import type { Equal, Expect } from '@type-challenges/utils';

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>
];

type errors = [
  //@ts-ex-error
  First<'notArray'>,
  //@ts-ex-error
  First<{ 0: 'arrayLike' }>
];
