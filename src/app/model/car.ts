export class Car {
    
     constructor(public imageUrl?:string,public id?:number,public car_image_url?:File ,public brand?: string, public registerNumber?:string, public available?:boolean, public active?:boolean,public engaged?:boolean,public location?:string, public rentPerHour?:number, public deposit?:number, public fuelType?:string, public gearType?:string, public noOfSeats?:number, public airConditioned?:boolean, public mileage?:string) {
          this.available=false;
          this.active=false;
          this.airConditioned=false;
          this.engaged=false;
          
          

          
     } 
        
}
