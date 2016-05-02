function getShortMessages(messages) {
    return messages.filter(function(obj) {
        return obj.message.length < 50;
    }).map(function(value) {
        return value.message;
    })
}

module.exports = getShortMessages;
