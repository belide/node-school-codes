function doubleAll(numbers) {
    var doubled = numbers.map(function(value) {
        return value * 2;
    });
    return doubled;
}

module.exports = doubleAll;
