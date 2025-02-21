import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-page-not-found',
    standalone: true,
    imports:
    [
        TitleComponent,
        RouterLink
    ],
    templateUrl: './page-not-found.component.html',
    styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent
{
    @Input() errorData!: Array<any>
}
