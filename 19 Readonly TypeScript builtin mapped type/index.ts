/**
 * Make all properties in T readonly
 */
/*export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};*/

type Point = { x: number; y: number };

// Same as '{ readonly x: number, readonly y: number}'
type ReadonlyPoint = Readonly<Point>;

// built-in type with a practical example

function makeReadonly<T>(object: T): Readonly<T> {
  return Object.freeze({ ...object });
}

const editablePoint = { x: 20, y: 10 };
editablePoint.x = 25; // Success: allowed

const readonlyPoint = makeReadonly(editablePoint);
readonlyPoint.x = 10;
