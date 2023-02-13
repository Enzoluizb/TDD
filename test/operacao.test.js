const { describe, expect, it } = require('jest')
const calculadora = require('../src/operacoes')

describe('Teste da calculadora', () => {

    it('Operação de soma', () => {
        const resultado = calculadora.sum(1, 2);

        expect(resultado).toEqual(3)
    })

})