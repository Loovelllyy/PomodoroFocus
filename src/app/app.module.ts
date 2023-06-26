import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainComponent } from './pages/main/main.component';
import { MusicBarComponent } from './shared/music-bar/music-bar.component';
import {MatTabsModule} from "@angular/material/tabs";
import { ProgressBarComponent } from './shared/progress-bar/progress-bar.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import { TimerComponent } from './shared/timer/timer.component';
import { WaveBgComponent } from './shared/wave-bg/wave-bg.component';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatSidenavModule} from "@angular/material/sidenav";
import { MenuListComponent } from './shared/menu-list/menu-list.component';
import {MatListModule} from "@angular/material/list";
import { TodoComponent } from './pages/todo/todo.component';
import {MatCardModule} from "@angular/material/card";
import { TodoCardComponent } from './shared/todo-card/todo-card.component';
import { PomodoroComponent } from './pages/pomodoro/pomodoro.component';
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {LoginModule} from "./login/login.module";

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    MusicBarComponent,
    ProgressBarComponent,
    TimerComponent,
    WaveBgComponent,
    MenuListComponent,
    TodoComponent,
    TodoCardComponent,
    PomodoroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatProgressBarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatInputModule,
    ReactiveFormsModule,
    LoginModule
  ],
  providers: [],
  exports: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
