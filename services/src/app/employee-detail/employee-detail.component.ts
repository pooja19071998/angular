import { Component } from '@angular/core';
import { EmployeeServiceService } from '../employee-service.service';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.css']
})
export class EmployeeDetailComponent {
 
  employeeDetails:any=[];
  
  constructor(private employeeService:EmployeeServiceService){}

  ngOnInit(){
    this.employeeDetails=this.employeeService.getEmployee();
  }
}
