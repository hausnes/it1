function printTotalLength(string1, string2) {
    length = string1.length + string2.length;
    //console.log(length);
    return length;
}

let apiKey = "1234567890";

exports.printTotalLength = printTotalLength;
exports.apiKey = apiKey;