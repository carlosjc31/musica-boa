import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TabelaMusicaComponent } from './tabela-musica.component';

describe('TabelaMusicaComponent', () => {
  let component: TabelaMusicaComponent;
  let fixture: ComponentFixture<TabelaMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TabelaMusicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TabelaMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
