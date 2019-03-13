function bmiCalculator() {

    var berat = document.querySelector(".berat");
    var tinggi = document.querySelector(".tinggi");
    var hasil = document.querySelector(".hasil");
    var keterangan = document.querySelector(".keterangan");
    var keterangan2 = document.querySelector(".keterangan2");

    berat = berat.value;
    tinggi = tinggi.value

    var result = (berat / (tinggi * tinggi) * 10000).toFixed(1);



    if (result < 18.5) {
        hasil.innerHTML = "Your BMI is " + result;
        keterangan.innerHTML = "So you are underwight !!";
        keterangan2.innerHTML = "Go eat some pork 🍔";

    } else if (result >= 18.5 && result <= 24.9) {
        hasil.innerHTML = "Your BMI is " + result;
        keterangan.innerHTML = "So you are normal weight !!";
        keterangan2.innerHTML = "Good job 👍🏽";

    } else {
        hasil.innerHTML = "Your BMI is " + result;
        keterangan.innerHTML = "So you are overwight !!";
        keterangan2.innerHTML = "Go do some exercises 🚴‍♂️";
    }

}
var btn = document.querySelector("button");
btn.addEventListener("click", bmiCalculator);