export const SUCCESSFULYEAR=Symbol('Ertragreiches Jahr')
export const ROGUE=Symbol('Räuber')
export const TOURNAMENT=Symbol('Turnier')
export const TRADE=Symbol('Handelsmacht')
export const EVENT=Symbol('Ereignis')

const numbers=[
    SUCCESSFULYEAR, ROGUE, TOURNAMENT, TRADE, EVENT, EVENT
]
export function wuerfeln(){
    return numbers[Math.floor(Math.random() * 6)]; 
}