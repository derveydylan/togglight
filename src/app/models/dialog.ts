import { DialogType } from "../types/dialog-type.type";

export interface DialogOptions
{
    name: string,
    url: string|string[]
}

export class Dialog
{
    constructor(public type: DialogType,
                public title: string,
                public text: string,
                public options: DialogOptions[],
                public isOpen: boolean = false
    ){}
}