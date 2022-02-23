
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == undefined) {
        return []
    }

    matrix.reduce((pre, cur, i) => {
        cur.sort((a, b) => !(i & 1) ? a - b : b - a).map(element => pre.push(element));
        return pre;
    }, []);

    return [].concat(...matrix);
}
