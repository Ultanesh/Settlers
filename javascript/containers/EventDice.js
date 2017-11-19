import throwDices from '../actions/throwDices.js';
import { WAIT_FOR_DICE_THROW } from '../types/phases.js'

export default ReactRedux.connect(
    (state) => {
        return {
            event: state.eventDiceResult,
            disabled: state.phase !== WAIT_FOR_DICE_THROW
        };
    },
    { onClick: throwDices }
)(({ event, onClick, disabled }) => {
    return React.createElement('button', {
        onClick,
        disabled,
        children: (event || '').toString()
    });
});