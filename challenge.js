//#region Nomor 1
function changeWord(selectedText, changedText, text) {
    const searchMask = new RegExp(selectedText, "ig");
    return text.replace(searchMask, changedText);
}

const kalimat1 = 'Andini sangat mencintai kamu selamanya';
const kalimat2 = 'Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu';

console.log(`\u001b[${32}m \nNomor 1\u001b[0m`);
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
console.log(`\u001b[${32}m \nNomor 2\u001b[0m`);
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
console.log(`\u001b[${32}m \nNomor 3\u001b[0m`);
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
console.log(`\u001b[${32}m \nNomor 4\u001b[0m`);
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

console.log(`\u001b[${32}m \nNomor 5\u001b[0m`);
console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma"));
console.log(getSplitName(0));
//#endregion

//#region Nomor 6
console.log(`\u001b[${32}m \nNomor 6\u001b[0m`);

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
const dataPenjualanPakAldi = [
    {
        namaProduct: 'Sepatu Futsal Nike Vapor Academy 8',
        hargaSatuan: 760000,
        kategori: "Sepatu Sport",
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Black Brown High',
        hargaSatuan: 960000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 37,
    },
    {
        namaProduct: 'Sepatu Warrior Tristan Maroon High ',
        kategori: "Sepatu Sneaker",
        hargaSatuan: 360000,
        totalTerjual: 90,
    },
    {
        namaProduct: 'Sepatu Warrior Rainbow Tosca Corduroy',
        hargaSatuan: 120000,
        kategori: "Sepatu Sneaker",
        totalTerjual: 90,
    }
]
function hitungTotalPenjualan(dataPenjualan) {
    try {
        if (dataPenjualan === undefined) throw "Error: No arguments passed to function.";
        if (!Array.isArray(dataPenjualan)) throw "Error: Invalid argument. Array required.";

        return dataPenjualan.reduce((acc, curr) => acc + curr.totalTerjual, 0);
    }
    catch (error) {
        return error;
    }
}
console.log(`\u001b[${32}m \nNomor 7\u001b[0m`);
console.log(hitungTotalPenjualan(dataPenjualanPakAldi));
//#endregion

//#region Nomor 8
const dataPenjualanNovel = [
    {
        idProduct: 'BOOK002421',
        namaProduk: 'Pulang - Pergi',
        penulis: 'Tere Liye',
        hargaBeli: 60000,
        hargaJual: 86000,
        totalTerjual: 150,
        sisaStok: 17,
    },
    {
        idProduct: 'BOOK002351',
        namaProduk: 'Selamat Tinggal',
        penulis: 'Tere Liye',
        hargaBeli: 75000,
        hargaJual: 103000,
        totalTerjual: 171,
        sisaStok: 20,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Garis Waktu',
        penulis: 'Fiersa Besari',
        hargaBeli: 67000,
        hargaJual: 99000,
        totalTerjual: 213,
        sisaStok: 5,
    },
    {
        idProduct: 'BOOK002941',
        namaProduk: 'Laskar Pelangi',
        penulis: 'Andrea Hirata',
        hargaBeli: 55000,
        hargaJual: 68000,
        totalTerjual: 20,
        sisaStok: 56,
    },
];

//Saya masukkan ke dalam satu function semua kode nya karena di soal disuruh begitu
function getInfoPenjualan(dataPenjualan) {
    try {
        if (dataPenjualan === undefined) throw "Error: No arguments passed to function.";
        if (!Array.isArray(dataPenjualan)) throw "Error: Invalid argument. Array required.";

        const profit = dataPenjualan.reduce((acc, curr) => acc +
            (curr.hargaJual * curr.totalTerjual - curr.hargaBeli * curr.totalTerjual), 0);
        const modal = dataPenjualan.reduce((acc, curr) => acc +
            curr.hargaBeli * (curr.sisaStok + curr.totalTerjual), 0);
        const maxSaleCount = Math.max(...dataPenjualan.map(item => item.totalTerjual));
        const bestSeller = dataPenjualan.filter(item =>
            item.totalTerjual === maxSaleCount).map(item => item.namaProduk);

        const writerArray = dataPenjualan.map(item => item.penulis).filter((item, index, arr) =>
            arr.indexOf(item) === index);
        const salesByWriters = writerArray.reduce((acc, curr) =>
        (acc[curr] = dataPenjualan.map(item => item.penulis == curr ? item.totalTerjual : null)
            .reduce(((acc, curr) => acc + curr), 0), acc), {});

        const bestWriter = Object.keys(salesByWriters)
            .find(item => salesByWriters[item] === Math.max(...Object.values(salesByWriters)));

        function formatRupiah(number) {
            let arr = number.toString().split('');
            const len = arr.length;
            let j = 0;
            for (i = len - 1; i > 0; i--) {
                j++;
                if (j === 3) {
                    arr.splice(i, 0, '.');
                    j = 0;
                };
            }
            arr.unshift("Rp. ");
            return arr.join("");
        }

        const formatPercentage = number => `${number.toFixed(1)}%`;

        return {
            totalKeuntungan: formatRupiah(profit),
            totalModal: formatRupiah(modal),
            presentaseKeuntungan: formatPercentage(profit / modal * 100),
            produkBukuTerlaris: bestSeller.toString(),
            penulisTerlaris: bestWriter
        };
    }
    catch (error) {
        return error;
    }
}
console.log(`\u001b[${32}m \nNomor 8\u001b[0m`);
console.log(getInfoPenjualan(dataPenjualanNovel));
//#endregion