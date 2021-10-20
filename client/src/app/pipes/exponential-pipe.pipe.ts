import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'exponentialPipe'
})
export class ExponentialPipePipe implements PipeTransform {

  transform(value: number, exponent = 1): number {
    return Math.pow(value, exponent);
  }
}