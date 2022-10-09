import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  private BASE_URL = 'http://localhost:8080';
  constructor(private httpClient: HttpClient) {}

  /* get all the category details */
  public getCategories() {
    return this.httpClient.get(`${this.BASE_URL}/category/get`);
  }

  /* add new category to the database */
  public addCategory(catergory: Category) {
    return this.httpClient.post(`${this.BASE_URL}/category/add`, catergory);
  }
}
