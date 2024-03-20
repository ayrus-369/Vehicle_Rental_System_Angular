import { Component } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { Admin } from '../../model/admin';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EditAdminDialogComponent } from '../edit-admin-dialog/edit-admin-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-admin-profile',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './admin-profile.component.html',
  styleUrl: './admin-profile.component.css'
})
export class AdminProfileComponent {
  admin:Admin=new Admin();
constructor(private adminService:AdminService,private dialog: MatDialog){
this.adminService.getAdmin().subscribe(
  {
    next:(data: Admin)=>{
          this.admin=data;
        },
      error:(error)=>{console.log("Error Occured")}
     
  }
)
}
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
updateAdmin(admin:Admin){
  const dialogRef=this.dialog.open(EditAdminDialogComponent,{
    width:'600px',
    data:admin,
  });
  dialogRef.afterClosed().subscribe(result => {
    if (result) {
      // console.log(result.isActive);
      console.log(result);
   
      
      // Process the result here (e.g., save the car)
      this.adminService.updateAdmin(result).subscribe(
        {
          next:(data)=>{
            console.log(data);
            // this.message = "Vehicle Updated";
            // this.openSnackBar(this.message,  this.duration);
          },
          error:(err)=>{
            console.log(err);
            // this.errorMessage = err.error;
          },
          complete:()=>{
            console.log("Server completed sending data");
          }
        }
      )

    }
  });

}
}
