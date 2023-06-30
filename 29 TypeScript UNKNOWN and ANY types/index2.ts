function log(value: any) {
  console.log(value.toFixed(2));
}

log(123.456);
log('Hello world');

function log1(value: unknown) {
  if (typeof value === 'number') {
    console.log(value.toFixed(2));
  } else {
    console.log(value);
  }
}
log1(123.456);
log1('Hello world');
