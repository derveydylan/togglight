import { Component, OnInit } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { Dialog } from '../models/dialog';
import { DialogService } from '../services/dialog.service';

@Component({
    selector: 'app-home',
    standalone: true,
    imports:
    [
        RouterLink,
        RouterLinkActive,
        DialogComponent
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit
{
    gamemodeDialog!: Dialog;

    constructor(private dialogService: DialogService,
                private router: Router
    ){}

    ngOnInit(): void
    {
        this.gamemodeDialog = this.dialogService.getDialog('gamemodes')
    }

    onPlay(): void
    {
        /* this.dialogService.openDialog(this.gamemodeDialog); */
        this.router.navigateByUrl('/levels');
    }
}
