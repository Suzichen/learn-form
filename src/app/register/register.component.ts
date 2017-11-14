import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
    selector: 'form-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class RegisterComponent implements OnInit {

    private userForm:FormGroup;
    private userInfo:User = new User();

    private formErrors = {
        userName: '',
        nickName: '',
        email: '',
        password: '',
        confirmPassword: '',
        formError: '',
        vcode: ''
      };

    private buidForm() {
        this.userForm = this.fb.group({
            userName: [
                this.userInfo.userName,
                [
                    Validators.required
                ]
            ],
            email: [
                this.userInfo.email,
                [
                    Validators.required
                ]
            ],
            nickName: [
                this.userInfo.nickName,
                [
                    Validators.required
                ]
            ],
            password: [
                this.userInfo.password
            ],
            confirmPassword: [
                this.userInfo.confirmPassword
            ],
            vcode: [
                this.userInfo.vcode,
                [
                    Validators.required
                ]
            ]
        })
    }

    constructor(
        private fb:FormBuilder
    ) { }

    ngOnInit() {
        this.buidForm();
    }

    doRegister() {

    }

}
export class User {
    userId:string;
    userName: string;
    nickName: string;
    password: string;
    remeberMe:boolean;
    email: string;
    token:string;
    confirmPassword: string;
    vcode:string;
}