/* 1. Bikin 5 object masing masing minimal ada:
    - 2 property string
    - 2 property number
    - 1 property object lain
    - 1 property array */

const binatang = [

    kucing = {
        inggris: 'Cat',
        ilmiah: 'Felis silvestris catus',
        subSpesies: 38,
        periodeGestasiDalamHari: 65,
        klasifikasi: {
            kingdom: 'animalia',
            phylum: 'chordata',
            class: 'mamalia',
            order: 'carnivora',
            family: 'felidae',
            genus: 'felis',
            species: 'catus'
        },
        ras: ['Kucing Persia', 'Kucing Anggora', 'Kucing Siam']
    },

    harimau = {
        inggris: 'Tiger',
        ilmiah: 'Panthera Tigris',
        subSpesies: 9,
        periodeGestasiDalamHari: 112,
        klasifikasi: {
            kingdom: 'animalia',
            phylum: 'chordata',
            class: 'mamalia',
            order: 'carnivora',
            family: 'felidae',
            genus: 'panthera',
            species: 'tigris',
        },
        ras: ['Harimau Sumatera', 'Harimau Malaya', 'Harimau Siberia']
    },

    singa = {
        inggris: 'Lion',
        ilmiah: 'Panthera Leo',
        subSpesies: 7,
        periodeGestasiDalamHari: 120,
        klasifikasi: {
            kingdom: 'animalia',
            phylum: 'chordata',
            class: 'mamalia',
            order: 'carnivora',
            family: 'felidae',
            genus: 'panthera',
            species: 'leo'
        },
        ras: ['Singa Barbary', 'Singa Katanga', 'Singa Kongo']
    },

    citah = {
        inggris: 'Cheetah',
        ilmiah: 'Acinonyx jubatus',
        subSpesies: 4,
        periodeGestasiDalamHari: 95,
        klasifikasi: {
            kingdom: 'animalia',
            phylum: 'chordata',
            class: 'mamalia',
            order: 'carnivora',
            family: 'felidae',
            genus: 'acinonyx',
            species: 'jubatus'
        },
        ras: ['Citah Asia', 'Citah Afrika Barat Laut', 'Citah Afrika Selatan']
    },

    jaguar = {
        inggris: 'Jaguar',
        ilmiah: 'Panthera onca',
        subSpesies: 9,
        periodeGestasiDalamHari: 115,
        klasifikasi: {
            kingdom: 'animalia',
            phylum: 'chordata',
            class: 'mamalia',
            order: 'carnivora',
            family: 'felidae',
            genus: 'panthera',
            species: 'onca'
        },
        ras: ['Jaguar Amazon', 'Jaguar Peru', 'Jaguar Brazil']
    },
];

console.log(binatang[3]);


// 2. Object dengan fungsi operasi matematika
const operasi = {
    kali: function (angka1, angka2) {
        let hasil = angka1 * angka2;
        return hasil
    },
    bagi: function (angka1, angka2) {
        let hasil = angka1 / angka2;
        return hasil;
    },
    tambah: function (angka1, angka2) {
        let hasil = angka1 + angka2;
        return hasil;
    },
    kurang: function (angka1, angka2) {
        let hasil = angka1 - angka2;
        return hasil;
    },
    modulus: function (angka, modulus) {
        let hasil = angka % modulus;
        return hasil;
    },
    pangkat: function (angka, pangkat) {
        let hasil = angka ** pangkat;
        return hasil;
    },
}