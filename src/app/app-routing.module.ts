import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalariesComponent } from './Accounts/salaries/salaries.component';
import { OfficeExpensesComponent } from './Accounts/office-expenses/office-expenses.component';
import { TripProfitnLosssComponent } from './Accounts/trip-profitn-losss/trip-profitn-losss.component';
// import { SalariesComponent } from './salaries/salaries.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'tripPL', component: TripProfitnLosssComponent },

  { path: 'salaries', component: SalariesComponent },


  { path: 'office expenses', component: OfficeExpensesComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
