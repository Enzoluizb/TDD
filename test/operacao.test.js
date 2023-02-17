const { describe, expect, it } = require("@jest/globals");
const calculadora = require("../src/operacoes");

describe("Teste da calculadora", () => {
  it("Operação de soma", () => {
    /*1*/ let resultado = calculadora.sum(1, 2);
    expect(resultado).toEqual(3);

    /*2*/ resultado = calculadora.sum(-1, 2);
    expect(resultado).toEqual(1);

    /*3*/ resultado = () => calculadora.sum("a", 2);
    expect(resultado).toThrow("Não é um número");

    /*4*/ resultado = () => calculadora.sum(2, "a");
    expect(resultado).toThrow("Não é um número");

    /*5*/ resultado = () => calculadora.sum(2, "a");
    expect(resultado).toThrow("Não é um número");
  });

  it("Operação de subtração", () => {
    /*1*/ let resultado = calculadora.sub(1, 2);
    expect(resultado).toEqual(-1);

    /*2*/ resultado = calculadora.sub(4, 2);
    expect(resultado).toEqual(2);

    /*3*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*4*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");

    /*5*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");
  });

  it("Operação de divisão", () => {
    /*1*/ let resultado = calculadora.sub(4, 2);
    expect(resultado).toEqual(2);

    /*2*/ resultado = calculadora.sub(1, 2);
    expect(resultado).toEqual(0.5);

    /*3*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*4*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");

    /*5*/ resultado = calculadora.sub(1, 2);
    expect(resultado).toEqual(0.5);

    /*6*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*7*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");

    /*8*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*9*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");
  });

  it("Operação de multiplicação", () => {
    /*1*/ let resultado = calculadora.sub(4, 2);
    expect(resultado).toEqual(2);

    /*2*/ resultado = calculadora.sub(1, 2);
    expect(resultado).toEqual(0.5);

    /*3*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*4*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");

    /*5*/ resultado = calculadora.sub(1, 2);
    expect(resultado).toEqual(0.5);

    /*6*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*7*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");

    /*8*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");
  });

  it("Operação de potência", () => {
    /*1*/ let resultado = calculadora.sub(4, 2);
    expect(resultado).toEqual(2);

    /*2*/ resultado = calculadora.sub(1, 2);
    expect(resultado).toEqual(0.5);

    /*3*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*4*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");

    /*5*/ resultado = calculadora.sub(1, 2);
    expect(resultado).toEqual(0.5);

    /*6*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*7*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");

    /*8*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*9*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");
  });

  it("Operação de raiz quadrada", () => {
    /*1*/ let resultado = calculadora.sub(4, 2);
    expect(resultado).toEqual(2);

    /*2*/ resultado = calculadora.sub(1, 2);
    expect(resultado).toEqual(0.5);

    /*3*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*4*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");

    /*5*/ resultado = calculadora.sub(1, 2);
    expect(resultado).toEqual(0.5);

    /*6*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*7*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");

    /*8*/ resultado = () => calculadora.sub("a", -2);
    expect(resultado).toThrow("Não é um número");

    /*9*/ resultado = () => calculadora.sub(-2, "a");
    expect(resultado).toThrow("Não é um número");
  });
  // Math.sqrt raiz
  // Math.pow potencia
});
