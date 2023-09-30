import {Component, OnInit} from '@angular/core';
import {Message} from "primeng/api";

@Component({
  selector: 'nes-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  messages1: Message[] | undefined;

  messages2: Message[] | undefined;

  ngOnInit() {
    this.messages1 = [
      { severity: 'success', summary: 'Success', detail: 'Message Content' },
      { severity: 'info', summary: 'Info', detail: 'Message Content' },
    ];

    this.messages2 = [
      { severity: 'warn', summary: 'Waning', detail: 'Closable Message Content' },
      { severity: 'error', summary: 'Error', detail: 'Closable Message Content' },
    ];
  }
}
