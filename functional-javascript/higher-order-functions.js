module.exports = function repeat(func, num) {
    for (var i = 1; i <= num; i++) {
        func();
    }
}
