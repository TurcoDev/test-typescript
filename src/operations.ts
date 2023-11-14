export const sumar = (a: number, b: number): number => a + b
export const restar = (a: number, b: number): number => a - b
export const multiplicar = (a: number, b: number): number => a * b
export const dividir = (a: number, b: number): number | null => {
  if (b === 0) return null;
  return a / b
}

