import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HowToComponent } from './how-to/how-to.component';
import { SettingsComponent } from './settings/settings.component';
import { CreditsComponent } from './credits/credits.component';
import { LevelsComponent } from './levels/levels.component';
import { LevelComponent } from './level/level.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes =
[
    {path: '', component: HomeComponent, data: {animation: 'Home'}},
    
    {path: 'levels', component: LevelsComponent, data: {animation: 'Levels'}},
    {path: 'level/:id', component: LevelComponent, data: {animation: 'Level'}},
    
    {path: 'how-to', component: HowToComponent, data: {animation: 'How-to'}},
    
    {path: 'settings', component: SettingsComponent, data: {animation: 'Settings'}},
    {path: 'settings/:action', component: SettingsComponent},
    
    {path: 'credits', component: CreditsComponent, data: {animation: 'Credits'}},

    {path: '**', component: PageNotFoundComponent, pathMatch: 'full', data: {animation: '404'}},
];
