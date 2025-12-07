import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ForumComponent } from './pages/forum/forum.component';
import { CursoComponent } from './pages/curso/curso.component';
import { CreditosComponent } from './pages/creditos/creditos.component';
import { AuthGuard } from './auth.guard';
import { FaqsComponent } from './pages/faq/faq.component';

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
        component: ForumComponent
    },
    {
        path: 'curso',
        component: CursoComponent
    },
    {
        path: 'creditos',
        component: CreditosComponent
    },
    {
        path: 'faqs',
        component: FaqsComponent
    },
    { 
        path: '**', 
        redirectTo: 'home' 
   }
];
