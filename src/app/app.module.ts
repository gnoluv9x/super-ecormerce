import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BreadcrumbComponent } from './shared/breadcrumb/breadcrumb.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HeaderMenuComponent } from './shared/header-menu/header-menu.component';
import { HeaderTopComponent } from './shared/header-top/header-top.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { MenubarModule } from 'primeng/menubar';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderTopComponent,
    HeaderMenuComponent,
    BreadcrumbComponent,
    FooterComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
