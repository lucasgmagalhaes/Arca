import { Component } from "@angular/core";
import { SessionService } from "./services/session.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  islogged: boolean;

  constructor(private sessionService: SessionService) {
    this.sessionService.isLogged().subscribe(logged => this.islogged = logged);
  }
  title = "arca";
}
