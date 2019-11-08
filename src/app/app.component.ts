import {Component, OnInit} from '@angular/core';
import {ModelService} from './model/model.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'destiny-leveling-utility';

  constructor(private model: ModelService) {
  }

  ngOnInit(): void {
    this.model.load();
  }
}
