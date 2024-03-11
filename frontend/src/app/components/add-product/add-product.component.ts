import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HairCareProductsService } from 'src/app/services/hair-care-products.service';
import { SkinCareProductsService } from 'src/app/services/skin-care-products.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  productForm: FormGroup | any;
  imageurl_product: any;

  constructor(private fb: FormBuilder, private http: HttpClient, private skinCareProductService: SkinCareProductsService, private hairCareProductService: HairCareProductsService) { }


  onFileChange(event: any): void {

    const fileInput = event.target as HTMLInputElement;
    const file = fileInput.files?.[0];
    this.imageurl_product = `assets/img/Products/${file?.name}`;



  }



  ngOnInit(): void {
    this.productForm = this.fb.group({
      category: ['', Validators.required],
      name: [''],
      brand: [''],
      price: [null],
      item_form: [''],
      item_volume: [''],
      skin_type: [''],
      hair_type: [''],
      type_product: [''],
      spf: [''],
      Conscious: [''],
      imageUrl: [''],
      description: [''],
    });


  }





  onSubmit() {

    this.productForm.value.imageUrl = this.imageurl_product;

    const formValues = this.productForm.value;


    if (this.productForm.value.category === 'skin-care') {
      console.log("If=====", formValues);

      this.skinCareProductService.createProduct(formValues).subscribe(
        (response) => {
          console.log('Successfully submitted:', response);
          // Handle success response from the server
        },
        (error) => {
          console.error('Error submitting form:', error);
          // Handle error response from the server
        }
      );
    }
    else {

      console.log(" else == ", formValues);

      this.hairCareProductService.createProduct(formValues).subscribe(
        (response) => {
          console.log('Successfully submitted:', response);
          // Handle success response from the server
        },
        (error) => {
          console.error('Error submitting form:', error);
          // Handle error response from the server
        }
      );

    }

    this.productForm.reset();


  }




}
