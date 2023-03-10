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

  register(name: string, surname: string, email: string, password: string, telephoneNumber: string) {
    return this.http.post<UserDetails>(
      `${environment.apiUrl}/client/auth/signup`, {name, surname, email, password, telephoneNumber})
  }

  login(email: string, password: string) {
    return this.http.post<UserDetails>(
      `${environment.apiUrl}/client/auth/signin`, {email, password})
  }

  logout() {
    this.http.post<null>(`${environment.apiUrl}/client/auth/signin`, {})
    this.registerSuccess = false
    this.loginSuccess = false
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

  public saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  private clean(): void {
    window.sessionStorage.clear();
  }
}
