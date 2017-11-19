import ResourceDice from './containers/ResourceDice.js';
import EventDice from './containers/EventDice.js';
import Player from './containers/Player.js'

export default function Table() {
    return [
        React.createElement(ResourceDice, { key: 'resourceDice' }),
        React.createElement(EventDice, { key: 'eventDice' }),
        React.createElement(Player, { key: 'player' })
    ];
}