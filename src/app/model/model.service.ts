import {Injectable} from '@angular/core';
import {Slot} from './slot';
import {Character} from './character';
import {loadFromLocalStorage, saveToLocalStorage} from '../utils';
import {CharacterData, SaveData, SlotData, WeaponsData} from './slot-data';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  public characters: Map<string, Character> = new Map<string, Character>();
  private weapons: Array<Slot> = new Array<Slot>();

  load() {
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key === 'destiny-leveling-utility') {
        const saveData: SaveData = loadFromLocalStorage(key);
        this.loadWeapons(saveData.weaponData);
        saveData.characterData.forEach(it => this.loadCharacter(it));
        return;
      }
    }
    this.restoreDefaults();
  }

  save() {
    const saveData = SaveData.of(this.weapons, [...this.characters.values()]);
    saveToLocalStorage(saveData);
  }

  private loadWeapons(weaponsData: WeaponsData) {
    this.weapons.push(...weaponsData.weapons.map(slotData => SlotData.toSlot(slotData)));
  }

  private loadCharacter(characterData: CharacterData) {
    const character = new Character(
      characterData.characterName,
      this.weapons,
      characterData.armor.map(slotData => SlotData.toSlot(slotData))
    );
    character.addListener(() => this.save());
    this.characters.set(character.name, character);
  }

  private restoreDefaults() {
    this.weapons = [
      new Slot('Kinetic'),
      new Slot('Energy'),
      new Slot('Heavy')
    ];
    this.loadDefaultCharacter('hunter');
    this.loadDefaultCharacter('titan');
    this.loadDefaultCharacter('warlock');
    this.save();
  }

  private loadDefaultCharacter(name: string) {
    const character = new Character(
      name,
      this.weapons,
      [
        new Slot('Helmet'),
        new Slot('Gauntlets'),
        new Slot('Chest'),
        new Slot('Legs'),
        new Slot('Class Item'),
      ]
    );
    character.addListener(() => this.save());
    this.characters.set(character.name, character);
  }
}
