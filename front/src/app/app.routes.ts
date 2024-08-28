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
import { ViewCategoryComponent } from '../pages/admin/view-category/view-category.component';
import { AddCategoryComponent } from '../pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from '../pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizzesComponent } from '../pages/admin/add-quizzes/add-quizzes.component';
import { UpdateQuizComponent } from '../pages/admin/update-quiz/update-quiz.component';
import { ViewQuestionsComponent } from '../pages/admin/view-questions/view-questions.component';
import { AddQuestionComponent } from '../pages/admin/add-question/add-question.component';
import { UpdateProfileComponent } from '../pages/profile/update-profile/update-profile.component';
import { LoadQuizComponent } from '../pages/user/load-quiz/load-quiz.component';
import { InstructionPageComponent } from '../pages/user/instruction-page/instruction-page.component';
import { StartQuizComponent } from '../pages/user/start-quiz/start-quiz.component';
import { AttemptsComponent } from '../pages/admin/attempts/attempts.component';
import { UserProfileComponent } from '../pages/user/user-profile/user-profile.component';
import { UpdateQuestionComponent } from '../pages/admin/update-question/update-question.component';

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
                component:ProfileComponent,
            },
            {
                path:'view-category',
                component:ViewCategoryComponent,
            },
            {
                path:'add-category',
                component:AddCategoryComponent,
            },
            {
                path:'view-quizzes',
                component:ViewQuizzesComponent,
            },
            {
                path:'add-quizzes',
                component:AddQuizzesComponent,
            },
            {
                path:'quiz/:qid',
                component:UpdateQuizComponent,
            },
            {
                path:'view-ques/:qid/:qtitle',
                component:ViewQuestionsComponent,
            },
            {
                path:'add-ques/:qid/:qtitle',
                component:AddQuestionComponent,
            },
            {
                path:'profile/update-profile/:userId',
                component:UpdateProfileComponent,
            },
            {
                path:'attempt/:qid/:qtitle',
                component:AttemptsComponent,
            },
            {
                path:'question/:quesid',
                component:UpdateQuestionComponent,
            }
            

        ]

       },
       {path:'user',
        component : UserComponent,
        canActivate:[normalGuard],
        children:[
            {
                path:':cid',
                component:LoadQuizComponent,
            },
            {
                path:'instructions/:qid',
                component:InstructionPageComponent,
            },
            {
                path:'user-profile',
                component:UserProfileComponent,
                
            },
            {
                path:'',
                component:UserProfileComponent,
                
            },
            {
                path:'profile/update-profile/:userId',
                component:UpdateProfileComponent,
            },
           

        ]},
       {
        path:'start/:qid',
        canActivate:[normalGuard],
        component:StartQuizComponent,
    }
];
