import { Injectable } from "@angular/core";
import { Level } from "../models/level";
import { Light } from "../models/light";
import { LightService } from "./light.service";

@Injectable(
{
    providedIn: 'root'
})

export class LevelService
{
    constructor(private lightService: LightService){}

    private levels: Level[] =
    [
        new Level(
            1,
            'Lights Out!',
            1,
            false,
            [
                [
                   new Light(0, 0, true)
                ]
            ]
        ),
        new Level(
            2,
            '3 In a Row',
            1,
            false,
            [
                [
                   new Light(0, 0, false),
                   new Light(1, 0, false),
                   new Light(2, 0, true)
                ]
            ]
        ),
        new Level(
            3,
            'More Lights',
            1,
            false,
            [
                [
                   new Light(0, 0, true),
                   new Light(1, 0, false),
                   new Light(2, 0, true),
                   new Light(3, 0, false)
                ]
            ]
        ),
        new Level(
            4,
            'Another One',
            1,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, false),
                    new Light(2, 0, true),
                    new Light(3, 0, false),
                    new Light(4, 0, true)
                 ]
            ]
        ),
        new Level(
            5,
            'Square',
            1,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, true)
                 ],
                 [
                    new Light(0, 1, false),
                    new Light(1, 1, false)
                 ]
            ]
        ),
        new Level(
            6,
            'Holes?',
            1,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, false)
                 ],
                 [
                    new Light(0, 1, false),
                    new Light(1, 1, null)
                 ]
            ]
        ),
        new Level(
            7,
            'Split',
            1,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, null),
                    new Light(2, 0, false),
                    new Light(3, 0, false),
                    new Light(4, 0, true)
                 ]
            ]
        ),
        new Level(
            8,
            'Braille',
            2,
            false,
            [
                [
                    new Light(0, 0, null),
                    new Light(1, 0, false)
                 ],
                 [
                    new Light(0, 1, true),
                    new Light(1, 1, true)
                 ],
                 [
                    new Light(0, 2, false),
                    new Light(1, 2, false)
                 ]
            ]
        ),
        new Level(
            9,
            'Corners',
            2,
            false,
            [
                [
                   new Light(0, 0, true),
                   new Light(1, 0, false),
                   new Light(2, 0, null),
                   new Light(3, 0, false),
                ],
                [
                   new Light(0, 1, true),
                   new Light(1, 1, null),
                   new Light(2, 1, true),
                   new Light(3, 1, false),
                ]
            ]
        ),
        new Level(
            10,
            'Dice',
            2,
            false,
            [
                [
                   new Light(0, 0, true),
                   new Light(1, 0, true),
                   new Light(2, 0, false),
                ],
                [
                   new Light(0, 1, null),
                   new Light(1, 1, null),
                   new Light(2, 1, null),
                ],
                [
                   new Light(0, 2, false),
                   new Light(1, 2, true),
                   new Light(2, 2, false),
                ]
            ]
        ),
        new Level(
            11,
            'Arrow',
            2,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, false),
                    new Light(2, 0, false),
                 ],
                 [
                    new Light(0, 1, false),
                    new Light(1, 1, true),
                    new Light(2, 1, null),
                 ],
                 [
                    new Light(0, 2, false),
                    new Light(1, 2, null),
                    new Light(2, 2, true),
                 ]
            ]
        ),
        new Level(
            12,
            'H',
            2,
            false,
            [
                [
                    new Light(0, 0, false),
                    new Light(1, 0, null),
                    new Light(2, 0, false),
                 ],
                 [
                    new Light(0, 1, true),
                    new Light(1, 1, false),
                    new Light(2, 1, true),
                 ],
                 [
                    new Light(0, 2, true),
                    new Light(1, 2, null),
                    new Light(2, 2, false),
                 ]
            ]
        ),

        new Level(
            13,
            '3 Times 3',
            2,
            false,
            [
                [
                   new Light(0, 0, true),
                   new Light(1, 0, true),
                   new Light(2, 0, false),
                ],
                [
                   new Light(0, 1, true),
                   new Light(1, 1, true),
                   new Light(2, 1, false),
                ],
                [
                   new Light(0, 2, true),
                   new Light(1, 2, true),
                   new Light(2, 2, false),
                ]
            ]
        ),
        new Level(
            14,
            'Bucket',
            3,
            false,
            [
                [
                   new Light(0, 0, true),
                   new Light(1, 0, null),
                   new Light(2, 0, null),
                   new Light(3, 0, false),
                ],
                [
                   new Light(0, 1, true),
                   new Light(1, 1, null),
                   new Light(2, 1, null),
                   new Light(3, 1, false),
                ],
                [
                   new Light(0, 2, true),
                   new Light(1, 2, true),
                   new Light(2, 2, true),
                   new Light(3, 2, false),
                ],
                [
                   new Light(0, 3, true),
                   new Light(1, 3, true),
                   new Light(2, 3, false),
                   new Light(3, 3, false),
                ],
            ]
        ),
        new Level(
            15,
            'Backslash',
            3,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, null),
                    new Light(2, 0, true),
                    new Light(3, 0, false),
                 ],
                 [
                    new Light(0, 1, true),
                    new Light(1, 1, null),
                    new Light(2, 1, true),
                    new Light(3, 1, false),
                 ],
                 [
                    new Light(0, 2, true),
                    new Light(1, 2, true),
                    new Light(2, 2, null),
                    new Light(3, 2, false),
                 ],
                 [
                    new Light(0, 3, true),
                    new Light(1, 3, false),
                    new Light(2, 3, null),
                    new Light(3, 3, false),
                 ],
            ]
        ),
        new Level(
            16,
            'No Corners',
            3,
            false,
            [
                [
                    new Light(0, 0, null),
                    new Light(1, 0, false),
                    new Light(2, 0, false),
                    new Light(3, 0, null),
                 ],
                 [
                    new Light(0, 1, true),
                    new Light(1, 1, true),
                    new Light(2, 1, true),
                    new Light(3, 1, false),
                 ],
                 [
                    new Light(0, 2, false),
                    new Light(1, 2, false),
                    new Light(2, 2, true),
                    new Light(3, 2, false),
                 ],
                 [
                    new Light(0, 3, null),
                    new Light(1, 3, false),
                    new Light(2, 3, true),
                    new Light(3, 3, null),
                 ],
            ]
        ),
        new Level(
            17,
            'Hands Up!',
            3,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, null),
                    new Light(2, 0, null),
                    new Light(3, 0, false),
                 ],
                 [
                    new Light(0, 1, true),
                    new Light(1, 1, true),
                    new Light(2, 1, true),
                    new Light(3, 1, false),
                 ],
                 [
                    new Light(0, 2, null),
                    new Light(1, 2, true),
                    new Light(2, 2, true),
                    new Light(3, 2, null),
                 ],
                 [
                    new Light(0, 3, null),
                    new Light(1, 3, true),
                    new Light(2, 3, false),
                    new Light(3, 3, null),
                 ],
            ]
        ),
        new Level(
            18,
            '4x4',
            3,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, true),
                    new Light(2, 0, true),
                    new Light(3, 0, false)
                ],
                [
                    new Light(0, 1, false),
                    new Light(1, 1, false),
                    new Light(2, 1, false),
                    new Light(3, 1, false)
                ],
                [
                    new Light(0, 2, false),
                    new Light(1, 2, true),
                    new Light(2, 2, true),
                    new Light(3, 2, true)
                ],
                [
                    new Light(0, 3, true),
                    new Light(1, 3, false),
                    new Light(2, 3, true),
                    new Light(3, 3, true)
                ]
            ]
        ),
        new Level(
            19,
            'Upgradin\'',
            4,
            false,
            [
                [
                    new Light(0, 0, null),
                    new Light(1, 0, true),
                    new Light(2, 0, null),
                    new Light(3, 0, false),
                    new Light(4, 0, null),
                ],
                [
                    new Light(0, 1, false),
                    new Light(1, 1, false),
                    new Light(2, 1, false),
                    new Light(3, 1, false),
                    new Light(4, 1, false),
                ],
                [
                    new Light(0, 2, null),
                    new Light(1, 2, true),
                    new Light(2, 2, null),
                    new Light(3, 2, false),
                    new Light(4, 2, null),
                ],
                [
                    new Light(0, 3, true),
                    new Light(1, 3, false),
                    new Light(2, 3, true),
                    new Light(3, 3, false),
                    new Light(4, 3, false),
                ]
            ]
        ),
        new Level(
            20,
            'Expandin\'',
            4,
            false,
            [
                [
                    new Light(0, 0, false),
                    new Light(1, 0, true),
                    new Light(2, 0, null),
                    new Light(3, 0, false),
                    new Light(4, 0, true),
                ],
                [
                    new Light(0, 1, false),
                    new Light(1, 1, true),
                    new Light(2, 1, true),
                    new Light(3, 1, false),
                    new Light(4, 1, true),
                ],
                [
                    new Light(0, 2, false),
                    new Light(1, 2, null),
                    new Light(2, 2, null),
                    new Light(3, 2, null),
                    new Light(4, 2, true),
                ],
                [
                    new Light(0, 3, true),
                    new Light(1, 3, true),
                    new Light(2, 3, false),
                    new Light(3, 3, true),
                    new Light(4, 3, true),
                ],
                [
                    new Light(0, 4, true),
                    new Light(1, 4, false),
                    new Light(2, 4, null),
                    new Light(3, 4, false),
                    new Light(4, 4, true),
                ],
            ]
        ),
        new Level(
            21,
            'Spiral',
            4,
            false,
            [
                [
                    new Light(0, 0, false),
                    new Light(1, 0, true),
                    new Light(2, 0, true),
                    new Light(3, 0, false),
                    new Light(4, 0, true),
                ],
                [
                    new Light(0, 1, false),
                    new Light(1, 1, null),
                    new Light(2, 1, null),
                    new Light(3, 1, null),
                    new Light(4, 1, null),
                ],
                [
                    new Light(0, 2, true),
                    new Light(1, 2, null),
                    new Light(2, 2, false),
                    new Light(3, 2, false),
                    new Light(4, 2, null),
                ],
                [
                    new Light(0, 3, true),
                    new Light(1, 3, null),
                    new Light(2, 3, null),
                    new Light(3, 3, true),
                    new Light(4, 3, null),
                ],
                [
                    new Light(0, 4, true),
                    new Light(1, 4, true),
                    new Light(2, 4, false),
                    new Light(3, 4, true),
                    new Light(4, 4, null),
                ],
            ]
        ),
        new Level(
            22,
            'Hashtag',
            4,
            false,
            [
                [
                    new Light(0, 0, null),
                    new Light(1, 0, true),
                    new Light(2, 0, null),
                    new Light(3, 0, false),
                    new Light(4, 0, null),
                ],
                [
                    new Light(0, 1, false),
                    new Light(1, 1, false),
                    new Light(2, 1, false),
                    new Light(3, 1, false),
                    new Light(4, 1, false),
                ],
                [
                    new Light(0, 2, null),
                    new Light(1, 2, true),
                    new Light(2, 2, false),
                    new Light(3, 2, false),
                    new Light(4, 2, null),
                ],
                [
                    new Light(0, 3, true),
                    new Light(1, 3, false),
                    new Light(2, 3, true),
                    new Light(3, 3, true),
                    new Light(4, 3, false),
                ],
                [
                    new Light(0, 4, null),
                    new Light(1, 4, true),
                    new Light(2, 4, null),
                    new Light(3, 4, true),
                    new Light(4, 4, null),
                ],
            ]
        ),
        new Level(
            23,
            'Bullseye',
            4,
            false,
            [
                [
                    new Light(0, 0, null),
                    new Light(1, 0, null),
                    new Light(2, 0, true),
                    new Light(3, 0, true),
                    new Light(4, 0, null),
                    new Light(5, 0, null),
                ],
                [
                    new Light(0, 1, null),
                    new Light(1, 1, false),
                    new Light(2, 1, false),
                    new Light(3, 1, false),
                    new Light(4, 1, false),
                    new Light(5, 1, null),
                ],
                [
                    new Light(0, 2, true),
                    new Light(1, 2, false),
                    new Light(2, 2, null),
                    new Light(3, 2, null),
                    new Light(4, 2, false),
                    new Light(5, 2, true),
                ],
                [
                    new Light(0, 3, true),
                    new Light(1, 3, false),
                    new Light(2, 3, null),
                    new Light(3, 3, null),
                    new Light(4, 3, false),
                    new Light(5, 3, true),
                ],
                [
                    new Light(0, 4, null),
                    new Light(1, 4, false),
                    new Light(2, 4, false),
                    new Light(3, 4, false),
                    new Light(4, 4, false),
                    new Light(5, 4, null),
                ],
                [
                    new Light(0, 5, null),
                    new Light(1, 5, null),
                    new Light(2, 5, true),
                    new Light(3, 5, true),
                    new Light(4, 5, null),
                    new Light(5, 5, null),
                ],
            ]
        ),
        new Level(
            24,
            'Quarters',
            5,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, true),
                    new Light(2, 0, true),
                    new Light(3, 0, false),
                    new Light(4, 0, false),
                    new Light(5, 0, false),
                ],
                [
                    new Light(0, 1, true),
                    new Light(1, 1, true),
                    new Light(2, 1, true),
                    new Light(3, 1, false),
                    new Light(4, 1, false),
                    new Light(5, 1, false),
                ],
                [
                    new Light(0, 2, true),
                    new Light(1, 2, true),
                    new Light(2, 2, true),
                    new Light(3, 2, false),
                    new Light(4, 2, false),
                    new Light(5, 2, false),
                ],
                [
                    new Light(0, 3, false),
                    new Light(1, 3, false),
                    new Light(2, 3, false),
                    new Light(3, 3, null),
                    new Light(4, 3, null),
                    new Light(5, 3, null),
                ],
                [
                    new Light(0, 4, false),
                    new Light(1, 4, false),
                    new Light(2, 4, false),
                    new Light(3, 4, null),
                    new Light(4, 4, null),
                    new Light(5, 4, null),
                ],
                [
                    new Light(0, 5, false),
                    new Light(1, 5, false),
                    new Light(2, 5, false),
                    new Light(3, 5, null),
                    new Light(4, 5, null),
                    new Light(5, 5, null),
                ],
            ]
        ),
        new Level(
            25,
            '7+7',
            5,
            false,
            [
                [
                   new Light(0, 0, true),
                   new Light(1, 0, true),
                   new Light(2, 0, false),
                   new Light(3, 0, false),
                   new Light(4, 0, false),
                   new Light(5, 0, true),
                   new Light(6, 0, true)
                ],
                [
                   new Light(0, 1, true),
                   new Light(1, 1, true),
                   new Light(2, 1, false),
                   new Light(3, 1, false),
                   new Light(4, 1, false),
                   new Light(5, 1, true),
                   new Light(6, 1, true)
                ],
                [
                   new Light(0, 2, true),
                   new Light(1, 2, true),
                   new Light(2, 2, false),
                   new Light(3, 2, null),
                   new Light(4, 2, false),
                   new Light(5, 2, true),
                   new Light(6, 2, true)
                ],
                [
                   new Light(0, 3, true),
                   new Light(1, 3, true),
                   new Light(2, 3, null),
                   new Light(3, 3, null),
                   new Light(4, 3, null),
                   new Light(5, 3, true),
                   new Light(6, 3, true)
                ],
                [
                   new Light(0, 4, true),
                   new Light(1, 4, true),
                   new Light(2, 4, false),
                   new Light(3, 4, null),
                   new Light(4, 4, false),
                   new Light(5, 4, true),
                   new Light(6, 4, true)
                ],
                [
                   new Light(0, 5, true),
                   new Light(1, 5, true),
                   new Light(2, 5, false),
                   new Light(3, 5, false),
                   new Light(4, 5, false),
                   new Light(5, 5, true),
                   new Light(6, 5, true)
                ],
                [
                   new Light(0, 6, true),
                   new Light(1, 6, true),
                   new Light(2, 6, false),
                   new Light(3, 6, false),
                   new Light(4, 6, false),
                   new Light(5, 6, true),
                   new Light(6, 6, true)
                ]
            ]
        ),
        new Level(
            26,
            'Splits',
            5,
            false,
            [
                [
                    new Light(0, 0, true),
                    new Light(1, 0, false),
                    new Light(2, 0, null),
                    new Light(3, 0, true),
                    new Light(4, 0, false),
                    new Light(5, 0, null),
                    new Light(6, 0, null)
                 ],
                 [
                    new Light(0, 1, true),
                    new Light(1, 1, true),
                    new Light(2, 1, null),
                    new Light(3, 1, false),
                    new Light(4, 1, false),
                    new Light(5, 1, null),
                    new Light(6, 1, null)
                 ],
                 [
                    new Light(0, 2, null),
                    new Light(1, 2, null),
                    new Light(2, 2, null),
                    new Light(3, 2, true),
                    new Light(4, 2, false),
                    new Light(5, 2, true),
                    new Light(6, 2, true)
                 ],
                 [
                    new Light(0, 3, true),
                    new Light(1, 3, null),
                    new Light(2, 3, null),
                    new Light(3, 3, null),
                    new Light(4, 3, null),
                    new Light(5, 3, false),
                    new Light(6, 3, true)
                 ],
                 [
                    new Light(0, 4, true),
                    new Light(1, 4, false),
                    new Light(2, 4, false),
                    new Light(3, 4, null),
                    new Light(4, 4, null),
                    new Light(5, 4, null),
                    new Light(6, 4, null)
                 ],
                 [
                    new Light(0, 5, true),
                    new Light(1, 5, false),
                    new Light(2, 5, false),
                    new Light(3, 5, false),
                    new Light(4, 5, false),
                    new Light(5, 5, null),
                    new Light(6, 5, null)
                 ],
                 [
                    new Light(0, 6, true),
                    new Light(1, 6, true),
                    new Light(2, 6, false),
                    new Light(3, 6, false),
                    new Light(4, 6, false),
                    new Light(5, 6, true),
                    new Light(6, 6, true)
                 ]
            ]
        ),
        new Level(
            27,
            'Get Big',
            5,
            false,
            [
                [
                   new Light(0, 0, true),
                   new Light(1, 0, true),
                   new Light(2, 0, false),
                   new Light(3, 0, false),
                   new Light(4, 0, true),
                   new Light(5, 0, false),
                   new Light(6, 0, false),
                   new Light(7, 0, false)
                ],
                [
                   new Light(0, 1, true),
                   new Light(1, 1, false),
                   new Light(2, 1, false),
                   new Light(3, 1, true),
                   new Light(4, 1, false),
                   new Light(5, 1, false),
                   new Light(6, 1, false),
                   new Light(7, 1, false)
                ],
                [
                   new Light(0, 2, true),
                   new Light(1, 2, true),
                   new Light(2, 2, false),
                   new Light(3, 2, false),
                   new Light(4, 2, true),
                   new Light(5, 2, true),
                   new Light(6, 2, true),
                   new Light(7, 2, false)
                ],
                [
                   new Light(0, 3, true),
                   new Light(1, 3, false),
                   new Light(2, 3, false),
                   new Light(3, 3, false),
                   new Light(4, 3, true),
                   new Light(5, 3, false),
                   new Light(6, 3, false),
                   new Light(7, 3, false)
                ],
                [
                   new Light(0, 4, true),
                   new Light(1, 4, false),
                   new Light(2, 4, false),
                   new Light(3, 4, false),
                   new Light(4, 4, false),
                   new Light(5, 4, false),
                   new Light(6, 4, false),
                   new Light(7, 4, true)
                ],
                [
                   new Light(0, 5, false),
                   new Light(1, 5, false),
                   new Light(2, 5, false),
                   new Light(3, 5, false),
                   new Light(4, 5, false),
                   new Light(5, 5, true),
                   new Light(6, 5, false),
                   new Light(7, 5, true)
                ],
                [
                   new Light(0, 6, false),
                   new Light(1, 6, false),
                   new Light(2, 6, false),
                   new Light(3, 6, false),
                   new Light(4, 6, true),
                   new Light(5, 6, false),
                   new Light(6, 6, false),
                   new Light(7, 6, false)
                ],
                [
                   new Light(0, 7, null),
                   new Light(1, 7, false),
                   new Light(2, 7, false),
                   new Light(3, 7, null),
                   new Light(4, 7, true),
                   new Light(5, 7, null),
                   new Light(6, 7, false),
                   new Light(7, 7, false)
                ],
            ]
        ),
        new Level(
            28,
            'Weird Tree',
            5,
            false,
            [
                [
                   new Light(0, 0, false),
                   new Light(1, 0, false),
                   new Light(2, 0, null),
                   new Light(3, 0, false),
                   new Light(4, 0, false),
                   new Light(5, 0, null),
                   new Light(6, 0, true),
                   new Light(7, 0, false)
                ],
                [
                   new Light(0, 1, true),
                   new Light(1, 1, true),
                   new Light(2, 1, true),
                   new Light(3, 1, false),
                   new Light(4, 1, false),
                   new Light(5, 1, null),
                   new Light(6, 1, false),
                   new Light(7, 1, false)
                ],
                [
                   new Light(0, 2, null),
                   new Light(1, 2, null),
                   new Light(2, 2, null),
                   new Light(3, 2, false),
                   new Light(4, 2, true),
                   new Light(5, 2, false),
                   new Light(6, 2, true),
                   new Light(7, 2, false)
                ],
                [
                   new Light(0, 3, true),
                   new Light(1, 3, false),
                   new Light(2, 3, null),
                   new Light(3, 3, false),
                   new Light(4, 3, true),
                   new Light(5, 3, null),
                   new Light(6, 3, false),
                   new Light(7, 3, true)
                ],
                [
                   new Light(0, 4, true),
                   new Light(1, 4, false),
                   new Light(2, 4, null),
                   new Light(3, 4, true),
                   new Light(4, 4, true),
                   new Light(5, 4, null),
                   new Light(6, 4, false),
                   new Light(7, 4, false)
                ],
                [
                   new Light(0, 5, false),
                   new Light(1, 5, false),
                   new Light(2, 5, null),
                   new Light(3, 5, true),
                   new Light(4, 5, true),
                   new Light(5, 5, null),
                   new Light(6, 5, false),
                   new Light(7, 5, null)
                ],
                [
                   new Light(0, 6, null),
                   new Light(1, 6, false),
                   new Light(2, 6, false),
                   new Light(3, 6, true),
                   new Light(4, 6, false),
                   new Light(5, 6, false),
                   new Light(6, 6, true),
                   new Light(7, 6, null)
                ],
                [
                   new Light(0, 7, true),
                   new Light(1, 7, true),
                   new Light(2, 7, false),
                   new Light(3, 7, true),
                   new Light(4, 7, true),
                   new Light(5, 7, null),
                   new Light(6, 7, true),
                   new Light(7, 7, true)
                ]
            ]
        ),

        new Level(
            29,
            'Made by IA',
            5,
            false,
            [
                [
                    new Light(0, 0, false),
                    new Light(1, 0, true),
                    new Light(2, 0, false),
                    new Light(3, 0, true),
                    new Light(4, 0, null),
                    new Light(5, 0, false),
                    new Light(6, 0, true),
                    new Light(7, 0, null)
                ],
                [
                    new Light(0, 1, false),
                    new Light(1, 1, true),
                    new Light(2, 1, null),
                    new Light(3, 1, false),
                    new Light(4, 1, true),
                    new Light(5, 1, true),
                    new Light(6, 1, false),
                    new Light(7, 1, true)
                ],
                [
                    new Light(0, 2, null),
                    new Light(1, 2, true),
                    new Light(2, 2, false),
                    new Light(3, 2, null),
                    new Light(4, 2, true),
                    new Light(5, 2, true),
                    new Light(6, 2, false),
                    new Light(7, 2, null)
                ],
                [
                    new Light(0, 3, false),
                    new Light(1, 3, true),
                    new Light(2, 3, null),
                    new Light(3, 3, false),
                    new Light(4, 3, true),
                    new Light(5, 3, null),
                    new Light(6, 3, true),
                    new Light(7, 3, false)
                ],
                [
                    new Light(0, 4, null),
                    new Light(1, 4, true),
                    new Light(2, 4, false),
                    new Light(3, 4, null),
                    new Light(4, 4, null),
                    new Light(5, 4, true),
                    new Light(6, 4, false),
                    new Light(7, 4, null)
                ],
                [
                    new Light(0, 5, true),
                    new Light(1, 5, null),
                    new Light(2, 5, true),
                    new Light(3, 5, false),
                    new Light(4, 5, true),
                    new Light(5, 5, null),
                    new Light(6, 5, false),
                    new Light(7, 5, true)
                ],
                [
                    new Light(0, 6, false),
                    new Light(1, 6, null),
                    new Light(2, 6, true),
                    new Light(3, 6, null),
                    new Light(4, 6, true),
                    new Light(5, 6, true),
                    new Light(6, 6, false),
                    new Light(7, 6, null)
                ],
                [
                    new Light(0, 7, true),
                    new Light(1, 7, false),
                    new Light(2, 7, null),
                    new Light(3, 7, true),
                    new Light(4, 7, false),
                    new Light(5, 7, null),
                    new Light(6, 7, true),
                    new Light(7, 7, false)
                ]
            ]

        ),

        new Level(
            30,
            'The Test',
            5,
            false,
            [
                [
                    new Light(0, 0, false),
                    new Light(1, 0, true),
                    new Light(2, 0, false),
                    new Light(3, 0, true),
                    new Light(4, 0, false),
                    new Light(5, 0, true),
                    new Light(6, 0, false),
                    new Light(7, 0, null),
                    new Light(8, 0, true)
                ],
                [
                    new Light(0, 1, false),
                    new Light(1, 1, false),
                    new Light(2, 1, false),
                    new Light(3, 1, false),
                    new Light(4, 1, true),
                    new Light(5, 1, true),
                    new Light(6, 1, true),
                    new Light(7, 1, false),
                    new Light(8, 1, true)
                ],
                [
                    new Light(0, 2, true),
                    new Light(1, 2, true),
                    new Light(2, 2, false),
                    new Light(3, 2, false),
                    new Light(4, 2, false),
                    new Light(5, 2, true),
                    new Light(6, 2, false),
                    new Light(7, 2, true),
                    new Light(8, 2, true)
                ],
                [
                    new Light(0, 3, false),
                    new Light(1, 3, true),
                    new Light(2, 3, true),
                    new Light(3, 3, false),
                    new Light(4, 3, true),
                    new Light(5, 3, false),
                    new Light(6, 3, false),
                    new Light(7, 3, true),
                    new Light(8, 3, false)
                ],
                [
                    new Light(0, 4, true),
                    new Light(1, 4, false),
                    new Light(2, 4, true),
                    new Light(3, 4, true),
                    new Light(4, 4, null),
                    new Light(5, 4, false),
                    new Light(6, 4, false),
                    new Light(7, 4, true),
                    new Light(8, 4, true)
                ],
                [
                    new Light(0, 5, true),
                    new Light(1, 5, true),
                    new Light(2, 5, true),
                    new Light(3, 5, false),
                    new Light(4, 5, true),
                    new Light(5, 5, true),
                    new Light(6, 5, true),
                    new Light(7, 5, false),
                    new Light(8, 5, true)
                ],
                [
                    new Light(0, 6, true),
                    new Light(1, 6, false),
                    new Light(2, 6, false),
                    new Light(3, 6, false),
                    new Light(4, 6, false),
                    new Light(5, 6, false),
                    new Light(6, 6, false),
                    new Light(7, 6, true),
                    new Light(8, 6, true)
                ],
                [
                    new Light(0, 7, true),
                    new Light(1, 7, false),
                    new Light(2, 7, true),
                    new Light(3, 7, false),
                    new Light(4, 7, false),
                    new Light(5, 7, true),
                    new Light(6, 7, false),
                    new Light(7, 7, false),
                    new Light(8, 7, true)
                ],
                [
                    new Light(0, 8, true),
                    new Light(1, 8, true),
                    new Light(2, 8, true),
                    new Light(3, 8, false),
                    new Light(4, 8, true),
                    new Light(5, 8, false),
                    new Light(6, 8, true),
                    new Light(7, 8, false),
                    new Light(8, 8, false)
                ]
            ]
        )
    ];

    getLevels(): Level[]
    {
        const levels = localStorage.getItem('basicLevels')

        if(levels !== null)
        {
            const parsedLevels = JSON.parse(levels)

            this.levels = parsedLevels.map((obj: any) => this.createLevelFromObject(obj));

            return this.levels;
        }

        else
            return this.levels;
    }

    getLevel(levelId: number): Level
    {
        const levels = this.getLevels()
        const level = levels.find(level => level.id === levelId)

        if(!level)
        {
            throw new Error('Level does not exist.')
        }

        return level;
    }

    saveLevels(level?: Level): void
    {
        let levels = this.getLevels()

        if(level)
        {
            const id = levels.findIndex(l => l.id === level.id);

            levels[id] = level;
        }

        localStorage.setItem('basicLevels', JSON.stringify(levels))
    }

    resetLevels(): void
    {
        localStorage.removeItem('basicLevels');
    }

    createLevelFromObject(obj: any): Level
    {
        return {
            id: obj.id,
            name: obj.name,
            difficulty: obj.difficulty,
            grid: obj.grid.map((row: any) => row.map((cell: any) => (
            {
                x: cell.x,
                y: cell.y,
                state: cell.state
            }))),
            completed: obj.completed
        };
    }

    isPuzzleCompleted(level: Level): boolean
    {
        for(let row of level.grid)
        {
            for(let light of row)
            {
                if(light.state === null)
                    continue;

                else if(light.state)
                    return false;
            }
        }

        return true;
    }
}