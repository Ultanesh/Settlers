import phaseHandlers from '../state/phaseHandlers.js';
import { SET_PHASE } from '../types/actions.js';
import { WAIT_FOR_DICE_THROW } from '../types/phases.js';

export default function setPhase(somePhases = []) {
    return (dispatch, getState) => {
        const phases = somePhases.length ? somePhases : [WAIT_FOR_DICE_THROW];
        const nextPhase = phases[0];

        dispatch({
            type: SET_PHASE,
            payload: phases
        })

        if (phaseHandlers[nextPhase] && phaseHandlers[nextPhase].action) {
            dispatch(phaseHandlers[nextPhase].action());
        }
    }
}
