// category.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private apiUrl = 'https://your-api-url.com';

  constructor(private http: HttpClient) { }

  getCategories() {
    return this.http.get(this.apiUrl + '/categories');
  }

  getCategoryById(id: number) {
    return this.http.get(this.apiUrl + `/categories/${id}`);
  }

  updateCategory(id: number, categoryData: any) {
    return this.http.put(this.apiUrl + `/categories/${id}`, categoryData);
  }

  deleteCategory(id: number) {
    return this.http.delete(this.apiUrl + `/categories/${id}`);
  }
}
