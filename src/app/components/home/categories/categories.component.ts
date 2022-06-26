import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/model/category';
import { ResponseApi } from 'src/app/model/response';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
})
export class CategoriesComponent implements OnInit {
  public categoriesList: Category[] = [];
  constructor(private ProductsService: ProductsService) {}

  ngOnInit(): void {
    this.ProductsService.getAllCategories().subscribe({
      next: (data: ResponseApi<Category>) => {
        this.categoriesList = data.data.slice(0, 4);
      },
    });
  }
}
