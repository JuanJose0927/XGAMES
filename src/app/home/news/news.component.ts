import { Component, OnInit } from '@angular/core';
import { ApigamesService } from 'src/app/service/apigames.service';
import { style, transition, trigger, animate, state} from '@angular/animations';
@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
  animations: [
    trigger('enterState', [
      state('void', style({
        transform: 'translateX(-100%)',
        opacity: 0
      })),
      transition(':enter', [
        animate(900, style({
          transform: 'translateX(0)',
          opacity: 1
        }))
      ])
    ])
  ]
})
export class NewsComponent implements OnInit {

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
