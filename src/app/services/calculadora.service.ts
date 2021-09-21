/**
* Serviço responsável por executar as operações da calculadora.
* 
* @author Danilo Santos
* @version meow
**/

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculadoraService {
  
  /* definição de constantes para identificar as operações de cálculo */
  static readonly SOMAR: string = '+';
  static readonly SUBTRAIR: string = '-';
  static readonly DIVIDIR: string = '/';
  static readonly MULTIPLICAR: string = '*';

  constructor() { }

  /* método para efetuar as operações da calculadora */
  calcular(num1: number, num2: number, operacao: string): number {

    // armazena o resultado da operação
    let resultado: number;

    switch(operacao) {
      case CalculadoraService.SOMAR:
        resultado = num1 + num2;
      break;
      case CalculadoraService.SUBTRAIR:
        resultado = num1 - num2;
      break;
      case CalculadoraService.DIVIDIR:
        resultado = num1 / num2;
      break;
      case CalculadoraService.MULTIPLICAR:
        resultado = num1 * num2;
      break;
      default:
        resultado = 0;
    }

    return resultado;
  }
}
