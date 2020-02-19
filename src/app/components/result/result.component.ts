import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Investment } from 'src/app/models/investment.model';
import { InvestmentsService } from 'src/app/services/investments.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  // Receive investments from parent as @Input
  @Input() fixa: Investment[] = [];
  @Input() variavel: Investment[] = [];

  // Export submit event
  @Output() removeInvestment = new EventEmitter();

  // Populates table titles
  displayedColumns: string[] = ['value', 'date', 'id'];

  constructor() { }

  ngOnInit() {

  }

  /**
   * Remove a investment from the database
   * @param id investment id
   */
  remove(id) {
    this.removeInvestment.emit(id);
  }

}
