type Color = ColorString | ColorRGB;
type ColorString = 'red' | 'blue' | 'yellow' | 'purple';
type ColorRGB = [red: number, green: number, blue: number];

type Theme = Record<string, Color>;

// without type annotation, reason is that without that annotation we get nice type inference out of the box
const theme = {
  primary: 'red',
  secondary: [0, 255, 0],
  tertiary: 'purpel',
};

const [r, g, b] = theme.secondary;

////////////////////////////

// With type annotation: we were to add a type annotation for this same variable all of that inference will go away
const theme1: Theme = {
  primary: 'red',
  secondary: [0, 255, 0],
  tertiary: 'purpel',
};
const [r1, g1, b1] = theme1.secondary;

// With satisfies and no type annotation, satisfies which can be used to make sure that a particular object conforms to a particular type but it doesn't impact any of the type inference
const theme2 = {
  primary: 'red',
  secondary: [0, 255, 0],
  tertiary: 'purple',
} satisfies Theme;
const [r2, g2, b2] = theme1.secondary;
