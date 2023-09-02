import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent {
  
  employees:any=[];
  constructor(private employeeService:EmployeesService){}

  ngOnInit(){
    this.employeeService.getEmployees().subscribe(data=>this.employees=data);
  }
}
