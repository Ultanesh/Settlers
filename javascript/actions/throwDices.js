import { ALL_EVENTS, SUCCESSFUL_YEAR } from '../types/events.js';
import { ALL_RESOURCES } from '../types/resources.js';
import { SET_DICES } from '../types/actions.js';
import { APPLY_RESOURCE_INCOME } from '../types/phases.js';
import events from './events.js';
import setPhase from './setPhase.js';

function getEventPhases(dispatch, getState, event) {
    if (!events[event]) {
        console.warn(`unknown Event "${event}"`);
        return [];
    }

    return events[event](dispatch, getState) || [];
}

export default function throwDices() {
    return (dispatch, getState) => {
        const newResourceDiceResult = ALL_RESOURCES[Math.floor(Math.random() * 6)];
        const newEventDiceResult = ALL_EVENTS[Math.floor(Math.random() * 6)];

        dispatch({
            type: SET_DICES,
            payload: {
                resource: newResourceDiceResult,
                event: newEventDiceResult
            }
        });

        const eventPhases = getEventPhases(dispatch, getState, newEventDiceResult);
        dispatch(setPhase(eventPhases.concat(APPLY_RESOURCE_INCOME)));
    };
}