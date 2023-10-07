import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyMonstersPage } from './my-monsters.page';

describe('MyMonstersPage', () => {
  let component: MyMonstersPage;
  let fixture: ComponentFixture<MyMonstersPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MyMonstersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
