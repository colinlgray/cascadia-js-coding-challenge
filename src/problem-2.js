// Translations
const baseNumbersToEnglish = {
    "1": "one",
    "2": "two",
    "3": "three",
    "4": "four",
    "5": "five",
    "6": "six",
    "7": "seven",
    "8": "eight",
    "9": "nine",
    "10": "ten",
    "11": "eleven",
    "12": "twelve",
    "13": "thrirteen",
    "14": "fourteen",
    "15": "fifteen",
    "16": "sixteen",
    "17": "seventeen",
    "18": "eighteen",
    "19": "nineteen"
  },
  tenthPlaceToEnglish = {
    "2": "twenty",
    "3": "thirty",
    "4": "forty",
    "5": "fifty",
    "6": "sixty",
    "7": "seventy",
    "8": "eighty",
    "9": "ninety"
  };

const convertSingleGroup = num => {
  let str = "";
  if (num > 99) {
    let hundredthPlace = parseInt(num / 100);
    str += `${baseNumbersToEnglish[hundredthPlace]} hundred `;
    num -= hundredthPlace * 100;
  }
  if (num > 19) {
    let tenthPlace = parseInt(num / 10);
    num -= tenthPlace * 10;
    let spacer = " ";
    if (num > 0) {
      spacer = "-";
    }
    str += `and ${tenthPlaceToEnglish[tenthPlace]}${spacer}`;
  }
  if (num > 0) {
    str += `${baseNumbersToEnglish[num]}`;
  }
  return str;
};

const numberInWords = num => {
  let str = "",
    stringSets = [];

  if (num === 0) {
    return "Zero";
  }

  num = num * 100;
  const floating = num % 100;
  num = parseInt(num / 100);

  if (num >= 1000000) {
    let millionthPlace = parseInt(num / 1000000);
    stringSets.push(convertSingleGroup(millionthPlace) + " million");
    num -= millionthPlace * 1000000;
  }
  if (num >= 1000) {
    let thousandthPlace = parseInt(num / 1000);
    stringSets.push(convertSingleGroup(thousandthPlace) + " thousand");
    num -= thousandthPlace * 1000;
  }
  if (num > 0) {
    stringSets.push(convertSingleGroup(num));
  }

  str = stringSets.join(", ");
  str = `${str.substr(0, 1).toUpperCase()}${str.substr(1)}`.trim();
  if (floating > 0) {
    str = `${str} and ${floating}/100`;
  }
  return str;
};

module.exports = numberInWords;
