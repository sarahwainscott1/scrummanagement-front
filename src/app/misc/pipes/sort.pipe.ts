import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(arr: any[], column: string, asc: boolean = true): any[] {
    const sortFn = (a: any, b: any) : number => {
      let x = typeof a[column] == "number" ? a[column] : (a[column]).toString().toLowerCase();
      let y = typeof b[column] == "number" ? b[column] : (b[column]).toString().toLowerCase();
      if (x === y) {
        return 0;
      }
      if (asc) {
        return (x < y ? -1 : 1);
      }
      else {return (x > y ? -1 : 1);}
    }
    
    let tempArr =  arr.sort(sortFn);
    console.debug(tempArr);
    return tempArr;
  }

}
