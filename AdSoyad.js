// github hesabina yukledim

// Adimi ve soyadimi birlestiren kod

var vorname = 'Ismail';
var nachname = 'Diken';

console.log(vorname);
//console.log(typeof vorname);
console.log(nachname);
//console.log(typeof nachname);

//var name = vorname + ' ' + nachname;
var name = vorname.concat(' ', nachname);
console.log(name);
//console.log(typeof name);

// 1 den 100 e kadar cift sayilari yazdiran döngü

var cift;
var i;
i = 1;
while (i < 101) {
    if (i % 2 == 0) {
        cift = i;
        console.log(cift);
    }
    i++;
}