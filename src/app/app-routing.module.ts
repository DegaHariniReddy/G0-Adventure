import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { SalariesComponent } from './Accounts/salaries/salaries.component';
=======
import { OfficeExpensesComponent } from './Accounts/office-expenses/office-expenses.component';
// import { SalariesComponent } from './salaries/salaries.component';
>>>>>>> c8dbd53d75a4a3e8d660b3d932cec9f012506f83

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'Home',component:HomeComponent},
<<<<<<< HEAD
  {path:'salaries',component:SalariesComponent}
=======
  {path:'office expenses',component:OfficeExpensesComponent}
  // {path:'salaries',component:SalariesComponent}
>>>>>>> c8dbd53d75a4a3e8d660b3d932cec9f012506f83
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
