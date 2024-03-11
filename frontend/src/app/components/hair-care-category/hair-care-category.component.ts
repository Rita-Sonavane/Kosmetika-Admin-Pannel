import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Hair_Care_Product } from 'src/app/models/data_types';
import { HairCareProductsService } from 'src/app/services/hair-care-products.service';

@Component({
  selector: 'app-hair-care-category',
  templateUrl: './hair-care-category.component.html',
  styleUrls: ['./hair-care-category.component.css']
})
export class HairCareCategoryComponent implements OnInit{

  products: Hair_Care_Product[]| any = [];

  constructor(private hairCareProductService:HairCareProductsService) {

    let productObservable:Observable<Hair_Care_Product[]>;
    
    productObservable = this.hairCareProductService.getAllHair_CareProduct();

    productObservable.subscribe((serveProduct)=>{
      this.products = serveProduct;
      // console.log("check",this.products );
    });

 
    
  }


  ngOnInit(): void {
  
  }



  deleteProduct(productId: any) {
    console.log("check id",productId);
    this.hairCareProductService.deleteProduct(productId)
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
    this.hairCareProductService.getAllHair_CareProduct()
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
