// 手机号
exports.phoneReg = /^1\d{10}$/;
// URL
exports.urlReg = /^(http|https):\/\/(\w*\.)(\w*).[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/;
// 邮编
exports.postCodeReg = /^[1-9][0-9]{5}$/;
// 身份证号码
exports.idCardReg = /^[1-9]\d{5}(18|19|20)\d{2}((0[1-9])|(1[0-2]))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
// IP
exports.IPReg = /((?:(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d)\\.){3}(?:25[0-5]|2[0-4]\\d|[01]?\\d?\\d))/;
// 检测是否全部是中文字符
exports.chineseReg = /^[\u4e00-\u9fa5]{0,}$/;
// 英文和数字
exports.numberOrEnglishReg = /^[A-Za-z0-9]+$/;
