import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from 'src/app/interfaces/category';
import { Product } from 'src/app/interfaces/product';
import { CategoriesService } from 'src/app/services/categories.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  product: Product = {
    id: 0,
    name: '',
    description: '',
    price: 0,
    category: '',
    image: '',
    full_name: '',
    categoryId: 1
  };
  categories?: Category[] = [];

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
    private categoryService: CategoriesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getCategories();
    this.getProduct();
  }

  getCategories(): void {
    this.categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }

  // save(): void {
  //   this.productService.addProduct(this.product)
  //     .subscribe(() => this.back());
  // }

  getProduct(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.productService.getProductById(id)
        .subscribe(product => this.product = product);
    }
  }

  back(): void {
    this.router.navigate(['/admin/products']);
  }

  save(): void {
    if (this.product.id) {
      this.productService.updateProduct(this.product.id, this.product)
        .subscribe(() => this.back());
    } else {
      this.productService.addProduct(this.product)
        .subscribe(() => this.back());
    }
  }
}
