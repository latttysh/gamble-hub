export function shuffleArrayWithHash(array: any[], hashNumber: number): any[] {
    const shuffledArray = [...array]
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(hashNumber % i);
        [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]]
        hashNumber += 1
    }
    return shuffledArray
}