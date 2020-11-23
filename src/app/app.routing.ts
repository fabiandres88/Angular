import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { DeveloperComponent } from './developer/developer.component';
import { FruitComponent } from './fruit/fruit.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';

const appRoutes = [
    {path: '', component: HomeComponent},
    {path: 'home', component: HomeComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'developer', component: DeveloperComponent},
    {path: 'fruit', component: FruitComponent},
    {path: 'fruit', component: FruitComponent},
    {path: '**', component: HomeComponent} //Path when page loading fail
];

export const appRoutingProviders: any[] = [];//Service. To charge the provider

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
//Route module. Here define what set of routes must charge