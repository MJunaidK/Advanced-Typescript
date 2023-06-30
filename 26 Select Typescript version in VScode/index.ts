type Attributes = {
  color?: string;
  font?: string;
  [data: string]: string | undefined;
};

type Attributes1 = {
  color?: string;
  font?: string;
  [data: `data-${string}`]: string | undefined;
};

//  only allowed members for something that is marked as attributes would be color, font or something that starts with the data dash
const classic: Attributes1 = {
  colour: 'red',
  font: 'Helvetica',
  'data-name': 'classic',
};
