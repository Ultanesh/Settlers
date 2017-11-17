import Resource from './Resource.js'
import renderMatrix from './renderMatrix.js';
import {village, road, space} from './standardcards.js'
import {ONE, TWO, THREE, FOUR, FIVE, SIX, wuerfeln} from './dice.js'
import {SUCCESSFULYEAR, ROGUE, TOURNAMENT, TRADE, EVENT, wuerfeln as rollthedice} from './eventdice.js'

const dice = document.querySelector('#dice');
const spielfeld = document.querySelector('#spielfeld');
const matrix = [
    [new Resource('sheep', THREE), space, new Resource('wood', FOUR), space, new Resource('ore', FIVE)],
    [space, village, road, village, space],
    [new Resource('gold', SIX), space, new Resource('corn', ONE), space, new Resource('brick', TWO)],
]

spielfeld.innerHTML= renderMatrix(matrix);
dice.addEventListener('click', ()=>{
    const event=rollthedice()

    if (event === ROGUE) {
        let result = 0
        matrix.forEach((row)=>{
            row.forEach((card)=>{
                if (card instanceof Resource) {
                    result += card.amount;
                }
            })
        })
        if (result > 7) {
            matrix.forEach((row)=>{
                row.forEach((card)=>{
                    if (card.type === 'sheep' || card.type === 'ore') {
                        card.amount = 0
                    }
                })
            })
        }
    }


    const ergebnis=wuerfeln()
    matrix.forEach((row)=>{
        row.forEach((card)=>{
            if (card instanceof Resource && card.number === ergebnis && card.amount < 3){
                card.amount += 1
            }
        })
    })

    spielfeld.innerHTML= renderMatrix(matrix);
})
