import { Pipe, PipeTransform } from '@angular/core';
import { DailyScrum } from 'src/app/dailyscrum/dailyscrum.class';

@Pipe({
  name: 'dailyscrumSearch'
})
export class DailyscrumSearchPipe implements PipeTransform {

  transform(dailyscrums: DailyScrum[], search: string = ""): DailyScrum[] {
    if(search.length == 0) {return dailyscrums}
    search = search.toLowerCase();
    let selected: DailyScrum[] = [];

    for(let d of dailyscrums) {
      if (
        d.date.toLowerCase().includes(search) ||
        d.id.toString().includes(search) ||
        d.notes.toLowerCase().includes(search)
      )
      {selected.push(d);}
    }
    return selected;
  }

}
