import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Level } from '../../models/level';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { LevelService } from '../../services/level.service';
import { TitleComponent } from '../title/title.component';
import { NgClass } from '@angular/common';
import { LightService } from '../../services/light.service';

@Component({
    selector: 'app-level',
    standalone: true,
    imports:
    [
        TitleComponent,
        RouterLink,
        NgClass
    ],
    templateUrl: './level.component.html',
    styleUrl: './level.component.scss'
})

export class LevelComponent implements OnInit
{
    @Input() level!: Level;
    levelId!: number;

    isPuzzleResolved: boolean = false;

    constructor(private levelService: LevelService,
                private lightService: LightService,
                private route: ActivatedRoute,
                private router: Router
    ){}

    ngOnInit(): void
    {
        this.levelId = +this.route.snapshot.params['id'];

        try
        {
            this.level = this.levelService.getLevel(this.levelId);
        }

        catch
        {
            this.router.navigateByUrl('/levels')
        }

        if(this.level.completed)
            this.router.navigateByUrl('/levels')
    }

    onLightClick(x: number, y: number): void
    {
        const light = this.lightService.getLight(this.level, x, y);

        if(light !== null)
        {
            light.state = this.lightService.reverseLightState(light.state);

            const neighoringLights = this.lightService.getNeighoringLights(this.level, light);

            if(neighoringLights !== null)
            {
                for(let neighoringLight of neighoringLights)
                {
                    neighoringLight.state = this.lightService.reverseLightState(neighoringLight.state);
                }
            }
        }

        this.isPuzzleResolved = this.levelService.isPuzzleCompleted(this.level);

        if(this.isPuzzleResolved)
        {
            this.level.completed = true;
            this.levelService.saveLevels(this.level);
        }
    }
}
