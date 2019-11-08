import {Component, Input, OnInit} from '@angular/core';
import {Slot} from '../model/slot';

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
