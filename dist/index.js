"use strict";
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function isEven(n) {
    return n % 2 === 0;
}
const user = "Студент";
const generated = randomInt(1, 100);
const even = isEven(generated);
console.log(`${user}, випадкове число: ${generated}. Це парне? ${even}`);
//# sourceMappingURL=index.js.map