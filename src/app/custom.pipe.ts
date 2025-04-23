import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
})
export class CustomPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): any {
    if (value == '' || value == null || value == undefined) {
       return 'NA'
    } 
    else {
      return value ? '+27 ' + value : value;
    }
  }

}
