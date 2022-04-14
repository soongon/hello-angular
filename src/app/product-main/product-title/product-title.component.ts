import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-title',
  templateUrl: './product-title.component.html',
  styleUrls: ['./product-title.component.css']
})
export class ProductTitleComponent {

  title: string = '상품목록잉;요';
  textData: string = 'kim soongon,,,,,';

  buttonClicked() {
    console.log('button clicked..');
    this.title = '버튼 클릭했어요..';
  }

}
