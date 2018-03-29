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
/**
 * 数字转中文
 * @param currencyDigits
 * @returns {*}
 */
exports.convertCurrency = function (currencyDigits) {
// Constants:
    var MAXIMUM_NUMBER = 99999999999.99;
    // Predefine the radix characters and currency symbols for output:
    var CN_ZERO = "零";
    var CN_ONE = "壹";
    var CN_TWO = "贰";
    var CN_THREE = "叁";
    var CN_FOUR = "肆";
    var CN_FIVE = "伍";
    var CN_SIX = "陆";
    var CN_SEVEN = "柒";
    var CN_EIGHT = "捌";
    var CN_NINE = "玖";
    var CN_TEN = "拾";
    var CN_HUNDRED = "佰";
    var CN_THOUSAND = "仟";
    var CN_TEN_THOUSAND = "万";
    var CN_HUNDRED_MILLION = "亿";
    var CN_SYMBOL = "人民币";
    var CN_DOLLAR = "元";
    var CN_TEN_CENT = "角";
    var CN_CENT = "分";
    var CN_INTEGER = "整";

// Variables:
    var integral;    // Represent integral part of digit number.
    var decimal;    // Represent decimal part of digit number.
    var outputCharacters;    // The output result.
    var parts;
    var digits, radices, bigRadices, decimals;
    var zeroCount;
    var i, p, d;
    var quotient, modulus;

// Validate input string:
    currencyDigits = currencyDigits.toString();
    if (currencyDigits == "") {
        alert("请输入小写金额！");
        return "";
    }
    if (currencyDigits.match(/[^,.\d]/) != null) {
        alert("小写金额含有无效字符！");
        return "";
    }
    if ((currencyDigits).match(/^((\d{1,3}(,\d{3})*(.((\d{3},)*\d{1,3}))?)|(\d+(.\d+)?))$/) == null) {
        alert("小写金额的格式不正确！");
        return "";
    }

// Normalize the format of input digits:
    currencyDigits = currencyDigits.replace(/[,.]/g, "");    // Remove comma delimiters.
    currencyDigits = currencyDigits.replace(/^0+/, "");    // Trim zeros at the beginning.
    // Assert the number is not greater than the maximum number.
    if (Number(currencyDigits) > MAXIMUM_NUMBER) {
        alert("金额过大，应小于1000亿元！");
        return "";
    }

// Process the coversion from currency digits to characters:
    // Separate integral and decimal parts before processing coversion:
    parts = currencyDigits.split(".");
    if (parts.length > 1) {
        integral = parts[0];
        decimal = parts[1];
        // Cut down redundant decimal digits that are after the second.
        decimal = decimal.substr(0, 2);
    }
    else {
        integral = parts[0];
        decimal = "";
    }
    // Prepare the characters corresponding to the digits:
    digits = new Array(CN_ZERO, CN_ONE, CN_TWO, CN_THREE, CN_FOUR, CN_FIVE, CN_SIX, CN_SEVEN, CN_EIGHT, CN_NINE);
    radices = new Array("", CN_TEN, CN_HUNDRED, CN_THOUSAND);
    bigRadices = new Array("", CN_TEN_THOUSAND, CN_HUNDRED_MILLION);
    decimals = new Array(CN_TEN_CENT, CN_CENT);
    // Start processing:
    outputCharacters = "";
    // Process integral part if it is larger than 0:
    if (Number(integral) > 0) {
        zeroCount = 0;
        for (i = 0; i < integral.length; i++) {
            p = integral.length - i - 1;
            d = integral.substr(i, 1);
            quotient = p / 4;
            modulus = p % 4;
            if (d == "0") {
                zeroCount++;
            }
            else {
                if (zeroCount > 0)
                {
                    outputCharacters += digits[0];
                }
                zeroCount = 0;
                outputCharacters += digits[Number(d)] + radices[modulus];
            }
            if (modulus == 0 && zeroCount < 4) {
                outputCharacters += bigRadices[quotient];
                zeroCount = 0;
            }
        }
        outputCharacters += CN_DOLLAR;
    }
    // Process decimal part if there is:
    if (decimal != "") {
        for (i = 0; i < decimal.length; i++) {
            d = decimal.substr(i, 1);
            if (d != "0") {
                outputCharacters += digits[Number(d)] + decimals[i];
            }
        }
    }
    // Confirm and return the final output string:
    if (outputCharacters == "") {
        outputCharacters = CN_ZERO + CN_DOLLAR;
    }
    if (decimal == "") {
        outputCharacters += CN_INTEGER;
    }
    outputCharacters = outputCharacters;
    return outputCharacters;
}
