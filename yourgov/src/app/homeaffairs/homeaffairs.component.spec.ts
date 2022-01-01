import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeaffairsComponent } from './homeaffairs.component';

describe('HomeaffairsComponent', () => {
  let component: HomeaffairsComponent;
  let fixture: ComponentFixture<HomeaffairsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeaffairsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeaffairsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
