import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CarsComponent } from './components/cars/cars.component';
import { UsersComponent } from './components/users/users.component';
import { OrdersComponent } from './components/orders/orders.component';
import { AdminComponent } from './components/admin/admin.component';
import { EditCarDialogComponent } from './components/edit-car-dialog/edit-car-dialog.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'cars', component: CarsComponent },
    { path: 'users', component: UsersComponent },
    { path: 'orders', component: OrdersComponent },
    {path:'admin',component: AdminComponent},
    {path:'editCar',component:EditCarDialogComponent},
    // Redirect to home by default
    { path: '', redirectTo: '/home', pathMatch: 'full' },

];
