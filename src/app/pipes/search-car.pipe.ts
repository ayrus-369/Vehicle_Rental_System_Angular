import { Pipe, PipeTransform } from '@angular/core';
import { Car } from '../model/car';

@Pipe({
  name: 'searchCar',
  standalone: true
})
export class SearchCarPipe implements PipeTransform {

   
  transform(cars:Car[],query: string): Car[]{
    if (cars.length<1  || query==""|| query==undefined)return cars;
    return cars.filter((car: Car) =>
       JSON.stringify(car).toLowerCase().includes(query.toLowerCase()))
  }


}
