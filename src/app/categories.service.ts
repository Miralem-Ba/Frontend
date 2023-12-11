// Import core Angular modules
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

/**
 * The CategoryService is responsible for handling all HTTP requests related
 * to categories in the application. It communicates with a backend server
 * to perform CRUD operations on category data.
 */
@Injectable({
  providedIn: 'root' // This service is available application-wide
})
export class CategoryService {
  // The base URL for the API endpoint
  private apiUrl = 'https://your-api-url.com';

  /**
   * Retrieve a list of all categories.
   * @returns An Observable containing the list of categories.
   */
  constructor(private http: HttpClient) { }

  /**
   * Retrieve a list of all categories.
   * @returns An Observable containing the list of categories.
   */
  getCategories() {
    return this.http.get(this.apiUrl + '/categories');
  }

  /**
   * Retrieve a specific category by its ID.
   * @param id - The ID of the category to retrieve.
   * @returns An Observable containing the category data.
   */
  getCategoryById(id: number) {
    return this.http.get(this.apiUrl + `/categories/${id}`);
  }

  /**
   * Update a specific category.
   * @param id - The ID of the category to be updated.
   * @param categoryData - The new data for the category.
   * @returns An Observable that completes when the update is done.
   */
  updateCategory(id: number, categoryData: any) {
    return this.http.put(this.apiUrl + `/categories/${id}`, categoryData);
  }

  /**
   * Delete a specific category.
   * @param id - The ID of the category to be deleted.
   * @returns An Observable that completes when the category is deleted.
   */
  deleteCategory(id: number) {
    return this.http.delete(this.apiUrl + `/categories/${id}`);
  }
}
