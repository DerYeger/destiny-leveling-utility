import {Component, OnInit} from '@angular/core';
import {ModelService} from '../model/model.service';
import {Character} from '../model/Character';
import {Slot} from '../model/Slot';
import * as onChange from 'on-change';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent implements OnInit {

  character: Character;

  constructor(private model: ModelService) {
  }

  ngOnInit() {
    this.character = onChange(this.model.character, (path, _, oldValue) => {
      if (new RegExp('(armor|weapons).[0-9]+.power').test(path)) { // ...
        this.updateCharacter();
      }
    });
    this.updateCharacter();
  }

  updateCharacter() {
    const char = this.character;
    const powerSum = sum(char.slots.map(s => s.power));
    char.power = Math.floor(powerSum / char.slots.length);
    char.missingPower = (char.power + 1) * char.slots.length - powerSum;
    char.slots.forEach(slot => this.updateSlotState(slot));
  }

  updateSlotState(slot: Slot) {
    if (slot.power <= this.character.power - 4) {
      slot.state = 'red';
    } else if (slot.power >= this.character.power) {
      slot.state = 'green';
    } else if (slot.state !== null) {
      slot.state = null;
    }
  }
}

function sum(array: number[]) {
  return array.reduce((previous, current) => current += previous);
}
