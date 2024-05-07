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
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

import { TripProfitnLosssComponent } from './Accounts/trip-profitn-losss/trip-profitn-losss.component';
import { MaterialDesignModule } from './material-design/material-design.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AdvertisementBillsComponent } from './Accounts/advertisement-bills/advertisement-bills.component';

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
    MatExpansionModule,
    MatCardModule,
    MaterialDesignModule,
    MatFormFieldModule,
    MatInputModule,
<<<<<<< HEAD
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule

=======
>>>>>>> 7cddb95e1b1fc2d16c1119c1e79b81b8b0ed1850

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
