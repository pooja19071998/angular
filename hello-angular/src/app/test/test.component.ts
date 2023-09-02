import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl:'./test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  stringClassExample = "color italic";
isColor=false;
onClick(){
this.isColor=!this.isColor;
}
objectClassExample={
  color:true,
  isUpdate:false,
  italic:true
}
arrayClassExample=['color','italic'];
ngClassExample ={
  color:false,
  italic:true
}
ngClassmethodExample={};
isStyle=true;
methodToClass(){
  return this.ngClassmethodExample ={
    color:false,
    italic:true
  }
}
objectForStyle={
  color:'green',
  'font-size':'20px'
}
methodInStyle={};
methodForStyle(){
 return this.methodInStyle={
    color:'green',
    'font-size':'25px'
  }
}
stringsInNgStyle=" 'font-size':'20px', color:'green'"
}
