import { Component, Input, OnInit } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { RouterLink } from '@angular/router';
import { Dialog } from '../models/dialog';
import { DialogService } from '../services/dialog.service';
import { NgClass } from '@angular/common';

@Component({
    selector: 'app-dialog',
    standalone: true,
    imports:
    [
        TitleComponent,
        RouterLink,
        NgClass
    ],
    templateUrl: './dialog.component.html',
    styleUrl: './dialog.component.scss'
})
export class DialogComponent
{
    @Input() dialogData!: Dialog;

    constructor(private dialogService: DialogService){}

    onCloseDialog()
    {
        this.dialogService.closeDialog(this.dialogData);
    }
}
