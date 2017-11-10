import Resource from './Resource.js'
import renderMatrix from './renderMatrix.js';

const spielfeld = document.querySelector ('#spielfeld');
const matrix = [
    [new Resource('sheep', 'three'), new Resource('wood', 'three')],
]

spielfeld.innerHTML= renderMatrix(matrix);