/**
 * use * to replace the Numbers between start and end
 * @param phone
 * @param start
 * @param end
 * @returns {string}
 */
exports.phoneHide = function(phone = '', start = 3, end = 4) {
    const reg = new RegExp('^(.{'+ start +'}).*(.{'+ end +'})$');
    const format = `$1${new Array(11 - start - end + 1).join("*")}$2`;
    return ('' + phone).replace(reg, format)
};