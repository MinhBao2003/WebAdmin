import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
interface Product {
  id: number;
  Productname:string;
  quantity:number;
  price:number;
  imageurl:string;
  describe:string;
  //name: string;
}
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  searchTerm: string = '';
  p:number=1;
  Products: Product[] = [];
  constructor(private http: HttpClient ,) {}
  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.http.get<Product[]>('http://localhost:3000/product').subscribe((Products) => {
      this.Products = Products;
    });
  }
  onSearch() {
    this.Products = this.Products.filter(Product => {
      return Product.Productname.toLowerCase().indexOf(this.searchTerm.toLowerCase()) !== -1;
    });
  }
}
