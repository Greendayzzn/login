import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    public router: Router,
    // public activatedRoute: ActivatedRoute
  ) { }
  user: any = {
    number: '',
    password:''
  }
  result:any
  addClick(event: any) {
    this.router.navigate(['/index'],);
  }
  loginClick(event: any) {
    //调取接口
    this.judgeLogin().then(res => {
      if (this.result.data.status === 200 && this.result.data.message) {
      //跳转
        this.router.navigate(['/loginSuccess'],);
      } else {
        //注册成功后跳转到登录界面
        alert("登录失败")
        this.user=''
      }
    })
    // this.router.navigate(['/index'],);
  }
  async judgeLogin() {
    this.result = await axios.post('http://localhost:8090/user/login', {
      password: this.user.password,
      phone: this.user.number,
    })
    console.log(this.result)
  }

  ngOnInit() {
  }

}
