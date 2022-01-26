import { NgModule } from '@angular/core';
import { HomeComponent } from './views/home/home.component';
import {RouterModule, Routes} from '@angular/router';
import { ListFilmsComponent } from "./views/list-films/ListFilmsComponent";
import { CheckoutComponent } from './views/checkout/checkout.component';

const routes:Routes =[{
  path:"",
  component:HomeComponent
},{
  path: "list-films",
  component: ListFilmsComponent
},
{
  path:"checkout",
  component: CheckoutComponent
}];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule]

})
export class AppRoutingModule { }
