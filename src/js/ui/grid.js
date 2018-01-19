/**
 * 生成九宫格方法
 */
var Toolkit = require('../core/toolkit.js');


class Grid {
    constructor($id) {
        this._$content = $id;
    }
    
    build() {
        const matrix = Toolkit.matrix.makeMatrix();

        const rowClasses = ['row-g-top', 'row-g-middle', 'row-g-bottom'];
        const cellClasses = ['cell-g-left', 'cell-g-middle', 'cell-g-right'];

        let $cells = matrix.map(rows =>
            rows.map((cells, cellIndex) => {
                return $('<span>')
                    .addClass('grid-cell')
                    .addClass(cellClasses[cellIndex % 3])
                    .text(cells);
            })
        );

        let $divs = $cells.map((rowArrays, rowIndex) => {
            return $('<div>')
                .addClass('grid-row')
                .addClass(rowClasses[rowIndex % 3])
                .append(rowArrays);
        });
        this._$content.append($divs);
        return this;
    }

    layout() {
        const _width = $('.grid-cell').width();
        $('.grid-cell').css({
            'height': _width,
            'line-height': `${_width}px`
        })
    }
}
 module.exports = Grid;