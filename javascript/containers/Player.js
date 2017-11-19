import Kingdom from '../components/Kingdom.js';
import getPhaseHandler from '../state/getPhaseHandler.js';

export default ReactRedux.connect(
    (state) => {
        return {
            matrix: state.player,
            phaseHandler: getPhaseHandler()
        };
    }
)(Kingdom);