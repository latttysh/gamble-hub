import { describe, expect, it } from "vitest"
import { towers } from ".."

describe("Creating towers field", () => {
    it("Create field", () => {
        const field = towers.generateField({
            bombsCountInRow: 2,
            hash: "your_provable_fair_hash",
            height: 10,
            width: 4
        })
        console.log(field)
        expect(field).toStrictEqual([
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 0, 1, 1],
            [1, 0, 1, 0],
            [0, 0, 1, 1],
            [0, 0, 1, 1],
            [1, 1, 0, 0],
            [0, 1, 1, 0],
            [0, 1, 1, 0],
            [0, 1, 0, 1]
        ])
    })
})

