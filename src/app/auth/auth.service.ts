import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {JwtHelperService} from "@auth0/angular-jwt";
import {Router} from "@angular/router";
import {AES} from 'crypto-js';
import {AuthResponse} from "./auth-response";
import {catchError, map, Observable} from "rxjs";
import {environment} from "../../environments/environment";
import * as crypto from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private jwtHelper = new JwtHelperService();
  private secretKey = crypto.randomBytes(32).toString('hex');

  constructor(private http: HttpClient, private router: Router) {
  }

  login(username: string, password: string): Observable<void> {
    let encryptedPassword = AES.encrypt(password, this.secretKey).toString();
    return this.http.post<AuthResponse>(`${environment.apiUrl}/login`, {username, encryptedPassword}).pipe(
      map((res: AuthResponse) => {
        localStorage.setItem('access_token', res.user.access_token);
        this.router.navigate(['/home']);
        //TODO se il login non è corretto deve fare qualcosa
      }),
      catchError(async (err) => console.log(err)));
  }

  logout() {
    localStorage.removeItem('access_token');
    this.router.navigate(['/login']);
  }

  public isAuthenticated(): boolean {
    let token = localStorage.getItem('access_token');
    return !this.jwtHelper.isTokenExpired(token);
  }
}
