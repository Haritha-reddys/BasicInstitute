import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(array: any[], field: any, args: any): any {
    if (args == null) { return array; }
    return array.filter(function(item) {
      return item[field].toLowerCase().indexOf(args.toLowerCase()) > -1;
    });
  }




}




