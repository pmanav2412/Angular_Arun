import { Component, OnInit } from '@angular/core';
import { FormBuilder , FormGroup , Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  userForm : FormGroup;

  constructor( private _fb : FormBuilder) { }

  ngOnInit() {
    this.userForm = this._fb.group({
      firstName : ["",[Validators.required,Validators.minLength(5)]],
      lastName : ["",[Validators.required,Validators.minLength(5)]],
      Email : ["",[Validators.required,Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      Gender : ["", [Validators.required]],

    })

   
  }
  userValue(){
  console.log(this.userForm.value);
  }

  

}
