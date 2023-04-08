import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../interfaces/category';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {


  private baseUrl = 'http://localhost:3000/categories';

  constructor(private http: HttpClient) { }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.baseUrl);
  }

  getCategoryById(id: number): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Category>(url);
  }

  addCategory(category: Category): Observable<Category> {
    return this.http.post<Category>(this.baseUrl, category);
  }

  updateCategory(id: number, category: Category): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.put<Category>(url, category);
  }

  deleteCategory(id: number): Observable<Category> {
    const url = `${this.baseUrl}/${id}`;
    return this.http.delete<Category>(url);
  }
}
