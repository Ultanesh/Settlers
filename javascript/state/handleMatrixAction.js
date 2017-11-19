import cardActionsHandlers from './cardActionsHandlers.js';
import { map, reduce } from '../helpers/matrix.js';
import { ALL_RESOURCES } from '../types/resources.js';

export default function handleMatrixAction(state, action) {
    let changed = false;
    const newMatrix = map(state.player, (card) => {
        if (cardActionsHandlers[card.type]) {
            const result = cardActionsHandlers[card.type](card, action);
            
            if (result !== card) {
                changed = true;
            }

            return result;
        }

        return card;
    });            

    if (changed) {
        const meta = reduce(newMatrix, (t, card) => {
            if (ALL_RESOURCES.indexOf(card.type) !== -1) {
                return {
                    maxResources: t.maxResources + 3,
                    totalResources: t.totalResources + card.amount
                };
            }

            return t;
        }, {
            totalResources: 0,
            maxResources: 0
        });

        return {
            ...state,
            meta,
            player: newMatrix
        }
    }

    return state;
}