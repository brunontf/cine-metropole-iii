import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoFilmeComponent } from './novo-filme.component';

describe('NovoFilmeComponent', () => {
  let component: NovoFilmeComponent;
  let fixture: ComponentFixture<NovoFilmeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovoFilmeComponent]
    });
    fixture = TestBed.createComponent(NovoFilmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
