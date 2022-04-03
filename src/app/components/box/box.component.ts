import { Component, OnInit } from '@angular/core';
import { faCircleQuestion} from '@fortawesome/free-solid-svg-icons';
import { IriService } from 'src/app/services/iri.service';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.css']
})
export class BoxComponent implements OnInit {
  montant : number =0;
  iriMensuel : number = 0;
  faCircleQuestion=faCircleQuestion;

  constructor(private iri:IriService) { }

  ngOnInit(): void {
    
  }

  setIri(){
    this.iri.getIri(this.montant).subscribe(
      (mensuel)=>{ 
        this.iriMensuel=mensuel ;
      } 
    );
  }

}
