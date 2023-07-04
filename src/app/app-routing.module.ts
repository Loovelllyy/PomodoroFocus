import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {AppComponent} from "./app.component";
import {TodoComponent} from "./pages/todo/todo.component";
import {LoginComponent} from "./login/login.component";
import {PomodoroComponent} from "./pages/pomodoro/pomodoro.component";
import { AuthGuard } from "./shared/guards/auth-guard";

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
    path: '',
    component: AppComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'main',
        component: MainComponent,
      },
      {
        path: 'pomodoro',
        component: PomodoroComponent,
      },
      {
        path: 'todo',
        component: TodoComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
