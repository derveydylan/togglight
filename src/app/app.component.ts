import { Component, OnInit } from '@angular/core';
import { RouterOutlet, Router, NavigationEnd } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { LevelService } from './services/level.service';
import { KonamiCodeModule } from 'ngx-konami-code';
import { DialogService } from './services/dialog.service';
import { Dialog } from './models/dialog';
import { DialogComponent } from "./dialog/dialog.component";

@Component(
{
    selector: 'app-root',
    standalone: true,
    imports: [
    RouterOutlet,
    HeaderComponent,
    KonamiCodeModule,
    DialogComponent
],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit
{
    isHomePage: boolean = false;

    easterEggDialog!: Dialog;

    constructor(private router: Router,
                private levelService: LevelService,
                private dialogService: DialogService
    ){}

    ngOnInit(): void
    {
        this.router.events.subscribe((event) =>
        {
            if (event instanceof NavigationEnd)
            {
                this.isHomePage = event.url === '/' || event.urlAfterRedirects === '/';
            }
        });

        this.levelService.saveLevels()

        this.easterEggDialog = this.dialogService.getDialog('easterEgg');
    }

    easterEgg()
    {
        this.dialogService.openDialog(this.easterEggDialog);
    }
}
