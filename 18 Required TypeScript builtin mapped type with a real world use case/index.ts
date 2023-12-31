/**
 * Make all properties in T required
 */
export type Required<T> = {
  [P in keyof T]-?: T[P];
};

type PartialPoint = { x: number; y: number };

// Same as {x:number, y: number}
type Point = Required<PartialPoint>;

// Practical example of this required map type utility

// Optional members for consumers
type CircleConfig = {
  color?: string;
  radius?: number;
};

class Circle {
  // Required: Internally all members will always be present
  private config: Required<CircleConfig>;

  constructor(config: CircleConfig) {
    this.config = {
      color: config.color ?? 'green',
      radius: config.radius ?? 0,
    };
  }
  draw() {
    // No null checking needed
    console.log(
      'Drawing a color.',
      'Color:',
      this.config.color,
      'Radius:',
      this.config.radius
    );
  }
}
