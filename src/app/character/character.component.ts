import {Component, OnInit} from '@angular/core';
import {ModelService} from '../model/model.service';
import {Character} from '../model/Character';

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
    this.character = this.model.character;
  }
}
