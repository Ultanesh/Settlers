import Resource from './Resource.js'

export default function foreachresource(matrix,callback) {
    matrix.forEach((row)=>{
        row.forEach((card)=>{
            if (card instanceof Resource) {
                callback(card)
            }
        })
    })
}