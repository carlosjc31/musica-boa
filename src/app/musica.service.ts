import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { musica } from "./musica";

@Injectable({
  providedIn: "root",
})
export class MusicaService {

  private apiURL = 'http://localhost:3000/musica';

  constructor(private http: HttpClient) {}

  getMusica() {
    return this.http.get<musica[]>(this.apiURL);
}
delete(musica: musica): Observable<void> {
  return this.delete<void>('http://localhost:3000/musica' + musica.id)
}

}
