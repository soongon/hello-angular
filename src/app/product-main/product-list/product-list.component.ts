import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  
  products: object[] = [];

  constructor(private service: ProductApiService) {}

  getDataFromServer() {
    this.service.getPostFromFakeServer()
      .subscribe(res => {
        console.log(res);
        this.products = res;
      });
  }

}
