import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SkinCareCategoryComponent } from './components/skin-care-category/skin-care-category.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HairCareCategoryComponent } from './components/hair-care-category/hair-care-category.component';
import { ProductListComponent } from './components/product-list/product-list.component';

const routes: Routes = [
  {path:"",redirectTo:"home",pathMatch:'full'},
  {path:"home",component:HomeComponent},
  {path:"skinCareCategory",component:SkinCareCategoryComponent},
  {path:"hairCareCategory",component:HairCareCategoryComponent},
  {path:"add-product",component:AddProductComponent},
  {path:"product-list",component:ProductListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
