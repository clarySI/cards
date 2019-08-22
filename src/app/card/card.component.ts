import { Component, OnInit } from '@angular/core';
import {CardService} from './card.service';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public listCard: any[];
  constructor(private cardService: CardService) {
  }
  ngOnInit() {
    this.listCard = this.cardService.pushListCard();
  }

}
