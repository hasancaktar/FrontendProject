import { Component, OnInit } from '@angular/core';
import { Product, } from 'src/app/models/product';
import { ProductResponseModel } from 'src/app/models/productResponseModel';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
//OnInit// 
export class ProductComponent implements OnInit {

  products: Product[] = [];
  dataLoaded:boolean = false;

  //productResponseModel:ProductResponseModel={
  // data : this.products,
  //success:true,
  //message:""

  //}

  // privrate olmasının nedeni. dışardan biri bu classa yani ProductComponent'e ulaşmak istediği zaman nokta dediği httpClient de gelir. onu korumak için private yaptık Yani ProductComponent.httpClient olmasın diye
  constructor(private productService: ProductService) { }
  //program ilk açıldığında çalışacak kod demek oninit
  ngOnInit(): void {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(response => {
      this.products = response.data;
      this.dataLoaded= true;
    })
    console.log();
  }
}
