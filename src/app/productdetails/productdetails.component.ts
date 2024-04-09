import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApigamesService } from '../service/apigames.service';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.scss']
})
export class ProductdetailsComponent implements OnInit {
  game: any;
  constructor(private route: ActivatedRoute, private apiService: ApigamesService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.apiService.getGames().subscribe((data) => {
      this.game = data;
      console.log(this.game);
    });
  }
}
