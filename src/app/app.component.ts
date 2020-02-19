import { Component, OnInit } from '@angular/core';
import { Investment } from './models/investment.model';
import { InvestmentsService } from './services/investments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'carteira-investimentos';

  // Set investment data
  public investmentsByFixa$: Investment[];
  public investmentsByVariavel$: Investment[];
  public dataChart$: number[];

  constructor(private investmentsService: InvestmentsService) { }

  ngOnInit() {
    this.getInvestments();
  }

  /**
   * Add a new investment to the database
   * @param payload investment data
   */
  postInvestment(payload: Investment) {
    this.investmentsService.post(payload);
    this.getInvestments();
  }

  /**
   * Get investments from database
   */
  getInvestments() {
    return this.investmentsService.get()
      .subscribe(
        res => {
          if (res) {
            this.investmentsByFixa$ = res.filter(i => i.type === 'RENDA_FIXA');
            this.investmentsByVariavel$ = res.filter(i => i.type === 'RENDA_VARIAVEL');
            this.dataChart$ = [this.investmentsByFixa$.length, this.investmentsByVariavel$.length];

          }
        },
        error => console.log(error)
      );
  }

  /**
   * Remove a investment from the database
   * @param id investment id
   */
  removeInvestment(id: number) {
    this.investmentsService.remove(id);
    this.getInvestments();
  }
}
