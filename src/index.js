module.exports = function toReadable(number) {
    const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',]
    const numbers10 = ['ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety',]
    const numbers1 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen',]

    const arrNum = number.toString().split('');

    if (number === 0) {
        return 'zero';
    } else if (number <= 19) {
        return numbers[number - 1];
    }
    else if (number >= 20 && number <= 99) {
        if (arrNum[1] == 0) {
            return numbers10[arrNum[0] - 1];

        } else return numbers10[arrNum[0] - 1] + ' ' + numbers[arrNum[1] - 1];

    }
    else if (number >= 100 && number <= 999) {

        if (arrNum[1] == 0 && arrNum[2] == 0) {
            return numbers[arrNum[0] - 1] + ' ' + 'hundred';

        } else if (arrNum[2] == 0) {
            return numbers[arrNum[0] - 1] + ' ' + 'hundred' + ' ' + numbers10[arrNum[1] - 1];

        } else if (arrNum[1] == 0) {
            return numbers[arrNum[0] - 1] + ' ' + 'hundred' + ' ' + numbers[arrNum[2] - 1];

        } else if (arrNum[1] == 1) {
            return numbers[arrNum[0] - 1] + ' ' + 'hundred' + ' ' + numbers1[arrNum[2]];

        } else return numbers[arrNum[0] - 1] + ' ' + 'hundred' + ' ' + numbers10[arrNum[1] - 1] + ' ' + numbers[arrNum[2] - 1];
    }
}

