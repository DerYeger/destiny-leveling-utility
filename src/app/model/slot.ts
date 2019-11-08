import {OnChange} from './on-change';

export class Slot extends OnChange {

  state: string = null;


  private powerField: number;

  constructor(
    public name: string,
    power: number = 750,
  ) {
    super();
    this.powerField = power;
  }

  get power(): number {
    return this.powerField;
  }

  set power(power: number) {
    this.powerField = power;
    this.invokeListeners();
  }
}
