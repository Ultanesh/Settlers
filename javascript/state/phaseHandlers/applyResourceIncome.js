import { ADD_RESOURCE_INCOME } from '../../types/actions.js';
import nextPhase from '../../actions/nextPhase.js';

export default {
    action() {
        return (dispatch, getState) => {
            dispatch({
                type: ADD_RESOURCE_INCOME,
                payload: getState().resourceDiceResult
            });
            dispatch(nextPhase());
        }
    }
}