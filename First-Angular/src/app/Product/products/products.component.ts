import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from '../products.service'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductsService]
})


export class ProductsComponent implements OnInit, OnDestroy {

  PageTitle: String = "THis is Page Title!";

  filterBy: String;

  showHideImage: boolean = true;

  products: any = [];

  productSubscription: any;

  toggleImage() {
    this.showHideImage = !this.showHideImage;
  }


  constructor(private _productService: ProductsService) {

  }

  ngOnInit() {
    this.productSubscription = this._productService.getProducts().subscribe((data) => {
      this.products = data;
    });
  }

  ngOnDestroy(): void {
    this.productSubscription.unsubscribe();
  }

}
