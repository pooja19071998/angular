import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor() { }
  employeeDetails:any=[];
  getEmployee(){
   return this.employeeDetails=[
      {id:'1',name:'Pooja',age:'20'},
      {id:'2',name:'Pallavi',age:'25'},
      {id:'3',name:'Chandrika',age:'24'},
      {id:'4',name:'gowri',age:'22'},
      {id:'5',name:'vikas',age:'21'}
    ]
  }

}
