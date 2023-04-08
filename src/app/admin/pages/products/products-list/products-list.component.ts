import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';
import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/interfaces/category';
import { CategoriesService } from 'src/app/services/categories.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products: Product[] = [];
  categories: Category[] = [];
  categoryId?: number;
  searchProduct: string = '';
  constructor(private productService: ProductsService, private categoriesService: CategoriesService) { }

  ngOnInit() {
    this.getProducts();
    this.getCategories();
  }

  getCategories(): void {
    this.categoriesService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  public getCategoryName(categoryId?: number) {
    const category = this.categories.find(c => c.id === categoryId);
    return category ? category.name : '';
  }
}
