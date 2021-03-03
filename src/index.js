module.exports = function toReadable (number) {
    units1 = ['one','two','three','four','five','six','seven','eight','nine'];
    units2 = ['eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    units3 = ['ten','twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
    let num = number;
    if (num === 0) {
        return 'zero';
    }
    let result = '';
    let div = num % 100;
    if ((div > 10) && (div < 20)) {
        pos = div % 10;
        result = units2[pos-1]  + ' ' + result;
        num -= div;
    }
    div = num % 10;
    if (div > 0) {
        result = units1[div-1]  + ' ' + result;
        num -= div;
    }
    num = Math.floor(num / 10);
    div = num % 10;
    if (div > 0) {
        result = units3[div-1]  + ' ' + result;
        num -= div;
    }
    num = Math.floor(num / 10);
    div = num % 10;
    if (div > 0) {
        result = units1[div-1] + ' hundred ' + result;
        num -= div;
    }
    result = result.replace(/\s+/g, ' ').trim();
    return result;
}
