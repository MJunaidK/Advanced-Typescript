type Calc = {
  double(): void;
  half(): void;
};

const calc: Calc = {
  //  this is something that is going to have a member value of type number
  double(this: { value: number }) {
    this.value *= 2;
  },
  half(this: { value: number }) {
    this.value /= 2;
  },
};

const obj = {
  value: 1,
  ...calc,
};

obj.double();
console.log(obj.value); // 2

obj.half();
console.log(obj.value); // 1

//  there is a special utility type built into typescript called this type which can be used to get rid of this duplicate annotation
//  all usages of this within this object is going to point to something that has value of type number
const calc1: Calc & ThisType<{ value: number }> = {
  double() {
    this.value *= 2;
  },
  half() {
    this.value /= 2;
  },
};
