// Use case 2

/**
 * @param style is an combination of
 * Size: 'small' or 'medium' or 'large'
 * Color: 'primary' or 'secondary'
 * e.g 'small-secondary'
 */

function applyStyle(style: string) {
  // ..
}

applyStyle('small-primary');
applyStyle('large-secondary');
applyStyle('medim-primary'); // Error

////

type Size = 'small' | 'medium' | 'large';
type Color = 'primary' | 'secondary';
type Style = `${Size}-${Color}`;

function applyStyle1(style: Style) {
  // ..
}

applyStyle1('small-primary');
applyStyle1('large-secondary');
applyStyle1('medim-primary');
