// Use case 1

type CSSValue =
  // implies px
  | number
  // number + px|em|rem
  | string;

function size(input: CSSValue) {
  return typeof input === 'number' ? input + 'px' : input;
}

size(123);
size('123px');
size('12em');
size('12ex'); // Error

///////////////////

type CSSValue1 =
  // implies px
  | number
  // number + px|em|rem
  | `${number}px`
  | `${number}em`
  | `${number}rem`;

function size1(input: CSSValue1) {
  return typeof input === 'number' ? input + 'px' : input;
}

size1(123);
size1('123px');
size1('12em');
size1('12ex');
