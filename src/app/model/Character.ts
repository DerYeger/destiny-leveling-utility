import {Slot} from './Slot';

export class Character {

  public slots: Slot[] = [...this.weapons, ...this.armor];

  constructor(
    public weapons: Slot[],
    public armor: Slot[]
  ) {
  }
}
