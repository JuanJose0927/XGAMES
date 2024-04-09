import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './home/header/header.component';
import { NewsComponent } from './home/news/news.component';
import { ConsolesComponent } from './home/consoles/consoles.component';
import { ClothesComponent } from './home/clothes/clothes.component';
import { ObjectsComponent } from './home/objects/objects.component';
import { FooterComponent } from './home/footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { GameslistComponent } from './gameslist/gameslist.component';
import { ConsolelistComponent } from './consolelist/consolelist.component';
import { ClotheslistComponent } from './clotheslist/clotheslist.component';
import { ObjectslistComponent } from './objectslist/objectslist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewsComponent,
    ConsolesComponent,
    ClothesComponent,
    ObjectsComponent,
    FooterComponent,
    GameslistComponent,
    ConsolelistComponent,
    ClotheslistComponent,
    ObjectslistComponent,
    ProductdetailsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
