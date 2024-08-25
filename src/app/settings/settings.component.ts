import { Component, HostBinding, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { Dialog } from '../models/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { LevelService } from '../services/level.service';
import { DialogComponent } from "../dialog/dialog.component";
import { DialogService } from '../services/dialog.service';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [
    TitleComponent,
    DialogComponent
],
    templateUrl: './settings.component.html',
    styleUrl: './settings.component.scss'
})

export class SettingsComponent implements OnInit
{
    resetGameProgressDialog!: Dialog

    constructor(private activatedRoute: ActivatedRoute,
                private levelService: LevelService,
                private dialogService: DialogService,
                private router: Router
    ){}

    ngOnInit(): void
    {
        this.resetGameProgressDialog = this.dialogService.getDialog('resetGameProgress');

        this.activatedRoute.params.subscribe((params) =>
        {
            switch(params['action'])
            {
                case 'reset-game-progress':
                    this.levelService.resetLevels();
                    this.router.navigateByUrl('/settings');

                    // Exectue the page reload 1ms later to prevent infinite loop
                    setTimeout(() =>
                    {
                        // Reload the page in order to apply the reset
                        window.location.reload();
                    }, 1);

                    break;
            }
        });
    }

    onResetGameProgress()
    {
        this.dialogService.openDialog(this.resetGameProgressDialog);
    }
}
