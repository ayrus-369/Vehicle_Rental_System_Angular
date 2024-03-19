import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../model/car';

@Injectable({
  providedIn: 'root'
})
export class VehicleserviceService {

  constructor(private httpClient:HttpClient) { 
  }
getAllVehicles:Observable<any> = this.httpClient.get("http://localhost:8090/vehicle");
getAllAvailabeVehicles:Observable<any> = this.httpClient.get("http://localhost:8090/availableVehicles");
addVehicle(newCar:Car):Observable<any>{return this.httpClient.post("http://localhost:8090/vehicle",newCar);}
deleteVechicleById(id?:number):Observable<any>{return this.httpClient.delete("http://localhost:8090/vehicle/"+id)};
updateVehicle(car:Car):Observable<any>{return this.httpClient.put("http://localhost:8090/vehicle", car);}
getAllBookedVehicles:Observable<any>= this.httpClient.get("http://localhost:8090/vehicle/booked");
getUnReturnedVehicles:Observable<any> = this.httpClient.get("http://localhost:8090/unreturnedVehicles/")
}
