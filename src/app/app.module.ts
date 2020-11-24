import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { routing, appRoutingProviders } from './app.routing'
import { AppComponent } from './app.component';
import { FruitComponent } from './fruit/fruit.component';
import { EmployeeComponent } from './employee/employee.component';
import { DeveloperComponent } from './developer/developer.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ConversorPipe } from './pipes/conversor.pipe';
import { CarsComponent } from './cars/cars.component';


@NgModule({
  declarations: [
    AppComponent,
    FruitComponent,
    EmployeeComponent,
    DeveloperComponent,
    HomeComponent,
    ContactComponent,
    ConversorPipe,
    CarsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
