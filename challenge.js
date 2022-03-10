//#region Nomor 1
function changeWord(selectedText, changedText, text) {
    let searchMask = new RegExp(selectedText, "ig");
    return text.replace(searchMask, changedText);
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log('\u001b[' + 32 + 'm' + '\nNomor 1' + '\u001b[0m');
console.log(changeWord('mencintai', 'membenci', kalimat1));
console.log(changeWord('bromo', 'semeru', kalimat2));
//#endregion

//#region Nomor 2
const checkTypeNumber = givenNumber => {
    try {
        if (!givenNumber) throw "Error: Bro where is the parameter?";
        if (!Number.isInteger(givenNumber)) throw "Error: Invalid data type";
        return givenNumber % 2 === 0 ? "GENAP" : "GANJIL";
    }
    catch (error) {
        return error;
    }
}
console.log('\u001b[' + 32 + 'm' + '\nNomor 2' + '\u001b[0m');
console.log(checkTypeNumber(10));
console.log(checkTypeNumber(3));
console.log(checkTypeNumber("3"));
console.log(checkTypeNumber({}));
console.log(checkTypeNumber([]));
console.log(checkTypeNumber());
//#endregion

//#region Nomor 3
function checkEmail(email) {
    var regEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    try {
        if (!email) throw "Error: Error: No arguments passed to function.";
        if (typeof (email) !== "string") throw "Error: Invalid data type";
        if (!email.includes("@")) throw "Error: '@' Symbol not found";
        return regEmail.test(email) ? "VALID" : "INVALID";
    }
    catch (error) {
        return error;
    }
}
console.log('\u001b[' + 32 + 'm' + '\nNomor 3' + '\u001b[0m');
console.log(checkEmail('apranata@binar.co.id'));
console.log(checkEmail('apranata@binar.com'));
console.log(checkEmail('apranata@binar'));
console.log(checkEmail('apranata'));
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail());
//#endregion

//#region Nomor 4
function isValidPassword(givenPassword) {
    try {
        if (givenPassword == undefined) throw "Error: No arguments passed to function.";
        if (typeof (givenPassword) !== "string") throw "Error: Invalid argument. String required";

        const uppercaseCheck = givenPassword.toUpperCase();
        const lowercaseCheck = givenPassword.toLowerCase();
        let hasLowercase = false;
        let hasUppercase = false;
        let hasNumeric = false;

        for (var i = 0; i < givenPassword.length; i++) {
            if (!isNaN(parseInt(givenPassword[i]))) {
                hasNumeric = true;
                continue;
            }
            if (givenPassword[i] == lowercaseCheck[i]) hasLowercase = true;
            if (givenPassword[i] == uppercaseCheck[i]) hasUppercase = true;
        }
        return givenPassword.length >= 8 && hasUppercase && hasLowercase && hasNumeric;
    }
    catch (error) {
        return error;
    }
}
console.log('\u001b[' + 32 + 'm' + '\nNomor 4' + '\u001b[0m');
console.log(isValidPassword('Meong2021'));
console.log(isValidPassword('meong2021'));
console.log(isValidPassword('@eong'));
console.log(isValidPassword('Meong2'));
console.log(isValidPassword(0));
console.log(isValidPassword());
//#endregion

//#region Nomor 5
function getSplitName(personName) {
    try {
        if (personName === undefined) throw "Error: No arguments passed to function.";
        if (typeof (personName) !== "string") throw "Error: Invalid argument. String required.";
        const nameArray = personName.split(" ");
        if (nameArray.length > 3) throw "Error: This function is only for 3 character name";

        const keysArray = ["firstName", "middleName", "lastName"];
        return keysArray.reduce((acc, curr, index) =>
            (acc[curr] = nameArray[index] ? nameArray[index] : null, acc), {});
    }
    catch (error) {
        return error;
    }
}

console.log('\u001b[' + 32 + 'm' + '\nNomor 5' + '\u001b[0m');
console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
//#endregion

//#region Nomor 6
console.log('\u001b[' + 32 + 'm' + '\nNomor 6' + '\u001b[0m');

function getAngkaTerbesarKedua(dataNumbers) {
    try {
        if (dataNumbers === undefined) throw "Error: No arguments passed to function.";
        if (!Array.isArray(dataNumbers)) throw "Error: Invalid argument. Array required.";

        let max = Math.max(...dataNumbers);
        const tempArr = dataNumbers.map(num => num === max ? -Infinity : num);

        return Math.max(...tempArr);
    }
    catch (error) {
        return error;
    }
}
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];

console.log(getAngkaTerbesarKedua(dataAngka));
console.log(getAngkaTerbesarKedua(0));
console.log(getAngkaTerbesarKedua());
//#endregion

//#region Nomor 7

//#endregion