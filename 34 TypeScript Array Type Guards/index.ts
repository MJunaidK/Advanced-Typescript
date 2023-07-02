//  discriminated unions here we have a union called shape which can either be a square or a rectangle

type Square = {
  type: 'square';
  size: number;
};

type Rectangle = {
  type: 'rectangle';
  height: number;
  width: number;
};

type Shape = Square | Rectangle;

const shapes: Shape[] = getShapes();

const square = shapes.find((s) => s.type === 'square');
const size = square?.size;

const squares = shapes.filter((s) => s.type === 'square');
const sizes = squares.map((s) => s.size);

// convert the function that is used in find into a custom type guard by providing a return type annotation to that function that if it returns true it implies that s is a square and not a shape anymore

const square1 = shapes.find((s): s is Square => s.type === 'square');
const size1 = square1?.size;

const squares1 = shapes.filter((s): s is Square => s.type === 'square');
const sizes1 = squares1.map((s) => s.size);

// Move custom type guard into a utility function

const isSquare = (s: Shape): s is Square => s.type === 'square';
const isRectangle = (s: Shape): s is Square => s.type === 'rectangle';

const square2 = shapes.find(isSquare);
const size2 = square2?.size;
