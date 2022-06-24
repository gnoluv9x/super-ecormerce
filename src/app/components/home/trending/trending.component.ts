import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/model/product';
import { ResponseApi } from 'src/app/model/response';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.scss'],
})
export class TrendingComponent implements OnInit {
  public trendProductsList: Product[] = [];
  public loading: boolean = false;
  public page: number = 1;
  public size: number = 10;
  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.ProductsService.getAllProducts(this.page, this.size).subscribe({
      next: (data: ResponseApi<Product>) => {
        this.trendProductsList = data.data;
      },
      error(err) {
        console.log('err :', err);
      },
    });
  }
}
