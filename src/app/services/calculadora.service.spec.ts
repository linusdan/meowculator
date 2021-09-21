import { inject, TestBed } from '@angular/core/testing';

import { CalculadoraService } from './calculadora.service';

describe('CalculadoraService', () => {
  let service: CalculadoraService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculadoraService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('Teste de soma: deve garantir que 2 + 2 = 4', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let somar = service.calcular(2, 2, CalculadoraService.SOMAR);
      expect(somar).toEqual(4);
    })
  });

  it('Teste de soma: deve garantir que 2 - 2 = 0', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let subtrair = service.calcular(2, 2, CalculadoraService.SUBTRAIR);
      expect(subtrair).toEqual(0);
    })
  });

  it('Teste de soma: deve garantir que 2 / 2 = 1', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let dividir = service.calcular(2, 2, CalculadoraService.DIVIDIR);
      expect(dividir).toEqual(1);
    })
  });

  it('Teste de soma: deve garantir que 2 * 2 = 4', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let multiplicar = service.calcular(2, 2, CalculadoraService.MULTIPLICAR);
      expect(multiplicar).toEqual(4);
    })
  });

  it('Deve retornar 0 para operação inválida', () => {
    inject([CalculadoraService], (service: CalculadoraService) => {
      let operacaoInvalida = service.calcular(1, 3, '%');
      expect(operacaoInvalida).toEqual(0);
    })
  });
});