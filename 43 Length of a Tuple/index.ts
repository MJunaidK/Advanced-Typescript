/* Your Code Here */

type Length<T> = any;

//Fix: a type that can accept both(tesla and spaceX array) of these would be something like a read-only string array so we constrain the type T to make sure it conforms to read only string array
// string array has a member that gives us its length property and we can access that using another feature of typescript called lookup types
type Length1<T extends readonly string[]> = T['length'];

/* Test Cases */
import type { Equal, Expect } from '@type-challenges/utils';

const tesla = ['tesla', 'model 3', 'model X', 'model Y'] as const;
const spaceX = [
  'FALCON 9',
  'FALCON HEAVY',
  'DRAGON',
  'STARSHIP',
  'HUMAN SPACEFLIGHT',
] as const;

type cases = [
  Expect<Equal<Length<typeof tesla>, 4>>,
  Expect<Equal<Length<typeof spaceX>, 5>>,
  //@ts-expect-error
  Length<5>,
  //@ts-expect-error
  Length<'hello-world'>
];
