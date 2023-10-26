import { shuffleArrayWithHash } from "../shuffle/shuffle";
import { generateTowersFieldPayload } from "./towers.types";

export function generateField(payload: generateTowersFieldPayload): Array<number[]> {
    if (payload.bombsCountInRow > payload.width) {
        throw Error("Width can`t be less than bombs count")
    }

    const grid = new Array(payload.height)
    for (let row = 0; row < payload.height; row++) {
        const generatedRow = new Array(payload.width).fill(0)

        const bombIndexes = shuffleArrayWithHash(Array.from({ length: payload.width }, (_, i) => i), row * payload.hash.charCodeAt(0))
        for (let i = 0; i < payload.bombsCountInRow; i++) {
            generatedRow[bombIndexes[i]] = 1
        }

        grid[row] = shuffleArrayWithHash(generatedRow, payload.hash.charCodeAt(row % payload.hash.length))
    }
    return grid
}