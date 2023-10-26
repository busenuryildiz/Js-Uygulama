
//const genel1 = "Geneldeki sabit degismez-1";
//const genel2 = 200;
var k = 100, l = "\"Genel\"de tanimlanmis degisken";

function sayfaYukle() {
    // const genel1 = 999.999;
    // const genel2 = "Yereldeki sabit degismez-2";
    console.log("JS kodumuz, sayfaYukle() etkinlik alaninda calisiyor...");
    // var k = "\"Yerel\"de tanimlanmis k degiskeni";
    // var 1 = "\"Yerel\"de tanimlanmis 1 degiskeni";

    blok1: {
        forBlok1: for (let k = 0; k < 5; k++) {
            for (let l = 0; l < 3; l++) {
               if (l >= 3)
                  break blok1;
                 console.log("k + \" \" + l -> " + k + " " + l);
            }
            console.log("Dış döngüde -> " + k);
        }
        console.log("İç içe döngü sonlandı...");
    }
    console.log("k + \" \" + l -> " + k + " " + l);
    k++;
    l = "Genel degiskenin degeri degisir mi?";
    console.log("k + \" \" + l -> " + k + " " + l);
    sayfaYukleAltIsler();
}
function sayfaYukleAltIsler() {
    k++
    console.log("JS kodumuz, sayfaYukleAltIsler() etkinlik alaninda calisiyor...");
    console.log("k + \" \" + l -> " + k + " " + l);
}