import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UpdateMonsterPage } from './update-monster.page';

describe('UpdateMonsterPage', () => {
  let component: UpdateMonsterPage;
  let fixture: ComponentFixture<UpdateMonsterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(UpdateMonsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
