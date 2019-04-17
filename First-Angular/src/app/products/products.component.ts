import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers : [ProductsService]
})
export class ProductsComponent implements OnInit {

  PageTitle: String = "THis is Page Title!";

  filterBy: String;

  showHideImage: boolean = true;

  products: any = [];

  toggleImage() {
    this.showHideImage = !this.showHideImage;
  }


  constructor(private _productService : ProductsService) { 
    // console.log(this._productService.getProducts);
  }

  ngOnInit() {
    this.products = this._productService.getProducts();
  }

}
