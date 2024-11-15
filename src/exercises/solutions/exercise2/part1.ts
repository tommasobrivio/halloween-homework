/* import { rollDices } from "@/utils";

export type Player = "player1" | "player2";

const MaxLifePlayer1 = 49;
const ACPlayer1 = 9;

const MaxLifePlayer2 = 37;
const ACPlayer2 = 12;

let currentLifePlayer1 = MaxLifePlayer1;
let currentLifePlayer2 = MaxLifePlayer2;

export function getLife(player: Player): number
{
    if (player === "player1")
    {
        return (currentLifePlayer1 / MaxLifePlayer1) * 100;
    }
    if (player === "player2")
    {
        return (currentLifePlayer2 / MaxLifePlayer2) * 100;
    }

    throw new Error(`Invalid player: ${player}`);
}

export function dealDamage(player: Player, damage: number): void
{
    if (player === "player1")
    {
        currentLifePlayer1 -= damage;

        if (currentLifePlayer1 < 0) { currentLifePlayer1 = 0; }
        if (currentLifePlayer1 > MaxLifePlayer1) { currentLifePlayer1 = MaxLifePlayer1; }
    }
    else if (player === "player2")
    {
        currentLifePlayer2 -= damage;

        if (currentLifePlayer2 < 0) { currentLifePlayer2 = 0; }
        if (currentLifePlayer2 > MaxLifePlayer2) { currentLifePlayer2 = MaxLifePlayer2; }
    }
    else
    {
        throw new Error(`Invalid player: ${player}`);
    }
}
*/