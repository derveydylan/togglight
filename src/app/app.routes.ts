import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HowToComponent } from './components/how-to/how-to.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CreditsComponent } from './components/credits/credits.component';
import { LevelsComponent } from './components/levels/levels.component';
import { LevelComponent } from './components/level/level.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

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
