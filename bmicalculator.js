function bmiCalculator() {

    var berat = document.querySelector(".berat");
    var tinggi = document.querySelector(".tinggi");
    var hasil = document.querySelector(".hasil");
    berat = berat.value;
    tinggi = tinggi.value
    var bmi = berat / (tinggi * tinggi);
    var result = Math.floor(bmi, 2);

    if (result < 18.5) {
        hasil.innerHTML = "your BMI is " + result + ", so you are underwight";
    } else if (result >= 18.5 && result <= 24.9) {
        hasil.innerHTML = "your BMI is " + result + ", so you have a normal weight";
    } else {
        hasil.innerHTML = "your BMI is " + result + ", so you are overwight";
    }

}
var btn = document.querySelector("button");
btn.addEventListener("click", bmiCalculator);