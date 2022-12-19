import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading-grid',
  templateUrl: './loading-grid.component.html',
  styleUrls: ['./loading-grid.component.scss'],
})
export class LoadingGridComponent implements OnInit {
  label: string = 'Loading';

  get labelHtml(): string[] {
    return this.label.split('');
  }

  constructor() {}

  ngOnInit() {}
}
