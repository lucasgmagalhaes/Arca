import { Component } from "@angular/core";
import { BreakpointObserver, Breakpoints } from "@angular/cdk/layout";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";
import { SessionService } from '../services/session.service';

@Component({
  selector: 'app-menu-interno',
  templateUrl: './menu-interno.component.html',
  styleUrls: ['./menu-interno.component.scss']
})
export class MenuInternoComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  userType: string;
  constructor(private breakpointObserver: BreakpointObserver, private sessionService: SessionService) {
    this.sessionService.getUserType().subscribe(type => this.userType = type);
  }

}
