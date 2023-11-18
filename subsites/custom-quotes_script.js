const hiragana = 'えさしあいうすちつひふぬせそくけたろわをんみおかきこむてとねのへほまなにはめもやゆよらりるれ';

// immidiately displays a random hiragana string when side loads
window.onload = function() {
    generateRandomHiraganaText('randomHiragana');
}

// generates random Quote
function generateRandomHiragana() {
    let randomHiragana = '';
    let hiraganaLenght = 0;

    while (hiraganaLenght < 10) {
        hiraganaLenght = Math.random() * 25;
    }

    for (let i = 0; i < hiraganaLenght; i++) {
        let randomNumber = parseInt(Math.random() * hiragana.length);
        randomHiragana += hiragana[randomNumber];
    }
   return randomHiragana;
}

// generates Quote with lenght specified in input in html
function generateRandomHiraganaCustom(lenght) {
    let randomHiragana = '';
    
    //only generate if lenght input can be interpreted as an integer greater than 0
    if (lenght == '' || lenght <= 0 || !Number.isInteger(parseInt(lenght))) {
        randomHiragana = "Please enter a number greater than 0!";
    }

    if (lenght > 30) {
        alert("Enter a lenght smaller than 30!");
    }

    else {
        for (let i = 0; i < lenght; i++) {
            let randomNumber = parseInt(Math.random() * hiragana.length);
            randomHiragana += hiragana[randomNumber];
        }
    }
    return randomHiragana;
}

// replaces element with output of generateRandomHiraganaCustom
function generateCustomHiraganaText(pId) {
    var text = document.createElement("p");
    let p = document.getElementById(pId);
    text.innerHTML = generateRandomHiraganaCustom(document.getElementById("lenght").value);
    text.id = "customQuote";
    p.replaceWith(text);
}

// replaces element with output of generateRandomHiragana
function generateRandomHiraganaText(pId) {
    var text = document.createElement("p");
    let p = document.getElementById(pId);
    text.innerHTML = generateRandomHiragana();
    text.id = "randomHiragana";
    p.replaceWith(text);
}