import { ALL_EVENTS, SUCCESSFUL_YEAR } from '../types/events.js';
import { ALL_RESOURCES } from '../types/resources.js';
import { SET_DICES } from '../types/actions.js';
import addResourceIncome from './addResourceIncome.js';
import events from './events.js';

function handleEvent(dispatch, event) {
    if (!events[event]) {
        console.warn(`unknown Event "${event}"`);
        return Promise.resolve();
    }

    return Promise.resolve(dispatch(events[event]()));
}

export default function throwDices() {
    return (dispatch) => {
        const newResourceDiceResult = ALL_RESOURCES[Math.floor(Math.random() * 6)];
        const newEventDiceResult = ALL_EVENTS[Math.floor(Math.random() * 6)];

        dispatch({
            type: SET_DICES,
            payload: {
                resource: newResourceDiceResult,
                event: newEventDiceResult
            }
        });

        handleEvent(dispatch, newEventDiceResult)
            .then(() => {
                dispatch(addResourceIncome(newResourceDiceResult));
            });
    };
}