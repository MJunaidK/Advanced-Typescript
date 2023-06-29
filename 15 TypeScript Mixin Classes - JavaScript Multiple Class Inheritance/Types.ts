import { Point3D } from './interfaces';
export type point2D = {
  x: number;
  y: number;
};

export type point3D = {
  z: number;
};

export const point: Point3D = {
  x: 0,
  y: 0,
  z: 0,
};

export class Example implements Point3D {
  x = 0;
  y = 0;
  z = 0;
}

// good example of type aliases is the kind of props that are common to components in front-end libraries

export type InputProps = {
  type: 'text' | 'email';
  value: string;
  onChange: (newValue: string) => void;
};

type InputOnChange = (newValue: string) => void;
// interface InputOnChange{(newValue: string) : void}

type InputValue = string;

type InputType = 'text' | 'email';

export type InputProps1 = {
  type: InputType;
  value: InputValue;
  onChange: InputOnChange;
};
