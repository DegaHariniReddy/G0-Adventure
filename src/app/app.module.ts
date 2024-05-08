import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SIdeBarComponent } from './side-bar/side-bar.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
import { SalariesComponent } from './Accounts/salaries/salaries.component';
import { OfficeExpensesComponent } from './Accounts/office-expenses/office-expenses.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { TripProfitnLosssComponent } from './Accounts/trip-profitn-losss/trip-profitn-losss.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdvertisementBillsComponent } from './Accounts/advertisement-bills/advertisement-bills.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TripBillsComponent } from './Accounts/trip-bills/trip-bills.component';
// import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatNativeDateModule } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent,
    SIdeBarComponent,
    HeaderComponent,
    HomeComponent,
    SalariesComponent,
    OfficeExpensesComponent,
    TripProfitnLosssComponent,
    AdvertisementBillsComponent,
    TripBillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatDividerModule,
    MaterialDesignModule,
    MatExpansionModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,


  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
