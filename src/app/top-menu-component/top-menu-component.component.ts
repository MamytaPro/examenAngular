import { Component, Input ,OnInit } from '@angular/core';
import { Publication } from '../models/Publication.models';
import {  faAssistiveListeningSystems, faCaretDown, faHome, faPenSquare, faScrewdriver, faWrench,} from '@fortawesome/free-solid-svg-icons';
import { faPlusSquare ,faBell, faComments, faClosedCaptioning, faUser, faCalendarPlus, faSadTear} from '@fortawesome/free-regular-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { FormControl } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-top-menu-component',
  templateUrl: './top-menu-component.component.html',
  styleUrls: ['./top-menu-component.component.scss']
})
export class TopMenuComponentComponent implements OnInit {
  faHome = faHome;
  faSquare=faPlusSquare;
  faHeart=faBell;
  chat=faFacebookMessenger;
  caret=faCaretDown;
  close=faClosedCaptioning
  faUser=faUser;
  faSettings=faWrench
  faModif=faPenSquare
  @Input()  pub!: Publication;
  constructor(private breakpointObserver: BreakpointObserver) { }
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
    isOpen = false;
  ngOnInit(): void {
  }

}
