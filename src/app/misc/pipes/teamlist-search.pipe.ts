import { Pipe, PipeTransform } from '@angular/core';
import { Team } from 'src/app/team/team.class';
import { TeamList } from 'src/app/teamlist/teamlist.class';

@Pipe({
  name: 'teamlistSearch'
})
export class TeamlistSearchPipe implements PipeTransform {

  transform(teams: Team[], search: string = ""): Team[] {
    if(search.length == 0) {return teams;}
    search = search.toLowerCase();
    let selectedTeam: Team[] = [];
    for(let team of teams) {
      for(let t of team.teamList) {
        if(t.teamMember.name.toLowerCase().includes(search)) {
          selectedTeam.push(t.team);
      }
    }
  }
    return selectedTeam;
  }

}
