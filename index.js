exports.format = {
    phone: function (phone = '') {
        return phone.replace(/^(.{3}).*(.{4})$/, "$1****$2")
    }
};