type Padding = 'small' | 'normal' | 'large' | (string & {});

function getPadding(padding: Padding): string {
  if (padding === 'small') return '12px';
  if (padding === 'normal') return '16px';
  if (padding === 'large') return '24px';
  return padding;
}

let padding: Padding;
padding = 'small';
padding = '8px';
padding = 'large';

// Second method

type PaddingSize = 'small' | 'medium' | 'large';
type Padding1 = PaddingSize | Omit<string, PaddingSize>;

let padding1: Padding1;
padding1 = 'small';
padding1 = '8px';
padding1 = 'large';
