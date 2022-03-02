import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';
import {GridComponent} from './grid/grid.component';
import {DescriptionComponent} from './description/description.component';


const routes: Routes =[
  {path:'home',component:GridComponent},
  {path:'description',component:DescriptionComponent},
  {path:'**',pathMatch:'full',redirectTo:'home'}
]
@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
