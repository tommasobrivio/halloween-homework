import { rollDices } from "@/utils";

export type Player = "player1" | "player2";

const MaxLifePlayer1 = 49;
let ALPlayer1 = MaxLifePlayer1;
const ACPlayer1 = 9;

const MaxLifePlayer2 = 49;
let ALPlayer2 = MaxLifePlayer2;
const ACPlayer2 = 9;

/**
 * ==== ESERCIZIO 1 ====
 * Implementare le seguenti funzioni affinché l'interfaccia di gioco funzioni correttamente.
 *
 * Da notare la presenza del parametro `player` in entrambe le funzioni.
 * Per comodità, consideratelo di tipo `string`; ho semplicemente preferito
 *  specificare tutti i valori possibili (TypeScript permette anche questo).
 *
 * Per non complicarvi troppo le cose, concentratevi sulla
 *  prima parte dell'esercizio prima di passare alla seconda.
 *
 * NOTA BENE:
 *  Passare alla seconda parte, non giustifica né permette di "rompere" la parte uno.
 *  L'esercizio è da considerarsi completato solo quando entrambe le parti sono implementate e funzionanti.
 *
 * Happy coding! 🚀
 */

export function getLife(player: Player): number
{
    /**
     * ==== PARTE 1 ====
     * La funzione dovrà restituire la vita attuale del giocatore specificato.
     *
     * NOTA BENE:
     *  Il valore dovrà essere restituito in percentuale, compreso tra 0 e 100.
     *  Per esempio: se la vita attuale del giocatore è 10 e la vita massima è 50, il risultato dovrà essere 20.
     */

    if (player === "player1")
    {
        return (ALPlayer1 / MaxLifePlayer1) * 100;
    }

    else
    {
        return (ALPlayer2 / MaxLifePlayer2) * 100;
    }

}

export function dealDamage(player: Player, damage: number): void
{
    /**
     * ==== PARTE 1 ====
     * La funzione dovrà decrementare la vita attuale del giocatore specificato, in base al danno inflitto.
     * Se il danno inflitto è maggiore della vita attuale, la vita non dovrà scendere sotto lo 0.
     *
     * Non è richiesto restituire alcun valore.
     *
     * NOTA BENE:
     *  In alcuni casi, il valore di `damage` potrebbe essere negativo.
     *  In questi casi, il danno dovrà essere considerato come "cura" e la vita attuale del giocatore dovrà aumentare.
     *  La vita attuale non dovrà superare il valore massimo consentito (`MaxLifePlayer1` e `MaxLifePlayer2`).
     *
     * ==== PARTE 2 ====
     * Aggiungi un po' di "pepe" alla funzione: se ci pensi, un comune attacco potrebbe anche fallire!
     * Per simulare questa casistica, avremo bisogno di "giocare" un po' con le probabilità.
     *
     * Vi ho messo a disposizione due costanti: `ACPlayer1` e `ACPlayer2`.
     * Questi valori rappresentano la "Armor Class" (o "Classe Armatura" in Italiano) dei due giocatori.
     *
     * Sto prendendo spunto da "Dungeons & Dragons" (o "D&D" per gli amici),
     *  ma non è necessario conoscere il gioco per completare l'esercizio.
     *
     * Il concetto alla base della "Classe Armatura" è la difficoltà di colpire un bersaglio:
     *  più alta è la "Classe Armatura", più difficile sarà colpire il bersaglio.
     * D&D prevede il tiro di un dado da 20 facce per determinare se un attacco ha successo o meno.
     * Qualora il risultato del tiro dovesse essere maggiore o uguale
     *  alla "Classe Armatura" del bersaglio, l'attacco ha successo.
     *
     * Vi ho messo a disposizione anche una funzione per simulare il tiro dei dadi: `rollDices`.
     * Per tirare un dado da 20 facce, vi basterà chiamare la funzione in questo modo: `rollDices(1, 20)`.
     *
     * Se il numero ottenuto sarà maggiore o uguale alla "Classe Armatura" del bersaglio,
     *  l'attacco avrà successo (quindi bisognerà infliggere il danno).
     * In caso contrario, l'attacco fallirà e la vita attuale del giocatore non dovrà subire alcuna variazione.
     *
     * NOTA BENE:
     *  - Le magie di cura che vengono lanciate su se stessi non possono fallire.
     *
     * ==== PARTE 3 ====
     *
     * Esiste una regola aggiuntiva, nel Mondo di D&D, che potrebbe ribaltare le sorti di un combattimento.
     * Qualora -infatti- il tiro di un dado da 20 facce dovesse risultare 20, l'attacco viene considerato "Critico".
     * In questo caso, il danno inflitto viene raddoppiato.
     *
     * Qualora -invece- il tiro dovesse risultare 1, l'attacco viene considerato "Fallimento Critico".
     * In questo caso, il danno viene autoinflitto (la spada mi scivola dalle mani e mi
     *  trafiggo il piede oppure l'incantesimo che stavo lanciando mi esplode in faccia).
     *
     * Gestisci anche queste casistiche all'interno di questa funzione.
     */

    if (damage > 0)
    {
        const rollDice = rollDices(1, 20);

        if (rollDice === 20)
        {
            damage *= 2;
        }

        if (player === "player1")
        {
            if (rollDice === 1)
            {
                if ((ALPlayer2 -= damage) > 0)
                {
                    ALPlayer2 -= damage;
                }

                else
                {
                    ALPlayer2 = 0;
                }
            }

            if (rollDice >= ACPlayer1)
            {
                if ((ALPlayer1 -= damage) > 0)
                {
                    ALPlayer1 -= damage;
                }

                else
                {
                    ALPlayer1 = 0;
                }
            }
        }

        if (player === "player2")
        {
            if (rollDice === 1)
            {
                if ((ALPlayer1 -= damage) > 0)
                {
                    ALPlayer1 -= damage;
                }

                else
                {
                    ALPlayer1 = 0;
                }
            }

            if (rollDice >= ACPlayer2)
            {

                if ((ALPlayer2 -= damage) > 0)
                {
                    ALPlayer2 -= damage;
                }

                else
                {
                    ALPlayer2 = 0;
                }
            }
        }

    }

    if (damage < 0)
    {
        damage *= -1;

        if (player === "player1")
        {
            if ((ALPlayer1 += damage) > MaxLifePlayer1)
            {
                ALPlayer1 += damage;
            }

            else
            {
                ALPlayer1 = MaxLifePlayer1;
            }

        }

        if (player === "player2")
        {
            if ((ALPlayer2 += damage) > MaxLifePlayer2)
            {
                ALPlayer2 += damage;
            }

            else
            {
                ALPlayer2 = MaxLifePlayer2;
            }

        }
    }
}
