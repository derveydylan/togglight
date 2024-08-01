export class Error
{
    constructor(public status: number,
                public name: string,
                public message: string,
                public buttonUrl: string
    ){}
}