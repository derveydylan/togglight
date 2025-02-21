import { Difficulty } from "../types/difficulty.type";
import { Light } from "./light";

export class Level
{
    constructor(public id: number,
                public name: string,
                public difficulty: Difficulty,
                public completed: boolean = false,
                public grid: Array<Array<Light>>
    ){}
}