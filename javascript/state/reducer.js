import initialState from './initialState.js';
import { SET_DICES, SET_PHASE } from '../types/actions.js'
import handleMatrixAction from './handleMatrixAction.js';

export default function reducer(state = initialState, action) {
    if (action.type.indexOf('action:MATRIX:') === 0) {
        return handleMatrixAction(state, action);
    }

    switch(action.type) {
        case SET_DICES:
            return {
                ...state,
                resourceDiceResult: action.payload.resource,
                eventDiceResult: action.payload.event,
            }
        case SET_PHASE:
            return {
                ...state,
                phase: action.payload
            }
        default:
            return state;
    }
}