import { Component, computed } from '@angular/core';
import { CurrencyPipe } from '@angular/common';

import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-investment-results',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './investment-results.component.html',
  styleUrl: './investment-results.component.css',
})
export class InvestmentResultsComponent {
  constructor(private investmentService: InvestmentService) {}

  // get results() {
  //   return this.investmentService.resultsData;
  // }
  //computed is readonly like get more efficient
  results = computed(() => this.investmentService.resultsData());
}
