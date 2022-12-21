import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Employee } from './employee';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient) {

   }
   public createEmployeeService(employee:Employee, dept_id:number): Observable<any>{
    console.log("service");
    console.log(employee);
     return this.http.post<any>("http://localhost:8089/api/employee/"+dept_id,employee);
   }

   public getEmployeeListService(dept_id:number){
    console.log("inside  employee service");
    return this.http.get("http://localhost:8089/api/employee/"+dept_id);
   }

   public deleteEmployeeService(emp_id:number) {
    console.log("inside employee Service");
    return this.http.delete<any>("http://localhost:8089/api/employee/"+emp_id,{responseType:'Text' as 'json'} );
   }
   public updateEmployeeService(emp_id:number, employee:Employee) {
     console.log("inside update Employee Service");
     return this.http.put<any>("http://localhost:8089/api/employee/"+emp_id,employee,{responseType:'Text' as 'json'} );
   }
   public getEmployeeById(emp_id:number) {
    console.log("get Employee By Id Service");
    return this.http.get("http://localhost:8089/api/employee/employee/"+emp_id);
   }
}
