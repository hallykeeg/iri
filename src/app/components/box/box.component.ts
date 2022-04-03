import { Component, OnInit } from '@angular/core';
import { faCircleQuestion} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  montant : number =0;
  faCircleQuestion=faCircleQuestion;

  constructor() { }

  ngOnInit(): void {
  }

}
