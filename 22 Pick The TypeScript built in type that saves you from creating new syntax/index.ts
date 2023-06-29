export type Point3D = {
  x: number;
  y: number;
  z: number;
};

// create a type called point2d with just the members x and y from point 3d

// create a basic map type that does no transformation to the input type

export type Pick1<T> = {
  [P in keyof T]: T[P];
};

export type Point2D = Pick1<Point3D>;

// our objective with pick is to go through only some of the keys instead of going through all of them
// the answer is to take the number of keys that we want as a generic argument constrained by key of t

export type Pick2<T, K extends keyof T> = {
  [P in K]: T[P];
};

export type Point2D_ = Pick2<Point3D, 'x' | 'y'>;

//  you don't actually need to write this particular pick type as it exists with the exact same name within the built-in typescript library

export type Point2D__ = Pick<Point3D, 'x' | 'y'>;
