import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphSexeComponent } from './graph-sexe.component';

describe('GraphSexeComponent', () => {
  let component: GraphSexeComponent;
  let fixture: ComponentFixture<GraphSexeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphSexeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraphSexeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
