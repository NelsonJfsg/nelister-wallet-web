import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Category } from '../interfaces/category.mode';

const routes = {
  categories: 'categories',
}

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  private categoriesSubject = new BehaviorSubject<Category[]>([]);
  categories$ = this.categoriesSubject.asObservable();

  public refreshCategories() {
    this.getCategories().subscribe(entities => {
      this.categoriesSubject.next(entities);
    });
  }

  constructor(
    private http: HttpClient,
  ) { 
    this.refreshCategories();
  }

  public getCategories () : Observable<Category[]>{
    return this.http.get<Category[]>(`${routes.categories}`);
  }

}
