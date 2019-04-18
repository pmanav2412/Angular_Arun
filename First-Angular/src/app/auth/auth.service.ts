import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  $authStatus = new BehaviorSubject(this.checkUserStatus());

  constructor( private _router : Router) { }

  login(credentials){
    if(credentials.username=="admin" && credentials.password=="admin"){
      localStorage.setItem("isLogedIn","true");
      this.$authStatus.next(this.checkUserStatus());
        this._router.navigate(['/welcome']);
    }
    else{
       alert("invalid username or password!")
        this._router.navigate(['/login']);
    }
  }

  logOut (){
    localStorage.removeItem("isLogedIn");
    this.$authStatus.next(this.checkUserStatus());
    this._router.navigate(['/login']);
  }

  checkUserStatus(){
    return localStorage.getItem("isLogedIn");
  }
  }
