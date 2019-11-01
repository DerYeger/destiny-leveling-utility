import {Injectable} from '@angular/core';
import {Slot} from './Slot';
import {Character} from './Character';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  private weapons = [
    new Slot('Kinetic'),
    new Slot('Energy'),
    new Slot('Heavy')
  ];

  public character = new Character(
    this.weapons,
    [
      new Slot('Helmet'),
      new Slot('Gauntlets'),
      new Slot('Chest'),
      new Slot('Legs'),
      new Slot('Class Item'),
    ]
  );
}
