export function randInt(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function isEven(n: number): boolean {
    return n % 2 === 0;
}
