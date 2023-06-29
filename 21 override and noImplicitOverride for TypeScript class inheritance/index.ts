// Base class
/*class Visibility {
  visible = true;
  show() {
    this.visible = true;
  }
  hide() {
    this.visible = false;
  }
}*/

class Visibility1 {
  visible = true;
  setVisible(visible: boolean) {
    this.visible = visible;
  }
}

class MockVisibility extends Visibility1 {
  override setVisible(visible: boolean) {
    console.log(visible ? 'Shown' : 'Hidden');
  }
}

// app code
const real = new Visibility1();
//real.show();
//real.hide();
real.setVisible(true);
real.setVisible(false);

// test code
const mock = new MockVisibility();
//mock.show();
//mock.hide();
mock.setVisible(true);
mock.setVisible(false);
