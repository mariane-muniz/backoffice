import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntityModifierComponent } from './entity-modifier.component';

describe('EntityModifierComponent', () => {
  let component: EntityModifierComponent;
  let fixture: ComponentFixture<EntityModifierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntityModifierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntityModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
