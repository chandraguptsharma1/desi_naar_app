import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { CategoriesComponent } from './categories/categories.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';

import { CollectionListComponent } from './collection-list/collection-list.component';
import { ShopRewayatComponent } from './components/shop-rewayat/shop-rewayat.component';
import { ClassicMirrorKurtasComponent } from './components/classic-mirror-kurtas/classic-mirror-kurtas.component';
import { ShopTheLookComponent } from './components/shop-the-look/shop-the-look.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HomeComponent,
    HeaderComponent,
    BannerComponent,
    FeaturedProductsComponent,
    CategoriesComponent,
    NewArrivalsComponent,
    CollectionListComponent,
    ShopRewayatComponent,
    ClassicMirrorKurtasComponent,
    ShopTheLookComponent,
    FooterComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, FormsModule, ReactiveFormsModule],
  exports: [HeaderComponent, FooterComponent],
})
export class HomeModule { }
