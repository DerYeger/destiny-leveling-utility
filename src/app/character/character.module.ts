import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CharacterComponent} from './character.component';
import {SlotModule} from '../slot/slot.module';


@NgModule({
  declarations: [CharacterComponent],
  imports: [
    CommonModule,
    SlotModule
  ]
})
export class CharacterModule {
}
