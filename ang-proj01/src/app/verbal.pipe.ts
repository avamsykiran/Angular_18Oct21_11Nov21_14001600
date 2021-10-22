import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'verbal'
})
export class VerbalPipe implements PipeTransform {

  digits:string[];

  constructor(){
    this.digits=[
      "ZERO ","ONE ","TWO ","THREE ",
      "FOUR ","FIVE ","SIX ","SEVEN ",
      "EIGHT ","NINE "
    ];
  }

  transform(value:number): string {
    let result:string='';
  
    let s = `${value}`;

    for(let i=0;i<s.length;i++){
      let symbol = s.charAt(i);
      result += symbol==='.' ? 'DOT ' : this.digits[parseInt(symbol)];
    }
  
    return result;
  }

}
