const bilgiDizgisi = "Faktöriyel değeri burada gösterilir...";
function faktoriyel(n) {
    switch (n) {
        case 0: case 1:
            return 1;
        default:
            return (n * faktoriyel (n - 1));
    }
}
function faktoriyelOzyineli() {
    var deger = ~~document.getElementById("input-1").value;
    document.getElementById("input-2").value = deger + " değerinin, (Özyineli) faktöriyeli: " + faktoriyel(deger);
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