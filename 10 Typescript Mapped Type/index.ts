type Point = {
  readonly x: number;
  y?: number;
};

const point: Point = {
  x: 0,
  y: 0,
};

point.x = 12;

// let's look at how we can modify these using map type modifiers

// basic map type

type Mapped<T> = {
  [k in keyof T]: T[k];
};

type Result = Mapped<Point>;

//  mapped type modifiers we can use the read-only modifier to make the properties in our output read-only, Y has not become read-only because of this modifier

type Mapped1<T> = {
  readonly [k in keyof T]: T[k];
};

type Result1 = Mapped1<Point>;

// can also be more explicit about the fact that we are adding read-only to the output properties by using the plus token

type Mapped2<T> = {
  +readonly [k in keyof T]: T[k];
};
type Result2 = Mapped2<Point>;

// we can also make properties optional in the output by adding the question mark token, X has become optional

type Mapped3<T> = {
  +readonly [k in keyof T]?: T[k];
};
type Result3 = Mapped3<Point>;

// similar to the read-only modifier you can add the plus token before the question mark to be explicit that you are airing the optional nature to the output properties

type Mapped4<T> = {
  +readonly [k in keyof T]+?: T[k];
};
type Result4 = Mapped4<Point>;

// modifiers can also be used to remove the read on your optional nature in the output properties to remove the optional, readonly nature we can use the - question mark modifier

type Mapped5<T> = {
  -readonly [k in keyof T]-?: T[k];
};
type Result5 = Mapped5<Point>;

// real world use case for these modifiers

class State<T> {
  constructor(public current: T) {}
  // update(next: T) {
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

const state = new State({ x: 0, y: 0 });
state.update({ x: 0, y: 123 }); // works
state.update({ y: 123 }); // x is needed without partial<T>
console.log(state.current);
