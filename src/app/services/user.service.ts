import { HttpClientHelper } from './HttpClientHelper';
import { User } from './../models/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ObserversModule } from '@angular/cdk/observers';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  };

  constructor(private httpClient: HttpClient) { }

  
  setToken(token: string){
  
    localStorage.setItem('user',token);
  }

  loggedIn(): boolean{
    return !!localStorage.getItem('user');
  }

  login(user: User): Observable<any>{
    return this.httpClient.post<any>(`${HttpClientHelper.baseURL}/user/login`,user,this.httpOptions);
  }

  getCurrentUser(): User{

    if(this.loggedIn()){
      let u =  JSON.parse(localStorage.getItem('user')) ;
      return u;

    }
    else{
     return null;
    }
  
  }


  logoutUser(): void{
    localStorage.removeItem('token');
    
  }



  getAllUsers(): Observable<User[]>{
    return this.httpClient.get<User[]>(`${HttpClientHelper.baseURL}/user/getAll`,this.httpOptions);
  }

  registerUser(user: User): Observable<any>{
          
    return this.httpClient.post<any>(`${HttpClientHelper.baseURL}/user/save`,user,this.httpOptions);
  
  }
  getUserById(id: number){

    return this.httpClient.get<User>(`${HttpClientHelper.baseURL}/user/getById`+id,this.httpOptions);
  }

  save(user: User): Observable<any>{
    return this.httpClient.post<User>(`${HttpClientHelper.baseURL}/user/save`,user);
  }





}
