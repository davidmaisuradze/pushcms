import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationStatisticsComponent } from './notification-statistics.component';

describe('NotificationStatisticsComponent', () => {
  let component: NotificationStatisticsComponent;
  let fixture: ComponentFixture<NotificationStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
