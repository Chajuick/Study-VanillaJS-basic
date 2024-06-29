const age = prompt("몇 살이신가요?");
const numAge = parseInt(age);

if (isNaN(numAge) || numAge < 0) {
    console.log("옳바르지 않은 형식입니다. 0 이상의 숫자를 입력해주세요.");
} else if (numAge < 18) {
    console.log("너무 어리시네요.");
} else if (numAge >= 18 && numAge <= 50) {
    console.log("즐기세요!");
} else if (numAge > 50 && numAge <= 80) {
    console.log("챙기세요!");
} else {
    console.log("장수하세요!");
}

console.log(typeof age);