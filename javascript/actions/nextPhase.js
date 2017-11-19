import setPhase from './setPhase.js';

export default function nextPhase() {
    return (dispatch, getState) => {
        dispatch(setPhase(getState().phase.slice(1)));
    }
}