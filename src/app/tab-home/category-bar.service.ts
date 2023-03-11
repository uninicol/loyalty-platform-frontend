import {Injectable} from '@angular/core';
import {Categories} from "./Categories";

@Injectable({
  providedIn: 'root'
})
export class CategoryBarService {

  categories: string[]
  currentCategory: string

  constructor() {
    this.categories = this.categoriesEnumToString.call(this);
    this.currentCategory = this.categories[0]
  }

  changeButtonColor(category: string) {
    // @ts-ignore
    document.getElementById(this.currentCategory)
      .setAttribute("fill", "outline")
    // @ts-ignore
    document.getElementById(category)
      .setAttribute("fill", "solid")
  }

  private categoriesEnumToString(): string[] {
    return Object.keys(Categories)
      .filter(key => Number.isNaN(Number(key)))
      .map(key => (key.charAt(0).toUpperCase() + key.slice(1)).split('_').join(' '))
  }
}
