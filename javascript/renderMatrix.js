export default function renderMatrix(matrix) {
    let result = '';

    matrix.forEach((row) => {
        result += `<div style="grid-template-columns: repeat(${row.length}, 200px)" class="cardgrid">`;

        row.forEach((card) => {
            result += card.render();
        });

        result += `</div>`;
    });

    return result;
}