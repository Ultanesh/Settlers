export const ONE=Symbol('ONE')
export const TWO=Symbol('TWO')
export const THREE=Symbol('THREE')
export const FOUR=Symbol('FOUR')
export const FIVE=Symbol('FIVE')
export const SIX=Symbol('SIX')
const numbers=[
    ONE, TWO, THREE, FOUR, FIVE, SIX
]
export function wuerfeln(){
    return numbers[Math.floor(Math.random() * 6)]; 
}