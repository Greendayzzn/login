import { LoginSuccessComponent } from './view/login-success/login-success.component';
import { RegisterComponent } from './view/register/register.component';
import { LoginComponent } from './view/login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './view/index/index.component'

const routes: Routes = [
  {
    //注册详情页
    path: "index",
    component: IndexComponent,
  },
  //
  {
    path: "login",
    component: LoginComponent,
  },
  //主界面
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "loginSuccess",
    component: LoginSuccessComponent,
  },
  { path: '', redirectTo: '/register', pathMatch: 'full' },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }