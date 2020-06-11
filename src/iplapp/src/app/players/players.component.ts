import { Component, OnInit } from '@angular/core';
import { teamclass } from './teamclass';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  temp1: teamclass = new teamclass("Chennai Super Kings", "https://www.chennaisuperkings.com/", "965 - 144 - 6018", "../../../assets/csk.png");
  temp2: teamclass = new teamclass("Mumbai Indians", "https://www.mumbaiindians.com/", "965 - 144 - 6018", "../../assets/MI.png");
  temp3: teamclass = new teamclass("Rajasthan Royals", "https://www.rajsthanroyals.com/", "965 - 144 - 6018", "../../assets/RR.png");
  temp4: teamclass = new teamclass("Delhi capitals", "https://www.delhicapitals.com/", "965 - 144 - 6018", "../../assets/Delhi.png");
  temp5: teamclass = new teamclass("Royal Challengers Bangalore", "https://www.royalchallengersbangolre.com/", "965 - 144 - 6018", "../../assets/RCB.png");
  temp6: teamclass = new teamclass("Kolkata Knight Riders", "https://www.kolkataknightriders.com/", "965 - 144 - 6018", "../../assets/KKR.png");
}
