import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { AuthComponent } from './module/auth/auth.component';

@NgModule({
  declarations: [AppComponent, AuthComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
