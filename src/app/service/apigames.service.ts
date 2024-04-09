import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApigamesService {

  private url = 'https://api.rawg.io/api/games?key=1c8c5e5413244d4ea08852dd2b05fccf';

  constructor(private http: HttpClient) { }

  public getGames(): Observable<any> {
    return this.http.get<any>(this.url);
  }

}
