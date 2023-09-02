import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {
@Input('parentData') name:any;
@Output() childEvent = new EventEmitter();
tiggerEvent(){
  this.childEvent.emit("Hello Pooja!");
}
}
