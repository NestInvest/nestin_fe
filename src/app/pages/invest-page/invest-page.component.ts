import {Component, Input, OnInit} from '@angular/core';
import {IGanttCharRow} from "../../widgets/gantt-chart/_models/gantt-chart-row.model";
import {IGanttChartMileStone} from "../../widgets/gantt-chart/_models/gantt-chart-milestone.model";
import {IGanttChartEvent} from "../../widgets/gantt-chart/_models/gantt-chart-event.model";
@Component({
  selector: 'nes-invest-page',
  templateUrl: './invest-page.component.html',
  styleUrls: ['./invest-page.component.scss']
})
export class InvestPageComponent {
  title = 'gantt-chart';
  rows: IGanttCharRow[];
  startDate: Date = new Date('2021-01-01');
  endDate: Date = new Date('2021-12-31');
  constructor() {
    this.rows = [
      {name: 'Customer', events:  [
          {name: 'Start-up: Neugründer melden und einen Swisscom Gutschein erhalten', startDate: new Date('2021-01-01'),  endDate: new Date('2021-12-31'), mileStone: 'Feature complete'} as IGanttChartEvent,

        ],
      } as IGanttCharRow,
      {name: '', events:  [
          {name: 'Managed Networks & Managed Security bei Abschluss von Business Internet Services', startDate: new Date('2021-06-15'),  endDate: new Date('2021-12-31')} as IGanttChartEvent
        ],
        mileStones: [{name:'Funding round complete', date: new Date('2021-01-28')} as IGanttChartMileStone]
      } as IGanttCharRow,
      {name: '', events:  [
          {name: 'Secure Internet Traffic und Mail Security 3 Gratismonate', startDate: new Date('2021-07-02'),  endDate: new Date('2021-12-31')} as IGanttChartEvent
        ]
      } as IGanttCharRow,
      {name: '', events:  [
          {name: 'SIP-ISDN Ablösekampagne 3 Gratismonate', startDate: new Date('2021-08-24'),  endDate: new Date('2021-12-31')} as IGanttChartEvent
        ]
      } as IGanttCharRow,
      {name: '', events:  [
          {name: 'inOne KMU office: 1 Jahr lang für CHF 65.-pro Monat', startDate: new Date('2021-12-1'),  endDate: new Date('2021-12-31')} as IGanttChartEvent
        ]
      } as IGanttCharRow,
        {name: 'Partner', events:  [
                {name: 'Smart Business Connect: FSS Partner Promotion - zusätzlich CHF 500.- pro FSS DCS Kunde sichern!', startDate: new Date('2021-07-15'),  endDate: new Date('2021-12-31')} as IGanttChartEvent
            ]
        } as IGanttCharRow,
      {
        name: '', events:  [
          {name: 'Smart Business Connect: FSS Partner Promotion - zusätzlich CHF 500.- pro FSS DCS Kunde sichern!', startDate: new Date('2021-04-25'),  endDate: new Date('2021-10-10')} as IGanttChartEvent
        ]
      } as IGanttCharRow
    ]
  }

    protected readonly Date = Date;
}
