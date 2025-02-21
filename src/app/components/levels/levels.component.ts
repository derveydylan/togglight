import { Component, HostListener, OnInit } from '@angular/core';
import { LevelService } from '../../services/level.service';
import { Level } from '../../models/level';
import { TitleComponent } from '../title/title.component';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-levels',
    standalone: true,
    imports: [
        TitleComponent,
        RouterLink
    ],
    templateUrl: './levels.component.html',
    styleUrl: './levels.component.scss'
})
export class LevelsComponent implements OnInit
{
    levels!: Level[]

    constructor(private levelService: LevelService){}

    countStars(difficulty: number): number[]
    {
        return Array(difficulty).fill(0);
    }

    ngOnInit(): void
    {
        this.levels = this.levelService.getLevels();
    }
}
