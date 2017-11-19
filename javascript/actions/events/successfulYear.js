import { SET_RESOURCE_AMOUNT, SET_PHASE } from '../../types/actions.js';
import { WAIT_FOR_DICE_THROW } from '../../types/phases.js';
import selectResource from '../selectResource.js';

export default function successfulYearEvent() {
    return (dispatch, getState) => {
        const state = getState();

        if (state.meta.totalResources === state.meta.maxResources) {
            console.warn('maxed out on resources');
            return;
        }

        return dispatch(selectResource())
            .then((resource) => {
                dispatch({
                    type: SET_RESOURCE_AMOUNT,
                    payload: {
                        resource,
                        amount: resource.amount + 1
                    }
                });
                dispatch({
                    type: SET_PHASE,
                    payload: WAIT_FOR_DICE_THROW
                })
            })
    }
}