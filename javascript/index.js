import Resource from './Resource.js'

const spielfeld = document.querySelector ('#spielfeld');
const matrix = [
    [new Resource('sheep', 'three'),new Resource('wood', 'three')]
]

function renderMatrix(matrix) {
    matrix[0][0].render();

    
}

spielfeld.innerHTML= renderMatrix(matrix);