import {Component} from '@angular/core';
import {Character} from '../model/character';
import {ActivatedRoute} from '@angular/router';
import {ModelService} from '../model/model.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.scss']
})
export class CharacterComponent {

  character: Character;

  constructor(
    model: ModelService,
    activatedRoute: ActivatedRoute
  ) {
    this.character = model.characters.get(activatedRoute.routeConfig.path);
    this.character.update();
  }
}
