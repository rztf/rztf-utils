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
/**
 * 格式化人民币显示
 * @param number 金额，单位分
 * @param option
 * @returns {string}
 */
exports.currency = function (number, option={}) {
    const {fixed = 2, splitStr = ",", splitNum = 3} = option;
    let num = +number / 100;
    let [int, float] = `${num.toFixed(fixed)}`.split(".");
    let isAdd = 1;
    return `${int.split("").reduceRight((a, b, i) => {
        if (isAdd === splitNum && i) {
            isAdd = 1;
            return `${splitStr}${b}${a}`
        } else {
            isAdd++;
            return `${b}${a}`
        }
    }, "")}${fixed ? "." : ""}${float || ""}`
};
/**
 * 去除首尾空格
 * @param string
 * @returns {*|void|XML}
 */
exports.trim = (string) => {
    return string.replace(/^\s*|\s*$/g, "");
};
