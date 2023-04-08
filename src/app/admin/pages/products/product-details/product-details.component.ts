import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductsService,
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.params['id']);
    this.productService.getProductById(id).subscribe((product) => {
      this.product = product;
    });
  }
}
