import { rollDices } from "@/utils";

export type Player = "player1" | "player2";

const MaxLifePlayer1 = 49;
const ACPlayer1 = 9;

const MaxLifePlayer2 = 37;
const ACPlayer2 = 12;

let currentLifePlayer1 = MaxLifePlayer1;
let currentLifePlayer2 = MaxLifePlayer2;

export function getLife(player: Player): number
{
    switch (player)
    {
        case "player1":
            return (currentLifePlayer1 / MaxLifePlayer1) * 100;

        case "player2":
            return (currentLifePlayer2 / MaxLifePlayer2) * 100;

        default:
            throw new Error(`Invalid player: ${player}`);
    }
}

export function dealDamage(player: Player, damage: number): void
{
    if (damage > 0)
    {
        const AC = (player === "player1") ? ACPlayer1 : ACPlayer2;
        const roll = rollDices(1, 20);

        if (roll === 20)
        {
            damage *= 2;
        }
        else if (roll === 1)
        {
            player = (player === "player1") ? "player2" : "player1";
        }
        else if (roll < AC)
        {
            return;
        }
    }

    switch (player)
    {
        case "player1":
            currentLifePlayer1 -= damage;

            if (currentLifePlayer1 < 0) { currentLifePlayer1 = 0; }
            if (currentLifePlayer1 > MaxLifePlayer1) { currentLifePlayer1 = MaxLifePlayer1; }

            break;

        case "player2":
            currentLifePlayer2 -= damage;

            if (currentLifePlayer2 < 0) { currentLifePlayer2 = 0; }
            if (currentLifePlayer2 > MaxLifePlayer2) { currentLifePlayer2 = MaxLifePlayer2; }

            break;

        default:
            throw new Error(`Invalid player: ${player}`);
    }
}
