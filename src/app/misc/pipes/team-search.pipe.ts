import { Pipe, PipeTransform } from '@angular/core';
import { Team } from 'src/app/team/team.class';

@Pipe({
  name: 'teamSearch'
})
export class TeamSearchPipe implements PipeTransform {

  transform(teams: Team[], search: string = ""): Team[] {
  if(search.length == 0) {return teams;}
  search = search.toLowerCase();
  let selectedTeam: Team[] = [];
  for(let team of teams) {
    if(team.teamList.length > 0) {
      for(let t of team.teamList){
        if(team.name.toLowerCase().includes(search) ||
            team.id.toString().includes(search) ||
            t.teamMember.name.toLowerCase().includes(search)
            )
              {if (!selectedTeam.includes(team) ){selectedTeam.push(team)}}
       }
      }
      else if(team.name.toLowerCase().includes(search) ||
            team.id.toString().includes(search) ) {
              if (!selectedTeam.includes(team) ){selectedTeam.push(team)}
            }
    
  }return selectedTeam;
  }
}
