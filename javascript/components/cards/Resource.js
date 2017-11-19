import { SHEEP, ORE, WOOD, GOLD, CORN, BRICK } from '../../types/resources.js';

const typeClassMap = {
    [SHEEP]: 'sheep',
    [ORE]: 'ore',
    [WOOD]: 'wood',
    [GOLD]: 'gold',
    [CORN]: 'corn',
    [BRICK]: 'brick',
}

export default function Resource(props)  {
    return React.createElement('div', {
        onClick: props.onClick,
        className: classNames(props.className, 'card', typeClassMap[props.type]),
        children: [
            React.createElement('div', {
                className: 'wert',
                children: props.amount,
                key: 'amount'
            })
        ]
    });
}

