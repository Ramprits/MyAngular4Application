import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'event-thumbnail',
  template: `
<button type="button" class="btn btn-sm btn-block btn-default" (click)="handleClick()">Click Me!</button>
`,
  styles: [`
    .button { width: 210px; }
  `]
})

export class EventThumbnailComponent implements OnInit {
  @Input() event: any;
  @Output() eventClick = new EventEmitter();
  constructor() { }

  ngOnInit() { }
  handleClick() {
    console.log(this.event.name);
  }
}
