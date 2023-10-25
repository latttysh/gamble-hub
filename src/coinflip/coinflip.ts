

export function generateNumber(hash: string): number {
    const resultNumber = parseInt(hash.substring(0, 8), 16) % 100
    return resultNumber
}
