import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/models/post.model';
import { ProductApiService } from 'src/app/services/product-api.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  
  products: Post[] = [];

  constructor(private service: ProductApiService) {}

  ngOnInit(): void {
    this.getDataFromServer();
  }

  getDataFromServer() {
    this.service.getPostFromFakeServer()
      .subscribe(res => {
        console.log(res);
        this.products = res;
      });
  }

}
