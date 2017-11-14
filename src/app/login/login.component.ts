import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { User } from "../register/register.component";

@Component({
    selector: 'form-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class LoginComponent implements OnInit {
    public user:User = new User();
    
    public forgetPsw:boolean = false;

    constructor() { }

    ngOnInit() {
    }

    public doLogin():void{
        console.log(this.user)
        alert('验证成功')
    }

    public forgetPwd():void{
        this.forgetPsw = true;
    }

    public sendValidationEmail():void {
        alert('验证成功')
    }
}
