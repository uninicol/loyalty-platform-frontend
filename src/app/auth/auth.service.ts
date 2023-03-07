import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

const USER_KEY = 'auth-user';

interface UserDetails {
  id: number
  name: string,
  surname: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {
  }

  register(name: string, surname: string, email: string, password: string, telephoneNumber: string): boolean {
    //password = AES.encrypt(password, environment.jwtKey).toString(); // con https non serve
    let returned = ""
    this.http.post(
      `${environment.apiUrl}/client/auth/signup`, {name, surname, email, password, telephoneNumber},
      {responseType: "text"})
      .subscribe(value => {
        returned = value
      })
    return returned === "OK";
  }

  login(email: string, password: string): boolean {
    //password = AES.encrypt(password, environment.jwtKey).toString();
    let success = true
    this.http.post<UserDetails>(
      `${environment.apiUrl}/client/auth/signin`, {email, password}, {observe: 'response'})
      .subscribe(
        value => {
          if (value.status !== 200) success = true
          else this.saveUser(value.body)
        }
      )
    return success
  }

  logout() {
    this.http.post<null>(`${environment.apiUrl}/client/auth/signin`, {})
    this.clean()
  }

  public getUser(): UserDetails | null {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) return JSON.parse(user);
    return null;
  }

  public isLoggedIn(): boolean {
    const user = window.sessionStorage.getItem(USER_KEY);
    return !!user;
  }

  private clean(): void {
    window.sessionStorage.clear();
  }

  private saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }
}
