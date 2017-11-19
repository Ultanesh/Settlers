import { STEAL_ORE_AND_SHEEP } from '../../types/actions.js';

export default function rogueEvent() {
    return (dispatch, getState) => {
        if (getState().meta.totalResources > 7) {
            dispatch({
                type: STEAL_ORE_AND_SHEEP
            });
        }
    }
}