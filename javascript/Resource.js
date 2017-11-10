import {ONE, TWO, THREE, FOUR, FIVE, SIX} from './dice.js'
const diceclassmap={
    [ONE]:'one', [TWO]:'two', [THREE]:'three', [FOUR]:'four', [FIVE]:'five', [SIX]:'six'
}
export default class Resource {
    constructor(type,number,amount=0) {
        this.type=type
        this.number=number
        this.amount=amount
    }
    render() {
        return `<div class="card ${this.type}">
                    <div class="dice ${diceclassmap[this.number]}">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                    <div class="wert">
                        ${this.amount}
                    </div>
                </div>`
    }
}