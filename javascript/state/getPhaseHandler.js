import store from './configureStore.js';
import phaseHandlers from './phaseHandlers.js';

let currentPhase = null;
let handler = null;

export default function getPhaseHandler() {
    const phase = store.getState().phase;

    if (phase !== currentPhase) {
        currentPhase = phase;
        handler = null;

        if (phaseHandlers[phase]) {
            handler = new phaseHandlers[phase]();
        }
    }

    return handler;
}