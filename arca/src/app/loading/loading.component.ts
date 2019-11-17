import { Component, OnInit } from '@angular/core';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  isLoading: boolean;
  constructor(private loadingService: LoadingService) {
    this.loadingService.isLoading().subscribe(isLoading => this.isLoading = isLoading);
  }

  ngOnInit() {
  }

}
