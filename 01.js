function string10to64(number) {
    var chars = '0123456789abcdefghigklmnopqrstuvwxyzABCDEFGHIGKLMNOPQRSTUVWXYZ-~'.split(''),
        radix = chars.length,
        qutient = +number,
        arr = [];
    do {
        mod = qutient % radix;
        console.log(mod, qutient, radix);
        qutient = (qutient - mod) / radix;
        arr.unshift(chars[mod]);
    } while (qutient);
    return arr.join('');
}

const a = '4160'
console.log(string10to64(a)); // 110