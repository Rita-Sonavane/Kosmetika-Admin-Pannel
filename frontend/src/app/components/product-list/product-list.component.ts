import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Hair_Care_Product, Skin_Care_Product } from 'src/app/models/data_types';
import { HairCareProductsService } from 'src/app/services/hair-care-products.service';
import { SkinCareProductsService } from 'src/app/services/skin-care-products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  SkinCareProducts: Skin_Care_Product[]| any;
 
  HairCareProducts: Hair_Care_Product[]| any;

 

  constructor(private skinCareProductService:SkinCareProductsService,private hairCareProductService:HairCareProductsService) {
    let skinproductObservable:Observable<Skin_Care_Product[]>;
    let hairproductObservable:Observable<Hair_Care_Product[]>;
    
    //skin
    
    skinproductObservable = this.skinCareProductService.getAllSkin_CareProduct();

    skinproductObservable.subscribe((serveProduct)=>{
      this.SkinCareProducts = serveProduct;
   
    });


    //hair

    hairproductObservable = this.hairCareProductService.getAllHair_CareProduct();

    hairproductObservable.subscribe((serveProduct)=>{
      this.HairCareProducts = serveProduct;
   
    });

  }

}
