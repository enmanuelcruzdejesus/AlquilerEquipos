import { HttpClientHelper } from './HttpClientHelper';
import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  };

  constructor(private httpClient: HttpClient) { }

  getEstudiantes(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${HttpClientHelper.baseURL}/user/getAll`,this.httpOptions);
  }

  getEstudianteById(id: number){

    return this.httpClient.get<User>(`${HttpClientHelper.baseURL}/user/getById`+id,this.httpOptions);
  }

  saveEstudiante(user: User): Observable<any>{
    return this.httpClient.post<User>(`${HttpClientHelper.baseURL}/user/save`,user);
  }



}
