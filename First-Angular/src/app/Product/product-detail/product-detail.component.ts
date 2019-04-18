import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})



export class ProductDetailComponent implements OnInit {

   productID : String;

  constructor(private _activatedRoute : ActivatedRoute, private _route : Router)
   {

    }

  ngOnInit() {
    this._activatedRoute.params.subscribe((data) =>{
      this.productID = data.pId;
    })
  }


  goBack(){
         this._route.navigate(['/products']);
  }


}
