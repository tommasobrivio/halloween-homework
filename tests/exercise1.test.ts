import { describe, it, expect } from "vitest";

import { computeOperation } from "@/exercises/exercise1";

describe("Esercizio 1", () =>
{
    it("Esegue le addizioni correttamente", () =>
    {
        expect(computeOperation(0, 13, "+")).toBe(0 + 13);
        expect(computeOperation(73, 7, "+")).toBe(73 + 7);
        expect(computeOperation(21, 0, "+")).toBe(21 + 0);
        expect(computeOperation(0, -88, "+")).toBe(0 + -88);
        expect(computeOperation(4, -19, "+")).toBe(4 + -19);
        expect(computeOperation(-23, -26, "+")).toBe(-23 + -26);
        expect(computeOperation(-101, 1, "+")).toBe(-101 + 1);
        expect(computeOperation(-50, 0, "+")).toBe(-50 + 0);
        expect(computeOperation(0, 0, "+")).toBe(0 + 0);
    });
    it("Esegue le sottrazioni correttamente", () =>
    {
        expect(computeOperation(0, 13, "-")).toBe(0 - 13);
        expect(computeOperation(73, 7, "-")).toBe(73 - 7);
        expect(computeOperation(21, 0, "-")).toBe(21 - 0);
        expect(computeOperation(0, -88, "-")).toBe(0 - -88);
        expect(computeOperation(4, -19, "-")).toBe(4 - -19);
        expect(computeOperation(-23, -26, "-")).toBe(-23 - -26);
        expect(computeOperation(-101, 1, "-")).toBe(-101 - 1);
        expect(computeOperation(-50, 0, "-")).toBe(-50 - 0);
        expect(computeOperation(0, 0, "-")).toBe(0 - 0);
    });
    it("Esegue le moltiplicazioni correttamente", () =>
    {
        expect(computeOperation(0, 13, "*")).toBe(0 * 13);
        expect(computeOperation(73, 7, "*")).toBe(73 * 7);
        expect(computeOperation(21, 0, "*")).toBe(21 * 0);
        expect(computeOperation(0, -88, "*")).toBe(0 * -88);
        expect(computeOperation(4, -19, "*")).toBe(4 * -19);
        expect(computeOperation(-23, -26, "*")).toBe(-23 * -26);
        expect(computeOperation(-101, 1, "*")).toBe(-101 * 1);
        expect(computeOperation(-50, 0, "*")).toBe(-50 * 0);
        expect(computeOperation(0, 0, "*")).toBe(0 * 0);
    });
    it("Esegue le divisioni correttamente", () =>
    {
        expect(computeOperation(0, 13, "/")).toBe(0 / 13);
        expect(computeOperation(73, 7, "/")).toBe(73 / 7);
        expect(computeOperation(21, 0, "/")).toBe(21 / 0);
        expect(computeOperation(0, -88, "/")).toBe(0 / -88);
        expect(computeOperation(4, -19, "/")).toBe(4 / -19);
        expect(computeOperation(-23, -26, "/")).toBe(-23 / -26);
        expect(computeOperation(-101, 1, "/")).toBe(-101 / 1);
        expect(computeOperation(-50, 0, "/")).toBe(-50 / 0);
        expect(computeOperation(0, 0, "/")).toBe(0 / 0);
    });
    it("Esegue il calcolo del resto correttamente", () =>
    {
        expect(computeOperation(0, 13, "%")).toBe(0 % 13);
        expect(computeOperation(73, 7, "%")).toBe(73 % 7);
        expect(computeOperation(21, 0, "%")).toBe(21 % 0);
        expect(computeOperation(0, -88, "%")).toBe(0 % -88);
        expect(computeOperation(4, -19, "%")).toBe(4 % -19);
        expect(computeOperation(-23, -26, "%")).toBe(-23 % -26);
        expect(computeOperation(-101, 1, "%")).toBe(-101 % 1);
        expect(computeOperation(-50, 0, "%")).toBe(-50 % 0);
        expect(computeOperation(0, 0, "%")).toBe(0 % 0);
    });
});
