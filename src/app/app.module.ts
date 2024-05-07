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
import {MatListModule} from '@angular/material/list';
import { MatDividerModule } from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import { HomeComponent } from './home/home.component';
import {MatCard, MatCardModule} from '@angular/material/card';
import { SalariesComponent } from './Accounts/salaries/salaries.component';
import { OfficeExpensesComponent } from './Accounts/office-expenses/office-expenses.component';

@NgModule({
  declarations: [
    AppComponent,
    SIdeBarComponent,
    HeaderComponent,
    HomeComponent,
    SalariesComponent,
    OfficeExpensesComponent,
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
    MatCardModule

    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
