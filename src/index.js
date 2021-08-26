// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (typeof matrix == "undefined" || matrix.length < 1) {
        return 0;
    }
    let arr = [];

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            let columnIdx = i % 2 === 0 ? j : matrix[i].length - j - 1;
            arr.concat(matrix[i][columnIdx]);
        }
    }
    return [];
};