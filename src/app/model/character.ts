import {Slot} from './slot';
import {sum} from '../utils';
import {OnChange} from './on-change';

export class Character extends OnChange {

  public power: number;
  public missingPower: number;

  public readonly slots: Array<Slot> = [...this.weapons, ...this.armor];

  constructor(
    public readonly name: string,
    public readonly weapons: Array<Slot>,
    public readonly armor: Array<Slot>
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
      slot.state = 'red';
    } else if (slot.power >= this.power) {
      slot.state = 'green';
    } else if (slot.state !== null) {
      slot.state = null;
    }
  }
}
