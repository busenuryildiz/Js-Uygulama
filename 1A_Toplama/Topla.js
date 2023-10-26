function topla () {
    var birinciSayi = +document.getElementById("input1").value
    var ikinciSayi = +document.getElementById("input2").value
    
    toplam = birinciSayi + ikinciSayi;
    document.getElementById("p-1").innerHTML = toplam;
}
