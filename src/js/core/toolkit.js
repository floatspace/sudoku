/**
 * 生成矩阵及矩阵洗牌算法
 */
const matrix = {
    makeRow: function (v = 0) {
        const array = new Array(9);
        array.fill(v);
        return array;
    },

    makeMatrix: function (v = 0) {
        return Array.from({
            length: 9
        }).map(() => this.makeRow(v));
    },

    /*
     * 洗牌算法-shuffle
     * @param array [Array]
     */
    shuffle: function (array) {
        const endIndex = array.length - 2;
        for (let i = 0; i <= endIndex; i++) {
            const randomIndex = i + Math.floor(Math.random() * (array.length - i));
            [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
        }
        return array;
    },
    // TODO检查是否可以填写
    checkFillable: function() {
        return true;
    }
}

module.exports = {
    matrix: matrix
};