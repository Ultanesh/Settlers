export function forEach(matrix, callback) {
    matrix.forEach((row)=>{
        row.forEach((card)=>{
            callback(card)
        })
    })
}

export function map(matrix, callback) {
    return matrix.map((row) => {
        return row.map((card) => {
            return callback(card);
        })
    })
}

export function reduce(matrix, callback, initialValue) {
    return matrix.reduce((memo, row) => {
        return row.reduce((memo2, card) => {
            return callback(memo2, card);
        }, memo)
    }, initialValue)
}
