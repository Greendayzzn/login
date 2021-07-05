import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//数据双向绑定
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { IndexComponent } from './view/index/index.component';
import { AppRoutingModule } from './/app-routing.module';
import { LoginComponent } from './view/login/login.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginSuccessComponent } from './view/login-success/login-success.component';
import { LoginErrorComponent } from './view/login-error/login-error.component';



@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    LoginComponent,
    RegisterComponent,
    LoginSuccessComponent,
    LoginErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
