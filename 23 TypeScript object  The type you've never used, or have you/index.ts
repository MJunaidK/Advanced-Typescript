//  javascript has a number of built-in types
let isPresent: boolean = false;
let magic: number = 66.6;
let hello: string = 'world';

//  special ones which are null and undefined
let notDefined: undefined = undefined;
let notPresent: null = null;

// modern javascript also has two more primitives which are symbol and big int
let penta: symbol = Symbol('star');
let biggy: bigint = 24n;

// everything else is this thing called an object
let car = { company: 'ford', model: 'mustang' };
let person = { name: 'Junaid', age: 23 };

// to only allow objects to be assigned to this particular variable
let iTakeNonPrimitivesOnly: object;
iTakeNonPrimitivesOnly = person; // Allow
iTakeNonPrimitivesOnly = car; // Allow
iTakeNonPrimitivesOnly = magic; // Error
iTakeNonPrimitivesOnly = hello; // Error

// WeakMap:  collection of key/value pairs whose keys must be objects

const objectToValue = new WeakMap();
objectToValue.set(car, 50000);
objectToValue.set(person, Infinity);

objectToValue.set(56, '');
