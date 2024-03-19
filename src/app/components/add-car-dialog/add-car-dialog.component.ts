import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogActions, MatDialogContent, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Car } from '../../model/car';
import { HttpClient } from '@angular/common/http';
import { VehicleserviceService } from '../../services/vehicleservice.service';


@Component({
  selector: 'app-add-car-dialog',
  standalone: true,
  imports: [CommonModule,FormsModule, MatFormFieldModule, MatInputModule,MatDialogActions,MatDialogContent,MatDialogModule],
  templateUrl: './add-car-dialog.component.html',
  styleUrl: './add-car-dialog.component.css'
})
export class AddCarDialogComponent {
  constructor(private dialogRef: MatDialogRef<AddCarDialogComponent>,private http: HttpClient,private vehicleService:VehicleserviceService){}
  car:Car=new Car();
   file:any;
selectedFile?: File;
//Gets called when the user selects an image
public onFileChanged(event:any) {
  
  //Select File
  this.selectedFile = event.target.files[0];
}
// submitForm() {
//   const formData = new FormData();
//   if (this.car.imageFile) {
//     formData.append('imageFile', this.car.imageFile, this.car.imageFile.name);
//   }
//   formData.append('carData', JSON.stringify(this.car));
//   console.log(formData);
  
//   this.vehicleService.addVehicle(formData).subscribe(
//     {
//       next:(data)=>{
//         console.log(data);
       
//       },
//       error:(err)=>{
//         console.log(err);
       
//       },
//       complete:()=>{
//         console.log("Server completed sending data");
//       }
//     }
//   )

// }

//   //  getFile(event: any) {
//   //   this.file = event.target.files[0];
//   //   console.log(this.file.value);
    
//   // }
//   // onCheckboxChange() {
//   //   console.log('Checkbox Value:', this.car.isAirConditioned);
//   // }
  
  
  }



