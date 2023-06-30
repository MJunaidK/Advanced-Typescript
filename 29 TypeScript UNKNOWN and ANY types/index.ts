let exampleAny: any;
let exampleUnknown: unknown;

exampleAny = 123;
exampleAny = 'Hello';

exampleUnknown = 123;
exampleUnknown = 'World';

exampleAny.ts.is.not.going.to.check.this.so.like.subscribe();
let anySetBool: Boolean = exampleAny;

exampleUnknown.trim();
let unknownSetBool: boolean = exampleUnknown;

if (typeof exampleUnknown === 'string') exampleUnknown.trim();
if (typeof exampleUnknown === 'boolean') {
  let unknownSetBool: boolean = exampleUnknown;
}
