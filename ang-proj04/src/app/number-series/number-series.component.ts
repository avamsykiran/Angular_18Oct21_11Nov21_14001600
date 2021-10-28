import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { NumberSeriesService } from '../number-series.service';

@Component({
  selector: 'app-number-series',
  templateUrl: './number-series.component.html',
  styleUrls: ['./number-series.component.css']
})
export class NumberSeriesComponent {

  lb: number;
  ub: number;

  err?: string;
  nums?: number[];
  isJobInProgress?: boolean;

  evens?: boolean;
  squares?: boolean;

  constructor(private nss: NumberSeriesService) {
    this.lb = 0;
    this.ub = 0;
  }

  formSubmitted() {
    this.nums = [];
    this.isJobInProgress = true;

    let ob: Observable<number>;
    if (this.evens && this.squares)
      ob = this.nss.generateEvenSquaredSeries(this.lb, this.ub);
    else if (this.evens)
      ob = this.nss.generateEvenSeries(this.lb, this.ub);
    else if (this.squares)
      ob = this.nss.generateSquaredSeries(this.lb, this.ub);
    else
      ob = this.nss.generateSeries(this.lb, this.ub);

    ob.subscribe(
      val => this.nums?.push(val),
      err => { this.err = err; this.isJobInProgress = false; },
      () => this.isJobInProgress = false
    );
  }
}
