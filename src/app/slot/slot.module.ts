import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SlotComponent} from './slot.component';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [SlotComponent],
  exports: [
    SlotComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class SlotModule {
}
