function bmiCalculator() {

    var berat = document.querySelector(".berat");
    var tinggi = document.querySelector(".tinggi");
    var hasil = document.querySelector(".hasil");
    var keterangan = document.querySelector(".keterangan");

    berat = berat.value;
    tinggi = tinggi.value

    var result = (berat / (tinggi * tinggi) * 10000).toFixed(1);



    if (result < 18.5) {
        hasil.innerHTML = "your BMI is " + result;
        keterangan.innerHTML = "so you are underwight";
    } else if (result >= 18.5 && result <= 24.9) {
        hasil.innerHTML = "your BMI is " + result + ", so you have a normal weight";
    } else {
        hasil.innerHTML = "your BMI is " + result + ", so you are overwight";
    }

}
var btn = document.querySelector("button");
btn.addEventListener("click", bmiCalculator);