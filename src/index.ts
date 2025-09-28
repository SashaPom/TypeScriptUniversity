function randomInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isEven(n: number): boolean {
    return n % 2 === 0;
}

const user: string = "Студент";
const generated: number = randomInt(1, 100);
const even: boolean = isEven(generated);

console.log(`${user}, випадкове число: ${generated}. Це парне? ${even}`);