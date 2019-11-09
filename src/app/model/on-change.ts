export abstract class OnChange {
  protected changeListeners = new Array<() => any>();

  addListener(listener: () => any) {
    this.changeListeners.push(listener);
  }

  protected invokeListeners() {
    this.changeListeners.forEach(listener => listener());
  }
}
