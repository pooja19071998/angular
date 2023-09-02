import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employeeDetails:any=[];
  
  constructor(private employeeService:EmployeeServiceService){}

  ngOnInit(){
    this.employeeDetails=this.employeeService.getEmployee();
  }

}
