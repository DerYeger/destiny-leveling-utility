import {Component, Input, OnInit} from '@angular/core';
import {Slot} from '../model/Slot';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.scss']
})
export class SlotComponent implements OnInit {

  @Input()
  slot: Slot;

  ngOnInit() {
  }
}
