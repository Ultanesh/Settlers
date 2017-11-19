import throwDices from '../actions/throwDices.js';
import { WAIT_FOR_DICE_THROW } from '../types/phases.js'
import Button from '../components/Button.js';

export default ReactRedux.connect(
    (state) => {
        return {
            children: (state.eventDiceResult || 'throw dices').toString(),
            disabled: state.phase[0] !== WAIT_FOR_DICE_THROW
        };
    },
    { onClick: throwDices }
)(Button);