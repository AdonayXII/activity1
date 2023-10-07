import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddMonsterPage } from './add-monster.page';

describe('AddMonsterPage', () => {
  let component: AddMonsterPage;
  let fixture: ComponentFixture<AddMonsterPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AddMonsterPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
