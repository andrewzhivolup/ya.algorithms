function generateParentheses(n) {
    const result = [];

    function backtrack(s, left, right) {
        if (s.length === 2 * n) {
            result.push(s);
            return;
        }

        if (left < n) {
            backtrack(s + '(', left + 1, right);
        }

        if (right < left) {
            backtrack(s + ')', left, right + 1);
        }
    }

    backtrack('', 0, 0);
    return result;
}

// Дано целое число n.
// Требуется вывести все правильные скобочные последовательности длины 2*n,
// упорядоченные лексикографически.
// В задаче используются только круглые скобки.
// O(2^N)