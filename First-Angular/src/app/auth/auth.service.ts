import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  $authStatus = new BehaviorSubject(this.checkUserStatus());

  constructor(private _router: Router, private _http: HttpClient) { }

  login(credentials) {


    this._http.post("http://localhost:3000/authenticate", credentials).subscribe((data: any) => {
      if (data.isLogedsin) {
        localStorage.setItem("token", data.token);
        this.$authStatus.next(this.checkUserStatus());
        this._router.navigate(['/welcome']);
      } else {
        alert("invalid username or password!")
        this._router.navigate(['/login']);
      }
    })



    // if(credentials.username=="admin" && credentials.password=="admin"){
    //   localStorage.setItem("isLogedIn","true");
    //   this.$authStatus.next(this.checkUserStatus());
    //     this._router.navigate(['/welcome']);
    // }
    // else{
    //    alert("invalid username or password!")
    //     this._router.navigate(['/login']);
    // }
  }

  logOut() {
    localStorage.removeItem("token");
    this.$authStatus.next(this.checkUserStatus());
    this._router.navigate(['/login']);
  }

  checkUserStatus() {
    return localStorage.getItem("token");
  }
}
