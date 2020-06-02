import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'pcms-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  public user: any;

  @Output()
  public logout: EventEmitter<any> = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onLogout() {
    this.logout.emit();
  }
}
