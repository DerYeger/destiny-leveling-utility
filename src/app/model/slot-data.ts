import {Slot} from './slot';
import {Character} from './character';

export class SaveData {
  readonly weaponData: WeaponsData;
  readonly characterData: Array<CharacterData>;

  private constructor() {
  }

  static of(weapons: Array<Slot>, characters: Array<Character>): SaveData {
    return {
      weaponData: WeaponsData.weaponsData(weapons),
      characterData: characters.map(it => CharacterData.characterData(it)),
    };
  }
}

export class SlotData {

  private constructor(
    readonly name: string,
    readonly power: number
  ) {
  }

  static fromSlot(slot: Slot): SlotData {
    return new SlotData(slot.name, slot.power);
  }

  static toSlot(slotData: SlotData): Slot {
    return new Slot(slotData.name, slotData.power);
  }
}

export class CharacterData {
  readonly characterName: string;
  readonly armor: Array<SlotData>;

  private constructor() {
  }

  static characterData(character: Character): CharacterData {
    return {
      characterName: character.name,
      armor: character.armor.map(slot => SlotData.fromSlot(slot))
    };
  }
}

export class WeaponsData {
  readonly weapons: Array<SlotData>;

  private constructor() {
  }

  static weaponsData(weaponArray: Array<Slot>): WeaponsData {
    return {
      weapons: weaponArray.map(slot => SlotData.fromSlot(slot))
    };
  }
}

