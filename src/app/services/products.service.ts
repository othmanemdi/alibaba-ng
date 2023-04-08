import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Product } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private API_URL = 'http://localhost:3000/products';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) { }


  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL);
  }

  getProduct(id: number): Observable<Product> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Product>(url);
  }

  searchProducts(searchTerm: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.API_URL).pipe(
      map(products =>
        products.filter(product =>
          product.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
      )
    );
  }

  searchProducts2(term: string): Observable<Product[]> {
    if (!term.trim()) {
      // Si la barre de recherche est vide, retourne tous les produits.
      return this.getProducts();
    }

    return this.http.get<Product[]>(`${this.API_URL}/?name=${term}`).pipe(
      map(products => products.filter(product => product.name.toLowerCase().includes(term.toLowerCase())))
    );
  }


  getProductById(id: number): Observable<Product> {
    const url = `${this.API_URL}/${id}`;
    return this.http.get<Product>(url);
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.API_URL, product, this.httpOptions);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    const url = `${this.API_URL}/${id}`;
    return this.http.put<Product>(url, product, this.httpOptions);
  }

  deleteProduct(product: Product | number): Observable<Product> {
    const id = typeof product === 'number' ? product : product.id;
    const url = `${this.API_URL}/${id}`;
    return this.http.delete<Product>(url, this.httpOptions);
  }

}
