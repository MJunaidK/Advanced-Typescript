function foo(arg: unknown) {
  const isArgString = typeof arg === 'string';
  if (typeof arg === 'string') {
    console.log(arg.toUpperCase());
  }
}

function foo1(arg: string | number | boolean) {
  const isString = typeof arg === 'string';
  const isNumber = typeof arg === 'number';
  const isStringOrNumber = isString || isNumber;

  if (isStringOrNumber) {
    const onlyStringOrNumber: string | number = arg;
  } else {
    const booleanTest: boolean = arg;
  }
}

function foo2(x: string | number) {
  const one = typeof x === 'string';
  const two = one;
  const three = two;
  const four = three;
  const five = four;
  const six = five;
  const seven = six;
  if (one) {
    const example: string = x;
  }

  if (five) {
    const example: string = x;
  }

  if (six) {
    const example: string = x;
  }
}
type Shape =
  | { kind: 'circle'; radius: number }
  | { kind: 'square'; radius: number };

function area(shape: Shape): number {
  const { kind } = shape;
  const isCircle = kind === 'circle';
  if (isCircle) {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.size ** 2;
  }
}
