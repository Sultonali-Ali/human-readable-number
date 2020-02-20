module.exports = function toReadable (number) {

    const numbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven','eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty' ];
    const numbers2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    const numbers3 = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

    if (number <= 20) {
        return numbers1[number];
    }
    if (number < 100) {
        let str = '' + number;
        return `${ numbers2[+str[0] - 2] }${ str[1] === '0' ? '' : ' ' + numbers1[+str[1]] }`;
    }
    if (number) {
        let str = '' + number;
        if (number % 100 === 0) { return numbers3[+str[0] - 1] }
        return `${ numbers3[+str[0] - 1] }${ (+(str[1] + str[2])) <= 20 ? ' ' + numbers1[+(str[1]+str[2])] : str[1] === '0' ? '' : ' ' + numbers2[+str[1] - 2] }${ (+(str[1] + str[2])) <= 20 ? '' : str[2] === '0' ? '' : ' ' + numbers1[+str[2]] }`;
    }
};
