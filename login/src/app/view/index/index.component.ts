import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'
import axios from 'axios';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
  
export class IndexComponent implements OnInit {
  user: any = {
    username: '',
    password: '',
    number: '',
    email: '',
    address: ''
  };
  async submmitForm() {
    console.log(this.user)
    let result = await axios.post('http://localhost:8090/user/register', {
      name: this.user.username,
      password: this.user.password,
      phone: this.user.number,
      address: this.user.address,
      email: this.user.email

    })
    console.log(result.data)
    if (result.data.status === 400 && result.data.message) {
      alert(result.data.message)
    } else if (result.data.status === 200 && result.data.message) {
      //注册成功后跳转到登录界面
      this.router.navigate(['/register'],);
    }
  }

  address: ''

  constructor(public router: Router,) {
   }

  ngOnInit() {
  }

}
