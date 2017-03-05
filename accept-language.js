'use strict';

module.exports = function(language) {
    const languageList = language.split(",");
    return languageList[0];
};