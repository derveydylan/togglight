import { Injectable } from "@angular/core";
import { Level } from "../models/level";
import { Light } from "../models/light";
import { LightState } from "../models/light-state.type";

@Injectable(
{
    providedIn: 'root'
})

export class LightService
{
    getLight(level: Level, x: number, y: number): Light|null
    {

        for(let row of level.grid)
        {
            for(let light of row) // Light = cell
            {
                if(light.x === x && light.y === y)
                    return light;
            }
        }

        return null;
    }

    getNeighoringLights(level: Level, light: Light): Light[]
    {
        const neighoringLights =
        [
            this.getLight(level, light.x, light.y - 1), // Top light
            this.getLight(level, light.x - 1, light.y), // Left light
            this.getLight(level, light.x + 1, light.y), // Right light
            this.getLight(level, light.x, light.y + 1)  // Bottom light
        ]

        return neighoringLights.filter(neighoringLight => neighoringLight !== null);
    }

    reverseLightState(lightState: LightState): LightState
    {
        if(lightState === null)
            return null

        return !lightState;
    }
}