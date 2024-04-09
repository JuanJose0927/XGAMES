import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { GameslistComponent } from "./gameslist/gameslist.component";
import { ConsolelistComponent } from "./consolelist/consolelist.component";
import { ClotheslistComponent } from "./clotheslist/clotheslist.component";
import { ObjectslistComponent } from "./objectslist/objectslist.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'gameslist', component: GameslistComponent},
    {path: 'consolelist', component: ConsolelistComponent},
    {path: 'clotheslist', component: ClotheslistComponent},
    {path: 'objectslist', component: ObjectslistComponent},
    {path: 'productdetails/:id', component: ProductdetailsComponent}
]

@NgModule({ 
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {} 