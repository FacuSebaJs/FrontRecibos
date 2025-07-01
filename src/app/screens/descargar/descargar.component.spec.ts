import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DescargarComponent } from './descargar.component';

describe('DescargarComponent', () => {
  let component: DescargarComponent;
  let fixture: ComponentFixture<DescargarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DescargarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DescargarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
