import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Product} from "../common/product";
import {map} from "rxjs";
import {ProductCategory} from "../common/product-category";
//import * as repl from "node:repl";
//import * as repl from "node:repl";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseUrl = 'http://localhost:8080/api/products'

  private categoryUrl = 'http://localhost:8080/api/product-category'
  constructor(private httpClient: HttpClient) { }

  getProductList(theCategoryId: number): Observable<Product[]>{
    //@TODO: need to build ULR based on category id
    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`

    return this.getProducts(searchUrl);
  }

  searchProducts(theKeyword: string): Observable<Product[]> {
    //need to build ULR based on keyword
    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;

    return this.getProducts(searchUrl);
  }

  private getProducts(searchUrl:string): Observable<Product[]>{
    return this.httpClient.get<GetResponseProducts>(searchUrl).pipe(map(response => response._embedded.products))
  }

  getProductCategories(): Observable<ProductCategory[]>{      //Call Rest API
      return this.httpClient.get<GetResponseProductCategory>(this.categoryUrl).pipe(
        map(response => response._embedded.productCategory)
      );      //Return an observable
              // Maps the JSON data from String data rest to ProductCategory array
  }
}
  interface GetResponseProducts {
  _embedded: {
    products: Product[];
  }
}
interface GetResponseProductCategory {
  _embedded: {    // Unwraps the Json from Spring Data REST _embedded entry
    productCategory: ProductCategory[];
  }
}
