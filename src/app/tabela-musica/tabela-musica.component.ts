import { musica } from './../musica';
import { Component, OnInit } from '@angular/core';
import { MusicaService } from '../musica.service';


@Component({
  selector: 'app-tabela-musica',
  standalone: true,
  imports: [],
  templateUrl: './tabela-musica.component.html',
  styleUrl: './tabela-musica.component.css'
})
export class TabelaMusicaComponent implements OnInit {
  musica: musica[] = [];

  constructor(private service: MusicaService) {}
  ngOnInit(): void {
    this.loadMusicas()
  }
  loadMusicas() {
    this.service.getMusica().subscribe({
      next: data => this.musica = data
    })
  }

  delete(musica: musica){
    this.service.delete(musica).subscribe({
      next: () => this this.loadMusicas()
    })

  }


}
