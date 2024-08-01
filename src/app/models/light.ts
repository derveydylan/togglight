import { LightState } from "./light-state.type";

export class Light
{
    constructor(public x: number,
                public y: number,
                public state: LightState
    ){}
}