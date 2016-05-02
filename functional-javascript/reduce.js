module.exports = function countWords(inputWords) {
    return inputWords.reduce(function (obj, curr) {
        if (obj.hasOwnProperty(curr)) {
            obj[curr] += 1;
        } else {
            obj[curr] = 1;
        }

        // obj[curr] = ++obj[curr] || 1;
        return obj;
    }, {});
};
