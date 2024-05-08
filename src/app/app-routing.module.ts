import { AdvertisementBillsComponent } from './Accounts/advertisement-bills/advertisement-bills.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SalariesComponent } from './Accounts/salaries/salaries.component';
import { OfficeExpensesComponent } from './Accounts/office-expenses/office-expenses.component';
import { TripProfitnLosssComponent } from './Accounts/trip-profitn-losss/trip-profitn-losss.component';
import { TripBillsComponent } from './Accounts/trip-bills/trip-bills.component';
// import { SalariesComponent } from './salaries/salaries.component';


const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'salaries',component:SalariesComponent},
  {path:'office expenses',component:OfficeExpensesComponent},
  {path:'AdvertisementBills',component:AdvertisementBillsComponent},

  { path: '', component: HomeComponent },
  { path: 'Home', component: HomeComponent },
  { path: 'tripPL', component: TripProfitnLosssComponent },
  { path: 'salaries', component: SalariesComponent },
  { path: 'office expenses', component: OfficeExpensesComponent },
  { path: 'tripBills', component: TripBillsComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
