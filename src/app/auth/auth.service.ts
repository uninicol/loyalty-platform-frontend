import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from "../../environments/environment";

const USER_KEY = 'auth-user';

export interface UserDetails {
  id: number
  name: string,
  surname: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  registerSuccess: boolean = false
  loginSuccess: boolean = false

  constructor(private http: HttpClient) {
  }

  register(name: string, surname: string, email: string, password: string, telephoneNumber: string): boolean {
    this.registerCall(name, surname, email, password, telephoneNumber);
    return this.registerSuccess;
  }

  login(email: string, password: string) {
    this.loginCall(email, password)
    return this.loginSuccess
  }

  logout() {
    this.http.post<null>(`${environment.apiUrl}/client/auth/signin`, {})
    this.registerSuccess = false
    this.loginSuccess = false
    this.clean()
  }

  private async registerCall(name: string, surname: string, email: string, password: string, telephoneNumber: string) {
    await this.http.post(
      `${environment.apiUrl}/client/auth/signup`, {name, surname, email, password, telephoneNumber},
      {observe: 'response'})
      .subscribe(value => {
        if (value.status !== 200) this.registerSuccess = false
        else {
          this.saveUser(value.body)
          this.registerSuccess = true
        }
      });
  }

  private async loginCall(email: string, password: string) {
    await this.http.post<UserDetails>(
      `${environment.apiUrl}/client/auth/signin`, {email, password}, {observe: 'response'})
      .subscribe(
        value => {
          if (value.status !== 200) this.loginSuccess = false
          else {
            this.saveUser(value.body)
            this.loginSuccess = true
          }
        }
      )
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
