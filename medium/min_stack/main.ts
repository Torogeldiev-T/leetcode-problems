class MinStack {
    private stack: number[] = [];
    private minStack: number[] = [];

    constructor() {}

    push(val: number): void {
        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length - 1]) {
            this.minStack.push(val);
        }

        this.stack.push(val);
    }

    pop(): void {
        if (this.stack[this.stack.length - 1] === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }

        this.stack.pop();
    }

    top(): number {
        return this.stack[this.stack.length - 1];
    }

    getMin(): number {
        return this.minStack[this.minStack.length - 1];
    }
}

