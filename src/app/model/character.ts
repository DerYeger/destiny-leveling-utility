import {Slot} from './slot';
import {sum} from '../utils';
import {OnChange} from './on-change';

export class Character extends OnChange {

  power: number;
  missingPower: number;

  readonly slots: Array<Slot> = [...this.weapons, ...this.armor];

  constructor(
    readonly name: string,
    readonly weapons: Array<Slot>,
    readonly armor: Array<Slot>
  ) {
    super();
    this.slots.forEach(it => it.addListener(() => this.update()));
  }

  update() {
    const powerSum = sum(this.slots.map(s => s.power));
    this.power = Math.floor(powerSum / this.slots.length);
    this.missingPower = (this.power + 1) * this.slots.length - powerSum;
    this.slots.forEach(slot => this.updateSlotState(slot));
    this.invokeListeners();
  }

  private updateSlotState(slot: Slot) {
    if (slot.power <= this.power - 4) {
      slot.state = 'failed';
    } else if (slot.power >= this.power) {
      slot.state = 'passed';
    } else if (slot.state !== null) {
      slot.state = null;
    }
  }
}
