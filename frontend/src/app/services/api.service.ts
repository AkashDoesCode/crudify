import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

 

  

  PHP_API_SERVER = "http://127.0.0.1";//localhost
  PHP_REST_API="https://mycrudphpapi.000webhostapp.com";//where api is hosted
  rowData:any={};

  constructor(private httpClient: HttpClient) {

  }

  readUser(): Observable<any[]>{
    return this.httpClient.get<any[]>(`${this.PHP_API_SERVER}/rest-api/api/read.php`);
  }
  

  createUser(user: any): Observable<any>{
    return this.httpClient.post(`${this.PHP_API_SERVER}/rest-api/api/create.php`,user);
  }

  deleteUser(id: any): Observable<any>{
    return this.httpClient.delete(`${this.PHP_API_SERVER}/rest-api/api/delete.php?id=`+id);
  }

  updateUser(user:any):Observable<any>{
    return this.httpClient.put(`${this.PHP_API_SERVER}/rest-api/api/update.php`,user);
  }

  saveData(user:any){
    this.rowData=user;
  }





}
