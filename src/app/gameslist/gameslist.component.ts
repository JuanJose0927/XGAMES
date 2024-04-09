import { Component, OnInit } from '@angular/core';
import { ApigamesService } from '../service/apigames.service';

@Component({
  selector: 'app-gameslist',
  templateUrl: './gameslist.component.html',
  styleUrls: ['./gameslist.component.scss']
})
export class GameslistComponent implements OnInit {

  games: any[] = [];

  constructor(private apiService: ApigamesService) {}
  ngOnInit(): void {
    this.callGames();
  }
  callGames() {
    this.apiService.getGames().subscribe((data) => {
      this.games = data.results;
      console.log(this.games);
    });
  };
}
