import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { musica } from "./musica";

@Injectable({
  providedIn: 'root'
})
export class MusicasService {

  private apiUrl = 'http://localhost:3000/musicas';
  constructor(private http: HttpClient) { }
 getMusicasById(id: number): Observable<musica> {
   return this.http.get<musica>(`${this.apiUrl}/${id}`);
 }
 update(musica: musica): Observable<musica> {
   return this.http.put<musica>(`${this.apiUrl}/${musica.id}`, musica);
 }
}

