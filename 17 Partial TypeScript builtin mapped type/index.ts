/**
 * Make all properties in T optional
 */

/*export type Partial<T> = {
  [P in keyof T]?: T[P];
};*/

type point = { x: number; y: number };

// Same as '{x?:number, y?:number}'
type PartialPoint = Partial<point>;

class State<T> {
  constructor(public current: T) {}
  update(next: Partial<T>) {
    this.current = { ...this.current, ...next };
  }
}

// Usage
const state = new State({ x: 0, y: 0 });
state.update({ y: 123 }); // Partial. No need to provide x
console.log(state); // Update successful: {x:0,y:123}
