// import { describe, expect, test } from '@types/jest';
import { sumar, restar, multiplicar, dividir } from '../../operations';

describe('basic operations module', () => {
  describe('sumar module', () => {
    test('adds 1 + 2 to equal 3', () => {
      expect(sumar(1, 2)).toBe(3);
    });
    test('adds -1 + 2 to equal 3', () => {
      expect(sumar(-1, 2)).toBe(1);
    });
  });

  describe('dividir module', () => {
    test('div 1 / 2 to equal 0.5', () => {
      expect(dividir(1, 2)).toBe(0.5);
    });
    test('div 3 / 0 to equal null', () => {
      expect(dividir(3, 0)).toBeNull();
    });
  });
})