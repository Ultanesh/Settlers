import cards from './cards.js';

export default function Kingdom({ matrix, phaseHandler }) {
    return matrix.map((row, rowI) => {
        return React.createElement(
            'div',
            {
                style: {
                    gridTemplateColumns: `repeat(${row.length}, 200px)`
                },
                className: 'cardGrid',
                key: rowI,
                children: row.map((someCard, i) => {
                    const card = phaseHandler && phaseHandler.extendCard
                        ? phaseHandler.extendCard(someCard)
                        : someCard;

                    return React.createElement(
                        cards[card.type],
                        {
                            ...card,
                            key: i,
                        }
                    );
                }),
            }
        )
    })
}