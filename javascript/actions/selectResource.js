import { SET_PHASE } from '../types/actions.js';
import { CHOOSE_RESOURCE } from '../types/phases.js';
import getPhaseHandler from '../state/getPhaseHandler.js';

export default function selectResource() {
    return (dispatch, getState) => {
        dispatch({
            type: SET_PHASE,
            payload: CHOOSE_RESOURCE
        });

        return getPhaseHandler().promise
    }
}