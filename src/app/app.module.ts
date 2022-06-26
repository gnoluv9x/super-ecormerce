import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import SwiperCore, {
  A11y,
  Autoplay,
  Controller,
  Navigation,
  Pagination,
  Scrollbar,
  Thumbs,
  Virtual,
  Zoom,
} from 'swiper';
import { MatButtonModule } from '@angular/material/button';

import { SwiperModule } from 'swiper/angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannerComponent } from './components/home/banner/banner.component';
import { TrendingComponent } from './components/home/trending/trending.component';
import { HomeComponent } from './pages/home/home.component';
import { ApiInterceptor } from './services/interceptor.interceptor';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';
import { HeaderTopComponent } from './shared/header-top/header-top.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { ShopnowComponent } from './components/home/shopnow/shopnow.component';

// install Swiper components
SwiperCore.use([
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Virtual,
  Zoom,
  Autoplay,
  Thumbs,
  Controller,
]);
@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderTopComponent,
    HeaderMenuComponent,
    BreadcrumbComponent,
    FooterComponent,
    BannerComponent,
    HomeComponent,
    TrendingComponent,
    CategoriesComponent,
    ShopnowComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    SwiperModule,
    MatGridListModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
