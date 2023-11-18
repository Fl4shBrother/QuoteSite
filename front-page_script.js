window.onload = function() {
    const hiragana = 'えさしあいうすちつひふぬせそくけたろわをんみおかきこむてとねのへほまなにはめもやゆよらりるれ';

    // returns string with at least 25 characters of DayMonthYear
    function generateDateNumber() {
        let dateNumber = '';
        dateNumber += String(new Date().getDate());
        dateNumber += String(new Date().getMonth());
        dateNumber += String(new Date().getFullYear());
        // replaces 0 with last digit of current year (-> no repeating characters, more variation between same days in different years)
        dateNumber = dateNumber.replace(/0/g, String(new Date().getFullYear())[String(new Date().getFullYear()).length - 1]);
        while (dateNumber.length < 25){
            dateNumber += dateNumber;
        }
        return dateNumber;
    }

    // generate Quote by day
    function generateRandomHiraganaByDay() {
        //const hiragana = 'えさしあいうすちつひふぬせそくけたろわをんみおかきこむてとねのへほまなにはめもやゆよらりるれ';
        let randomHiragana = '';

        let dateNumber = generateDateNumber();

        let hiraganaLenght = new Date().getDate() + new Date().getMonth();
        // 1.7 because 43 (highest potential outcome of sum one line above) devided by 2.1 is ~20
        while(hiraganaLenght > 20) {
            hiraganaLenght -= 18;
        }
        while (hiraganaLenght < 15) {
            hiraganaLenght += 4;
        }
        parseInt(hiraganaLenght);

        // generate random hiragana string
        let randomIndex = 0;
        for (let i = 0; i < hiraganaLenght; i++) {
            randomIndex += parseInt(dateNumber[i]);
            if (randomIndex > 45){
                randomIndex -= 46;
            }
            randomHiragana += hiragana[randomIndex];
        }
        document.getElementById("randomHiraganaDay").innerHTML = randomHiragana;
    }   
    console.log(generateRandomHiraganaByDay());
}