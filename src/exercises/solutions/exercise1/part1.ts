export type Operation = "+" | "-" | "*" | "/";

export function computeOperation(num1: number, num2: number, operation: Operation): number
{
    if (operation === "+")
    {
        return num1 + num2;
    }
    if (operation === "-")
    {
        return num1 - num2;
    }
    if (operation === "*")
    {
        return num1 * num2;
    }
    if (operation === "/")
    {
        return num1 / num2;
    }

    throw new Error(`Invalid operation: ${operation}`);
}