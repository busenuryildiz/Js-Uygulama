const bilgiDizgisi = "Faktöriyel değeri burada gösterilir...";

function faktoriyel() {
    var deger = ~~document.getElementById("input-1").value;
    var faktoriyel = 0;
    var degerSakla = deger;

    if (deger >= 0) {

        if ((deger == 0) || (deger == 1))
            faktoriyel = 1;
        else if (deger == 2)
            faktoriyel = 2;
        else {
            faktoriyel = deger;
            while (deger > 2) {
                faktoriyel = faktoriyel * (deger - 1)
                deger = deger - 1;
            }
        }
        document.getElementById("input-2").value = degerSakla + " değerinin faktöriyeli: " + faktoriyel + "    " + degerSakla + "! =" + faktoriyel;
    }
    else
     alert ("Lütfen 0 ya da pozitif tam sayı giriniz.")
   
}
function temizle() {
    document.getElementById("input-1").value = "";
    //*alert("input-2, temizle() tarafından güncellenecek");
    sayfaYukle(2);
}
function sayfaYukle() {
    var kaynak = arguments[0];
    if (kaynak== 1)
        alert("sayfaYukle(), body, onload() tarafından çağırılmıştır...");
    else if (kaynak== 2)
        alert("sayfaYukle(), temizle() tarafından çağırılmıştır...");
    else if (kaynak==3)
    alert("sayfaYukle(), bilinmeyen bir işlev tarafından çağırılmıştır...");

    document.getElementById("input-2").value = bilgiDizgisi;
}