const BAD_WORDS = require('./bad_words_list');

const hasBadWords = (title, message) => {
    for (let i = 0; i < BAD_WORDS.length; i++) {
        if (title.includes(BAD_WORDS[i]) || message.includes(BAD_WORDS[i])) {
            return true;
        }
    }

    return false;
};

module.exports = hasBadWords;