function evalRPN(tokens: string[]): number {
    let stack: number[] = [];

    for (let i = 0; i < tokens.length; i++) {
        if (isNaN(Number(tokens[i]))) {
            let operand2 = stack.pop() as number;
            let operand1 = stack.pop() as number;

            let res = performOperation(operand1, operand2, tokens[i]);
            stack.push(res);

            continue;
        }
        stack.push(Number(tokens[i]));
    }

    return stack[0];
}

function performOperation(operand1: number, operand2: number, operation: string): number {
    switch (operation) {
        case '+':
            return operand1 + operand2;
        case '-':
            return operand1 - operand2;
        case '*':
            return operand1 * operand2;
        default:
            let res = operand1 / operand2;
            return res > 0 ? Math.floor(res) : Math.ceil(res);
    }
}

console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))