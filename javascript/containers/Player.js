import Kingdom from '../components/Kingdom.js';
import phaseHandlers from '../state/phaseHandlers.js';

export default ReactRedux.connect(
    (state) => {
        return {
            matrix: state.player,
            phaseHandler: phaseHandlers[state.phase[0]]
        };
    }
)(Kingdom);