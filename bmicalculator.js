function bmiCalculator() {
    let berat = document.querySelector(".berat");
    let tinggi = document.querySelector(".tinggi");
    let hasil = document.querySelector(".hasil");
    let keterangan = document.querySelector(".keterangan");
    let keterangan2 = document.querySelector(".keterangan2");
    let keterangan3 = document.querySelector(".keterangan3");

    berat = berat.value;
    tinggi = tinggi.value;

    let result = (berat / (tinggi * tinggi) * 10000).toFixed(1);

    if (result < 18.5) {
        hasil.innerHTML = "Your BMI is " + result;
        keterangan.innerHTML = "So you are underwight !!";
        keterangan2.innerHTML = "Go eat some pork";
        keterangan3.innerHTML = "🍔";
        animasi();

    } else if (result >= 18.5 && result <= 24.9) {
        hasil.innerHTML = "Your BMI is " + result;
        keterangan.innerHTML = "So you are normal weight !!";
        keterangan2.innerHTML = "Good job";
        keterangan3.innerHTML = "👍🏾";
        animasi();

    } else {
        hasil.innerHTML = "Your BMI is " + result;
        keterangan.innerHTML = "So you are overwight !!";
        keterangan2.innerHTML = "Go do some exercises";
        keterangan3.innerHTML = "🚴‍♂️";
        animasi();
    }
}

function animasi() {
    let keterangan3 = document.querySelector(".keterangan3");
    keterangan3.classList.add('animated', 'bounce');
    keterangan3.addEventListener('animationend', function () {
        keterangan3.classList.remove('animated', 'bounce');
    });
}

let btn = document.querySelector(".button");
btn.addEventListener("click", bmiCalculator);