import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IriService {

  constructor() { }
  getIri(montant:number): Observable<number>{
    let salaireAnnuel:number = montant*12;
    let b1:number=0;
    let b2:number=0;
    let b3:number=0;
    let b4:number=0;
    let b5:number=0;
    let iriAnnuel : number;
    let iriMensuel : number;

    if( salaireAnnuel > 1000000 ){
      b5 = ( salaireAnnuel - 1000000 ) * 0.3;
      b4 = 520000 * 0.25;
      b3 = 240000 * 0.15;
      b2 = 180000 * 0.1;
    }else if( salaireAnnuel > 480000 ){
      b4 = ( salaireAnnuel - 480000 ) * 0.25;
      b3 = 240000 * 0.15;
      b2 = 180000 * 0.1;
    }else if( salaireAnnuel > 240000){
      b3 = ( salaireAnnuel - 240000 ) * 0.15;
      b2 = 180000 * 0.1;
    }else if( salaireAnnuel > 60000){
      b2 = ( salaireAnnuel - 60000 ) * 0.1;
    }
   
    iriAnnuel = b2 + b3 + b4 + b5;
    iriMensuel = iriAnnuel/12;
    return of(parseFloat(iriMensuel.toFixed(2)) );
  }
}
