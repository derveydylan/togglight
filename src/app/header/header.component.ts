import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: 
    [
        RouterLink,
        NgClass
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent
{
    isMenuOpen: boolean = false;

    onOpenMenu(): void
    {
        this.isMenuOpen = true;
    }

    onCloseMenu(): void
    {
        this.isMenuOpen = false;
    }
}
