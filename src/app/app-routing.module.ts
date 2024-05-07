import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OfficeExpensesComponent } from './Accounts/office-expenses/office-expenses.component';
// import { SalariesComponent } from './salaries/salaries.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
  {path:'office expenses',component:OfficeExpensesComponent}
  // {path:'salaries',component:SalariesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
