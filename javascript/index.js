import Resource from './Resource.js'
import renderMatrix from './renderMatrix.js';
import {village, road, space} from './standardcards.js'
import {ONE, TWO, THREE, FOUR, FIVE, SIX, wuerfeln} from './dice.js'

const dice = document.querySelector('#dice');
const spielfeld = document.querySelector('#spielfeld');
const matrix = [
    [new Resource('sheep', THREE), space, new Resource('wood', FOUR), space, new Resource('ore', FIVE)],
    [space, village, road, village, space],
    [new Resource('gold', SIX), space, new Resource('corn', ONE), space, new Resource('brick', TWO)],
]

spielfeld.innerHTML= renderMatrix(matrix);
dice.addEventListener('click', ()=>{
    const ergebnis=wuerfeln()
    matrix.forEach((row)=>{
        row.forEach((card)=>{
            if (card instanceof Resource && card.number === ergebnis){
                card.amount += 1
            }
        })
    })
    spielfeld.innerHTML= renderMatrix(matrix);
})