export class Disposable {
  isDisposed = false;
  dispose() {
    this.isDisposed = true;
    this.log('disposed');
  }
  log(message: string) {
    console.log(message);
  }
}

export class File extends Disposable {
  // we have actually unintentionally replaced the log method from the disposable base class so if someone creates a file and calls dispose the dispose method will actually end up logging to the file
  //log(contents: string) {
  write(contents: string) {
    // ... write to file
  }
}
