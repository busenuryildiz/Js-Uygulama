/**
Örnek-1.1: Dört İşlem (Toplama, Çıkarma, Çarpma, Bölme), JavaScript işlevleri burada tutulur.
 */
/** Girilen iki sayının toplamını bulur */
function topla() {
    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    var toplam;

    toplam = birinciSayi + ikinciSayi;
    document.getElementById("p-1").innerHTML = toplam;
}

/** Girilen iki sayının farkını bulur */
function cikar() {
    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    var fark;

    fark = birinciSayi - ikinciSayi;
    document.getElementById("p-1").innerHTML = fark;
}

/** Girilen iki sayının çarpımını bulur */
function carp() {
    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    var carpim;

    carpim = birinciSayi * ikinciSayi;
    document.getElementById("p-1").innerHTML = carpim;
}

/** Girilen iki sayının bölümünü bulur */
function bol() {
    var birinciSayi = +document.getElementById("input1").value;
    var ikinciSayi = +document.getElementById("input2").value;
    var bolum;

    bolum = birinciSayi / ikinciSayi;
    document.getElementById("p-1").innerHTML = bolum;
}
/** HTML belgesindeki verileri temizler */
function temizle() {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    document.getElementById("p-1").innerHTML = "Sonuçlar Burada Gösterilir..."


}