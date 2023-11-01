import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './components/Quantri/customer/customer.component';
import { ProductsComponent } from './components/Quantri/products/products.component';

const routes: Routes = [
  {path:'',component:CustomerComponent},
  {path:'khachhang',component:CustomerComponent},
  {path:'sanpham',component:ProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
