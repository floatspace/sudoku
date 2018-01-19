/**
 * 生成数独解决方案
 */
const Toolkit = reqiure('./tookit');
class Generator {
    generate() {
        this.matrix = Toolkit.matrix.makeMatrix();
        for (var n = 0; n < 9; n++) {
            this.fillNum(n);
        }
    }

    fillNum(n) {
        this.fillRow(n, 0);
    }

    // 第rowIndex行中填写数字n
    fillRow(n, rowIndex) {

        // 边沿情况
        if (rowIndex > 8) {
            return true;
        }
        
        // 获取矩阵二维数组中当前行的数据
        const row = this.matrix[rowIndex];

        // 遍历row中的单元格
        for (let i = 0; i < 9; i++) {
            const colIndex = i;
            // 如果这个地方已经有值，跳过
            if (row[colIndex]) {
                continue;
            }
            // 检查这个位置是否可以填n
            // TODO Toolkit.matrix.checkFillable()
            if (!Toolkit.matrix.checkFillable()) {
                continue;
            }

            if (!this.fillRow(n, rowIndex + 1)) {
                row[colIndex] = 0;
                continue;
            }

            row[colIndex] = n;
            return true;
        }
        return false;

        // 当前行填写n成功，递归调用fillRow()来填写下一行
        this.fillRow(n, rowIndex + 1);
    }
}