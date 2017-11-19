import { SHEEP, ORE, WOOD, GOLD, CORN, BRICK } from '../types/resources.js';
import { SPACE, ROAD, VILLAGE } from '../types/common.js';
import { WAIT_FOR_DICE_THROW } from '../types/phases.js';
export default {
    turn: 0,
    player: [
        [
            { type: SHEEP, amount: 1, number: 3 },
            { type: SPACE },
            { type: ORE, amount: 1, number: 4 },
            { type: SPACE },
            { type: WOOD, amount: 1, number: 1 }
        ],
        [
            { type: SPACE },
            { type: VILLAGE },
            { type: ROAD },
            { type: VILLAGE },
            { type: SPACE }
        ],
        [
            { type: GOLD, amount: 1, number: 2 },
            { type: SPACE },
            { type: CORN, amount: 1, number: 6 },
            { type: SPACE },
            { type: BRICK, amount: 1, number: 5 }
        ]
    ],
    meta: {
        totalResources: 6,
        maxResources: 18
    },
    resourceDiceResult: null,
    eventDiceResult: null,
    phase: WAIT_FOR_DICE_THROW
};