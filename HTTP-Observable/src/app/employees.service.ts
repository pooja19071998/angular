import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http:HttpClient) { }
 private url="/assets/data/employee.json";

  getEmployees():Observable<IEmployee[]>{
    return this.http.get<IEmployee[]>(this.url);
  }
}
