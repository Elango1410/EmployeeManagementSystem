import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { HR } from './hr';



@Injectable({
  providedIn: 'root'
})
export class HrService {

  constructor(private http:HttpClient) { }
  
 

  public createHrService(hr:HR,dept_id:number):Observable<Object>
  {
return this.http.post<any>("http://localhost:8089/api/hr/"+dept_id,hr)
  }
  public getHrListService(dept_id:number)
  {
    console.log("inside  Hr service");
    return this.http.get("http://localhost:8089/api/hr/"+dept_id);
   }  
  
public getHrByIdService(hr_id:number):Observable<HR>
{
  
  return this.http.get<HR>("http://localhost:8089/api/hr/hr/"+hr_id);
}
public updateHrService(hr_id:number, hr:HR) {
  console.log("inside update Hr Service");
  return this.http.put<any>("http://localhost:8089/api/hr/"+hr_id,hr,{responseType:'Text' as 'json'} );
}
public deleteHrService(hr_id:number)
{
  return this.http.delete("http://localhost:8089/api/hr/"+hr_id,{responseType:'Text' as 'json'});
}
}