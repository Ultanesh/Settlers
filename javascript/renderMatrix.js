export default function renderMatrix(matrix) {
    let result = '';

    matrix.forEach((row) => {
        result += `<div class="cardgridresourcen">`;

        row.forEach((card) => {
            result += card.render();
        });

        result += `</div>`;
    });

    return result;
}