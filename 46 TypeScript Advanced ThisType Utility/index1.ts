// Usage

// here we are annotating using with this type utility that the usage of this within the methods is going to have everything that exists within data as well as access to any of the other methods that might exist
type StateDescription<D, M> = {
  data: D;
  methods: M & ThisType<D & M>;
};

// next you provide a utility create set function which takes a particular State description and then basically squashes the data as well as the method members into a single object and therefore it has a return type annotation of D intersection with M
function createState<D, M>(desc: StateDescription<D, M>): D & M {
  return { ...desc.data, ...desc.methods };
}

// Usage
let state = createState({
  data: { x: 0, y: 0 },
  //  this within the methods is now going to point to something that has access to both the data members as well as the methods members (ThisType<D & M>)
  methods: {
    moveBy(dx: number, dy: number) {
      this.x += dx;
      this.y += dy;
    },
  },
});

// on the state object that is returned we have access to to X as well as y as well as the move by Method(D intersection with M)
state.x = 10;
state.y = 20;
state.moveBy(5, 5);
