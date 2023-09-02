import { Component } from '@angular/core';
import { EmployeesService } from '../employees.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {

  employees:any=[];
  constructor(private employeeService:EmployeesService){}

  ngOnInit(){
    this.employeeService.getEmployees().subscribe(data=>this.employees=data);
  }
}
