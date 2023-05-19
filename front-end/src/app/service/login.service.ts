import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs';

export const AUTHENTICATED_USER = "authenticatedUser";
export const TOKEN = "token";


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http : HttpClient) { }

  url = 'http://localhost:8091/' ;


 

  onLogin(username:string,password: string){
    
        return this.http.post<any>(
      `${this.url}authenticate`,{
        username,
        password
      }).pipe(
        map(
          data => {
            sessionStorage.setItem(AUTHENTICATED_USER, username);
            sessionStorage.setItem(TOKEN, `Bearer ${data.token}`);
            return data;
          }
        )
      );

        }

  //   let username = 'user'
  //   let password = 'password'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
  //   let headers = new HttpHeaders({
  //     Authorization: basicAuthHeaderString
  //   })

  //   return this.http.get<User>('http://localhost:8091/login', {headers : headers});
  // }
}
