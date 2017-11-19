import throwDices from '../actions/throwDices.js';
import { WAIT_FOR_DICE_THROW } from '../types/phases.js'

export default ReactRedux.connect(
    (state) => {
        return {
            resource: state.resourceDiceResult,
            disabled: state.phase !== WAIT_FOR_DICE_THROW
        };
    },
    { onClick: throwDices }
)(({ resource, onClick, disabled }) => {
    return React.createElement('button', {
        onClick,
        disabled,
        children: (resource || 'throw dices').toString()
    });
});