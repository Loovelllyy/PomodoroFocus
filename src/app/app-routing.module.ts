import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MainComponent} from "./pages/main/main.component";
import {AppComponent} from "./app.component";
import {TodoComponent} from "./pages/todo/todo.component";
import {LoginComponent} from "./login/login.component";
import {PomodoroComponent} from "./pages/pomodoro/pomodoro.component";

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
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
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
