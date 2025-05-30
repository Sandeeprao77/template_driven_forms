import { Routes } from '@angular/router';
import { TdfComponent } from './tdf/tdf.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    { path: '', component: TdfComponent },
    {path:'login' , component:LoginComponent}
];
