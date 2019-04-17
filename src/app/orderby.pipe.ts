import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderby',
  pure: false
})
export class OrderbyPipe implements PipeTransform {

  transform(array: any[], args: any): any[] {
    let field: string = args;
    if (array == null) {
      return null;
    }
    if (field.startsWith('-')) { 
      field = field.substring(1);
      array.sort((a: any, b: any) => {
        return -a[field].localeCompare(b[field]);
       });
       return array;
    } else { 
      array.sort((a: any, b: any) => {
        return a[field].localeCompare(b[field]);
       });
       return array;

    }
  }


  }




//     if (field.startsWith('-')) { // desc order
//       field = field.substring(1);
//       array.sort((a: any, b: any) => {
//         return -a[field].localeCompare(b[field]);
//        });
//        return array;
//     } else { // asc order
//       array.sort((a: any, b: any) => {
//         return a[field].localeCompare(b[field]);
//        });
//        return array;

//     }
