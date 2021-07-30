const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateTwitterInput(data) {
    let errors = {};

    data.username = validText(data.username) ? data.username : '';
    data.filter = validText(data.filter) ? data.filter : '';

    if (Validator.isEmpty(data.username)) {
        errors.username = 'A twitter username is required';
    }

    if (data.username.split(' ').length > 1) {
        errors.username = 'Username must be one word';
    }

    return {
        errors,
        isValid: Object.keys(errors).length === 0
    };
};