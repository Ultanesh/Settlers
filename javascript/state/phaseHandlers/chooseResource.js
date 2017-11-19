import { ALL_RESOURCES } from '../../types/resources.js';
import store from '../configureStore.js';
import { SET_RESOURCE_AMOUNT } from '../../types/actions.js';
import nextPhase from '../../actions/nextPhase.js';

export default {
    extendCard(card) {
        if (ALL_RESOURCES.includes(card.type) && card.amount < 3) {
            return {
                ...card,
                className: classNames(card.className, 'interactive'),
                onClick: () => {
                    store.dispatch({
                        type: SET_RESOURCE_AMOUNT,
                        payload: {
                            resource: card,
                            amount: card.amount + 1
                        }
                    });
                    store.dispatch(nextPhase());
                }
            }
        }

        return card;
    }
}