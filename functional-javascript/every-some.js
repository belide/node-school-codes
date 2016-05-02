function checkUsersValid(goodUsers) {
    return function allUsersValid(submittedUsers) {
        return submittedUsers.every(function(user) {
            return goodUsers.indexOf(user) >= 0;
        });
    };
}

module.exports = checkUsersValid;
