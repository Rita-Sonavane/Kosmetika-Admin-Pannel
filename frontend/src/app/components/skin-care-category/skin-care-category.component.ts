import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Skin_Care_Product } from 'src/app/models/data_types';
import { SkinCareProductsService } from 'src/app/services/skin-care-products.service';

@Component({
  selector: 'app-skin-care-category',
  templateUrl: './skin-care-category.component.html',
  styleUrls: ['./skin-care-category.component.css']
})
export class SkinCareCategoryComponent implements OnInit{

  products: Skin_Care_Product[]| any = [];

  constructor(private skinCareProductService:SkinCareProductsService) {
    let productObservable:Observable<Skin_Care_Product[]>;
    
    productObservable = this.skinCareProductService.getAllSkin_CareProduct();

    productObservable.subscribe((serveProduct)=>{
      this.products = serveProduct;
      // console.log("check",this.products );
    });

 
    
  }


  ngOnInit(): void {
  
  }



  deleteProduct(productId: any) {
    console.log("check id",productId);
    this.skinCareProductService.deleteProduct(productId)
      .subscribe(
        () => {
          console.log('Product deleted successfully');
          this.fetchProductList(); // Reload products after deletion
        },
        (error) => {
          console.error('Error deleting product:', error);
        }
      );
  }


  private fetchProductList() {
    // Fetch the product list again or update the array directly
    this.skinCareProductService.getAllSkin_CareProduct()
      .subscribe(
        (products) => {
          this.products = products;
        },
        (error) => {
          console.error('Error fetching product list:', error);
        }
      );
  }

}
