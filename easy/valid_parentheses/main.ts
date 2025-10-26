const map = {
    '(': ')',
    '[': ']',
    '{': '}'
}
function isValid(s: string): boolean {
    const queue: string[] = [];

    for (let i = 0; i < s.length; i++) {
        if (queue.length > 0 && map[queue[queue.length - 1]] === s[i]) {
            queue.pop();
            continue;
        }

        queue.push(s[i]);
    }

    return queue.length === 0;
};

console.log(isValid("(]"));
console.log(isValid("()"));
console.log(isValid("()[]{}"));
console.log(isValid("([)]"));

