function solveQuadraticEquation (a, b, c) {
    if (a === 0) {
        throw new Error('Уравнение не является квадратным (коэффициент a не может быть равен 0).');
    }
    const discriminant = b * b - 4 * a * c;
    const solution = [];
    if (discriminant < 0) return solution;
    if (discriminant === 0) {
        solution.push(-b/2*a);
        return solution;
    }
    solution.push(-b-discriminant**(1/2)/2*a);
    solution.push(-b+discriminant**(1/2)/2*a);
    return solution[0] > solution[1] ? solution.reverse() : solution;
}

// Решение квадратного уровнения
// O(n)