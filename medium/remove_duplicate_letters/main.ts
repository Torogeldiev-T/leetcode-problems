function removeDuplicateLetters(s: string): string {
  const lastIndex = new Map<string, number>();

  for (let i = 0; i < s.length; i++) {
    lastIndex.set(s[i], i);
  }

  const stack: string[] = [];
  const seen = new Set<string>();

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (seen.has(char)) {
      continue;
    }

    while (
      stack.length &&
      stack[stack.length - 1] > char &&
      lastIndex.get(stack[stack.length - 1])! > i
    ) {
      seen.delete(stack.pop()!);
    }

    stack.push(char);
    seen.add(char);
  }

  return stack.join('');
}