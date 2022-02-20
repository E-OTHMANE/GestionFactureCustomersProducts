import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import {ProductAddComponent} from "./components/product-add/product-add.component";
import {ProductEdiComponent} from "./components/product-edi/product-edi.component";

const routes: Routes = [
   {path:"products",component:ProductsComponent},
   {path:"newProduct",component:ProductAddComponent},
  {path:"editProduct/:id",component:ProductEdiComponent},
   {path:"",component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
