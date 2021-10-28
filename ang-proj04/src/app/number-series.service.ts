import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { map,filter} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NumberSeriesService {

  generateSeries(lb:number,ub:number):Observable<number>{
    
    const job = (observer:Observer<number>) => {

      if(lb>ub){
        observer.error("Invalid boundaries to generate the series"); //emiting error
        return;
      }

      let curretnVal = lb;

      let handle = setInterval(()=>{
        observer.next(curretnVal); //emiting a value once in every 500 ms
        curretnVal++;
        if(curretnVal>ub){
          clearInterval(handle);
          observer.complete(); //signalling the completion of the job
        }
      },500);

    };

    return new Observable<number>(job);
  }

  generateEvenSeries(lb:number,ub:number):Observable<number>{
    return this.generateSeries(lb,ub).pipe(
      filter(v => v%2==0)
    );
  }

  generateSquaredSeries(lb:number,ub:number):Observable<number>{
    return this.generateSeries(lb,ub).pipe(
      map(v => v*v)
    );
  }

  generateEvenSquaredSeries(lb:number,ub:number):Observable<number>{
    return this.generateSeries(lb,ub).pipe(
      filter(v => v%2==0),
      map(v => v*v)
    );
  }
}
