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

    // 错误信息列表缓存
    private formErrorsList = {
        userName: '',
        nickName: '',
        email: '',
        telephone: '',
        password: '',
        confirmPassword: '',
        formError: '',
        vcode: ''
    };
    // 错误信息
    private formErrorsMsg = {
        userName: {
            required: '请输入用户名。',
            minlength: '用户名2到32个字符。'
        },
        nickName: {
            required: '请输入昵称。',
            minlength: '昵称4到32个字符。'
        },
        telephone: {
            required: '请输入手机号'
        },
        email: {
            required: '请输入邮箱。',
            pattern: '请输入正确的邮箱地址。'
        },
        password: {
            required: '请输入密码。',
            minlength: '密码至少要8位。'
        },
        confirmPassword: {
            required: '请确认密码的一致性。',
            minlength: '密码至少要8位。',
            validateEqual: '两次输入的密码不一致。'
        },
        vcode: {
            required: '请输入验证码。',
            minlength: '6位验证码。',
            maxlength: '6位验证码。'
        }
    };
    // 构建表单及验证方法
    private buidForm() {
        this.userForm = this.fb.group({
            userName: [
                this.userInfo.userName,
                [
                    Validators.required,
                    Validators.minLength(2),
                    Validators.maxLength(32)
                ]
            ],
            email: [
                this.userInfo.email,
                [
                    Validators.required,
                    Validators.pattern('^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$')
                ]
            ],
            telephone: [
                this.userInfo.telephone,
                [
                    Validators.required
                ]
            ],
            nickName: [
                this.userInfo.nickName,
                [
                    Validators.required,
                    Validators.minLength(4),
                    Validators.maxLength(32)
                ]
            ],
            password: [
                this.userInfo.password,
                [
                    Validators.required,
                    Validators.minLength(8)
                ]
            ],
            confirmPassword: [
                this.userInfo.confirmPassword,
                [
                    Validators.required,
                    Validators.minLength(8)
                ]
            ],
            vcode: [
                this.userInfo.vcode,
                [
                    Validators.required,
                    Validators.minLength(6),
                    Validators.maxLength(6)
                ]
            ]
        })
    }

    constructor(
        private fb:FormBuilder
    ) { }

    ngOnInit() {
        this.buidForm();
        this.userForm.valueChanges
            .subscribe(value => this.onValueChange(value));
    }

    onValueChange(value) {
        if (!this.userForm) {
            return;
        }
        // 取到总表单
        const form = this.userForm;
        // 循环错误信息的列表
        for (const formItem in this.formErrorsList) {
            // 清除缓存
            this.formErrorsList[formItem] = '';
            // 取到当前的FormControl
            const control = form.get(formItem);
            // 如果此FormControl存在 且 没有校验成功 且 被修改过
            if (control && !control.valid && control.dirty) {
                // 取到此FormControl的错误信息库存
                const msgs = this.formErrorsMsg[formItem];
                // 循环此FormControl的实际错误信息列表
                for (const msg in control.errors) {
                    // 往缓存中添加错误信息
                    this.formErrorsList[formItem] += msgs[msg] + '';
                }
            }
        }
    }

    doRegister() {
        alert('你通过了表单校验')
    }

}
export class User {
    userId:string;
    userName: string;
    nickName: string;
    password: string;
    remeberMe:boolean;
    email: string;
    telephone:string;
    confirmPassword: string;
    vcode:string;
}