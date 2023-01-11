import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphClasseComponent } from './graph-classe.component';

describe('GraphClasseComponent', () => {
  let component: GraphClasseComponent;
  let fixture: ComponentFixture<GraphClasseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphClasseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
