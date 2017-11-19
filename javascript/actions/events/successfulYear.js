import { CHOOSE_RESOURCE } from '../../types/phases.js';

export default function successfulYearEvent(dispatch, getState) {
    const state = getState();

    if (state.meta.maxResources === state.meta.totalResources) {
        console.warn('maxed out on resources');
        return;
    }

    return [CHOOSE_RESOURCE];
}