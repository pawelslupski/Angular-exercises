import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HousesDashboardComponent} from "./components/houses-dashboard/houses-dashboard.component";

const routes: Routes = [
  { path: 'houses', component: HousesDashboardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
