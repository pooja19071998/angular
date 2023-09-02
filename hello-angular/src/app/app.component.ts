import { style } from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'hello-angular';
  classExpression=['blueColor','italicStyle'];
  canSave=true;
  isUnchanged = true;
  isSpecial = true;
  currentClasses:  Record<string, boolean> = {};;
 setCurrentClasses(){
  this.currentClasses =  {
    saveable: this.canSave,
    modified: !this.isUnchanged,
    special:  this.isSpecial
  };
  return this.currentClasses;
 }


 setCurrentStyles(){
 let ngStyleExample={
    color:'blue',
    fontStyle:'italic'
   }
  return ngStyleExample;
 }

 currentStyles: Record<string, string> = {};
/* . . . */
setCurrentStyles1() {
  // CSS styles: set per current state of component properties
  this.currentStyles = {
    'font-style':  this.canSave      ? 'italic' : 'normal',
    'font-weight': !this.isUnchanged ? 'bold'   : 'normal',
    'font-size':   this.isSpecial    ? '24px'   : '12px'
  };
  return this.currentStyles;
}
}
