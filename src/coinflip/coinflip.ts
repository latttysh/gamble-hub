import { newCoinflipPayload } from "./coinflip.types";


export class Coinflip {

    newGame(payload: newCoinflipPayload) {
        const resultNumber = parseInt(payload.hash.substring(0, 8), 16) % 100
        let isWin
        if (resultNumber < payload.chance) {
            isWin = true
        } else {
            isWin = false
        }
        return {
            isWin: isWin,
            resultNumber: resultNumber,
        }
    }

    checkResults() { }
}