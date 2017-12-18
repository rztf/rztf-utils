exports.phoneReg = /^1\d{10}$/; // test phone number
exports.urlReg = /^(http|https):\/\/(\w*\.)(\w*).[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"\"])*$/; // test url
exports.postCodeReg = /^[1-9][0-9]{5}$/; // postcode
exports.idCardReg = /(^\d{18}$)|(^\d{17}(\d|X|x)$)/;// person id number