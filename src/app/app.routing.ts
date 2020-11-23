import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Import components
import { DeveloperComponent } from './developer/developer.component';
import { FruitComponent } from './fruit/fruit.component';

const appRoutes = [
    {path: '', component: DeveloperComponent},
    {path: 'developer', component: DeveloperComponent},
    {path: 'fruit', component: FruitComponent},
    {path: '**', component: DeveloperComponent} //Path when page loading fail
];

export const appRoutingProviders: any[] = [];//Service. To charge the provider

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
//Route module. Here define what set of routes must charge