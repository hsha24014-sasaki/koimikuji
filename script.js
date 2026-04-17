const fortunes=[
    "大吉💛素敵な出会いがあるかも！",
    "中吉🌝少し勇気を出すと良いことが起こる",
    "小吉😉今日はゆっくり過ごそう",
    "凶😢無理せず慎重に行動しよう"
];

const button = document.getElementById("bo");
const result = document.getElementById("ke");

button.addEventListener("click",function(){

    const randomNumber = Math.floor(Math.random() * fortunes.length);
    result.textContent = fortunes[(randomNumber)];
});