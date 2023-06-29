// pick is also really useful when you want to constrain some argument based on some globally present type

// All the css properties
type CSSProperties = {
  color?: string;
  backgroundColor?: string;
  width?: number;
  height?: number;
  // ..lots more
};

function setSize(
  element: HTMLElement,
  //  no clear indication of the fact that these members are dependent upon the css properties
  //size: { width?: number; height?: number }
  // Usage: Just need the size properties
  size: Pick<CSSProperties, 'width' | 'height'>
) {
  element.setAttribute('width', (size.width ?? 0) + 'px');
  element.setAttribute('height', (size.height ?? 0) + 'px');
}
