import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
    { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full' 
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'forum',
        component: ForumComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'curso',
        component: CursoComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'creditos',
        component: CreditosComponent,
        canActivate: [AuthGuard]
    },
    { 
        path: '**', 
        redirectTo: 'home' 
   }
];
