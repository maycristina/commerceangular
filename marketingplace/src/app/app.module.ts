import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule } from "@angular/material/toolbar";
import{MatSidenavModule} from "@angular/material/sidenav";
import{MatListModule} from "@angular/material/list";
import{MatCardModule} from "@angular/material/card";
import{MatButtonModule} from "@angular/material/button";
import{MatButtonToggleModule} from "@angular/material/button-toggle";
import { FormsModule } from '@angular/forms';
import{MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import{MatSnackBarModule} from "@angular/material/snack-bar";
import {MatBadgeModule} from "@angular/material/badge";

import { HeaderComponent } from './components/template/header/header.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component'
import {HttpClientModule } from '@angular/common/http';
import { CardFilmComponent } from './components/template/card-film/card-film.component';
import { ListFilmsComponent } from "./views/list-films/ListFilmsComponent";
import { AppRoutingModule } from './app-routing.module';
import { SelectButtonComponent } from './components/template/select-button/select-button.component';
import { CheckoutComponent } from './views/checkout/checkout.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    HomeComponent,
    CardFilmComponent,
    ListFilmsComponent,
    SelectButtonComponent,
    CheckoutComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    HttpClientModule,
    AppRoutingModule,
    MatButtonToggleModule,
    MatButtonModule,
    MatSnackBarModule,
    MatInputModule,
    MatFormFieldModule,
    MatBadgeModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
