import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MusicasService } from '../musicas.service';


@Component({
  selector: 'app-form-musicas',
  templateUrl: './form-musicas.component.html',
  styleUrl: './form-musicas.component.css'
})
export class FormMusicasComponent implements OnInit {

  fromGroupMusicas: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ActivatedRoute: ActivatedRoute,
    private service: MusicasService
  ) {
    this.fromGroupMusicas = this.formBuilder.group({
      id:      [''],
      name:    [''],
      artista: [''],
      album:   [''],
      ano:     ['']
    });
    }

  ngOnInit(): void {
    const id = this.ActivatedRoute.snapshot.paramMap.get('id');
    this.loadMusicas(id);
  }
  loadMusicas(id: string | null) {
    throw new Error('Method not implemented.');
  }
  update(): void {
    this.service.update(this.fromGroupMusicas.value).subscribe(() => {
      this.router.navigate(['musicas']);
    });
  }

  }




