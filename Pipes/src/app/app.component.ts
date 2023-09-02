import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data="codeEvelution"
  title = 'Pipes';
  name="Pooja";
  message="wel come pooja";

  details={
    firstName:'Pooja',
    lastName:'S G'
  }

  date = new Date();
}
