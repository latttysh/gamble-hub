

// Generate new mines field where bomb = 1 and free cell = 0
export function generateField(hash: string, bombsCount: number, width: number, height: number): number[] {
    const field = []

    for (let i = 0; i < width * height; i++) {
        if (i < bombsCount) {
            field.push(1)
        } else {
            field.push(0)
        }
    }

    const seed = hash.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0)

    for (let i = field.length - 1; i > 0; i--) {
        const j = (seed + i) % (i + 1);
        [field[i], field[j]] = [field[j], field[i]]
    }


    return field
}