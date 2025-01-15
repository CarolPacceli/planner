import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaViagemComponent } from './nova-viagem.component';

describe('NovaViagemComponent', () => {
  let component: NovaViagemComponent;
  let fixture: ComponentFixture<NovaViagemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NovaViagemComponent]
    });
    fixture = TestBed.createComponent(NovaViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
