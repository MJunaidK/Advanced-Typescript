type Point = {
  x: number;
  y: number;
};

type X = Point['x']; // Lookup types
type PointKeys = keyof Point; // keyof operator

// example variable representing the point type called origin.

const origin1: Point = {
  x: 0,
  y: 0,
};

origin1.x = 100; //should error

// a new type called readonly point with x and y marked as readonly
type ReadonlyPoint = {
  readonly x: number;
  readonly y: number;
};

// using this readonly type for origin.
const origin2: ReadonlyPoint = {
  x: 0,
  y: 0,
};

origin2.x = 100; // should error

// create a similar utility type function for ourself with mapped type

type ReadonlyPoint1 = {
  readonly [key in 'x' | 'y']: number;
};

const origin3: ReadonlyPoint1 = {
  x: 0,
  y: 0,
};

origin3.x = 100;

// Removing all hardcoding

type ReadonlyPoint2 = {
  readonly [key in keyof Point]: Point[key];
};

const origin4: ReadonlyPoint2 = {
  x: 0,
  y: 0,
};

origin4.x = 100;

// Using generics ro remove hardcoded Point type

type ReadonlyPoint3<T> = {
  readonly [key in keyof T]: T[key];
};

const origin5: ReadonlyPoint3<Point> = {
  x: 0,
  y: 0,
};

origin5.x = 100;

// readonly mapped type utility

const origin6: Readonly<Point> = {
  x: 0,
  y: 0,
};

origin6.x = 100;
