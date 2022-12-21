import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { Observable } from 'rxjs';
import { Department } from './department';


@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  constructor(private http:HttpClient) { }
  private url="http://localhost:8089/api/department";
  public createDepartmentService(department:Department):Observable<Object>
  {
return this.http.post<any>("http://localhost:8089/api/department",department)
  }
  public getDepartmentListService():Observable<Department[]>
  {
    return this.http.get<Department[]>("http://localhost:8089/api/department")
  }
  public deleteDepartentService(dept_id:number):Observable<any>
{
  return this.http.delete(`${this.url}/${dept_id}`);
}
public getDepartmentByIdService(dept_id:number):Observable<Department>
{
  
  return this.http.get<Department>(`${this.url}/${dept_id}`);
}
public updateDepartmentService(dept_id:number,department:Department):Observable<any>
{
  return this.http.put(`${this.url}/${dept_id}`,department);
}
 
}