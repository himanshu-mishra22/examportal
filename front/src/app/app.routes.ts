import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { LoginComponent } from '../pages/login/login.component';
import { SignupComponent } from '../pages/signup/signup.component';
import { AdminComponent } from '../pages/admin/admin.component';
import { UserComponent } from '../pages/user/user.component';
import { adminGuard } from './services/admin.guard';
import { normalGuard } from './services/normal.guard';
import { ProfileComponent } from '../pages/profile/profile.component';
import { FrontComponent } from '../pages/admin/front/front.component';

export const routes: Routes = [
    {path:"",
     component : HomeComponent,
     pathMatch: "full"
    },
    {path:'login',
        component : LoginComponent,
        pathMatch: "full"
       },
       {path:'signup',
        component : SignupComponent,
        pathMatch: "full"
       },
       {path:'admin',
        component : AdminComponent,
        canActivate:[adminGuard],
        children:[
            {
                path:'profile',
                component:ProfileComponent,
            },
            {
                path:'',
                component:FrontComponent,
            }

        ]

       },
       {path:'user',
        component : UserComponent,
        pathMatch: "full",
        canActivate:[normalGuard],
       }
];
