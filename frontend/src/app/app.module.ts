import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HomeComponent } from './components/home/home.component';
import { SkinCareProductsService } from './services/skin-care-products.service';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SkinCareCategoryComponent } from './components/skin-care-category/skin-care-category.component';
import { AddProductComponent } from './components/add-product/add-product.component';
import { HairCareProductsService } from './services/hair-care-products.service';
import { HairCareCategoryComponent } from './components/hair-care-category/hair-care-category.component';
import { ProductListComponent } from './components/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    SkinCareCategoryComponent,
    AddProductComponent,
    HairCareCategoryComponent,
    ProductListComponent
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SkinCareProductsService,HairCareProductsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
