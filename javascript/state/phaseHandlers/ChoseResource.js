import { ALL_RESOURCES } from '../../types/resources.js';

export default class ChoseResource {
    constructor() {
        this.promise = new Promise((res) => {
            this._resolve = res;
        });
    }
    extendCard(card) {
        if (ALL_RESOURCES.includes(card.type) && card.amount < 3) {
            return {
                ...card,
                className: classNames(card.className, 'interactive'),
                onClick: () => {
                    this._resolve(card)
                }
            }
        }
        return card;
    }
}