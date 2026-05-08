const fortunes=[
    "大吉🦁おぬしの苦労を見ていたぞ、よくぞここまで踏ん張ったな",
    "中吉^^少し勇気を出すと良いことが起こる",
    "小吉(>_<)今日はゆっくり過ごそう",
    "末吉( ﾟДﾟ)何もしないで",
    "凶((+_+))今日は外でないほうがいいかも"
];

const button = document.getElementById("bo");
const result = document.getElementById("ke");
const advice = document.getElementByld("advice");

button.addEventListener("click",function(){

    const randomNumber = Math.floor(Math.random() * fortunes.length);
    const resultText = fortunes[(randomNumber)];
    
    result.textContent = fortunes[(randomNumber)];

    if (resultText.includes("大吉")) {
        result.style.color = "red";
        advice.textContent = "今日は積極的に行動しよう";
    } else {
        result.style.color ="black"
    }

});