export type Operation = "+" | "-" | "*" | "/" | "%";

export function computeOperation(num1: number, num2: number, operation: Operation): number
{
    switch (operation)
    {
        case "+":
            return num1 + num2;

        case "-":
            return num1 - num2;

        case "*":
            return num1 * num2;

        case "/":
            return num1 / num2;

        case "%":
            return num1 % num2;

        default:
            throw new Error(`Invalid operation: ${operation}`);
    }
}