import { Injectable } from '@angular/core';
import { Card } from './card';
@Injectable({
  providedIn: 'root'
})
export class CardService {
  private listCard = [];
  constructor() {
    this.listCard = [];
  }
  public get allListCard(): any[] {
    return this.listCard;
 }
 public set allListCard(allList: any[]) {
   this.listCard = allList;
 }
  public pushListCard() {
    for (let index = 0; index < 10; index++) {
      const card = { id : index + 1, content: 'Lorem ipsum, dolor sit amet consectetur' +
      'adipisicing elit. Cum corporis aliquam odio tenetur at dolorem incidunt enim' +
       'debitis dolore inventore? A eligendi sequi debitis corporis nam, placeat modi necessitatibus illo.' };
      this.listCard.push(card);
    }
    return this.listCard;
   // return [{ id : 0, title: 'title1' }, { id : 1, title: 'title2' }, { id : 2, title: 'title2' }];
  }
}
