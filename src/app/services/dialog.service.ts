import { Injectable } from "@angular/core";
import { Dialog } from "../models/dialog";
import { DialogType } from "../types/dialog-type.type";

@Injectable(
{
    providedIn: 'root'
})

export class DialogService
{
    private dialogs =
    {
        gamemodes: new Dialog
        (
            'default',
            'Select gamemode',
            '',
            [
                {name: 'Basic Levels', url: 'levels'},
            ]
        ),

        resetGameProgress: new Dialog
        (
            'delete-confirm',
            'Reset game progress',
            'If you continue, all levels will be reinitialized.',
            [
                {name: 'Continue', url: ['/settings', 'reset-game-progress']},
            ]
        ),

        easterEgg: new Dialog
        (
            'action-confirm',
            'Easter Egg Found !',
            'As one man said, an app without a konami code isn\'t a real app.',
            []
        ),
    }

    getDialog(dialaogType: keyof typeof this.dialogs): Dialog
    {
        return this.dialogs[dialaogType];
    }

    openDialog(dialog: Dialog)
    {
        dialog.isOpen = true;
    }

    closeDialog(dialog: Dialog)
    {
        dialog.isOpen = false;
    }
}