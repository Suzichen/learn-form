import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Base, Image, Textarea, TextBox } from './dynamic-form/forms';

@Component({
    selector: 'form-user-data',
    templateUrl: './user-data.component.html',
    styleUrls: ['./user-data.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class UserDataComponent implements OnInit {

    public fields: Base<any>[] = [
        new Image({
            key: "logo",
            src: 'https://angular.io/assets/images/logos/angular/logo-nav@2x.png'
        }),
        new TextBox({
            key: "avatar",
            label: "头像:",
            placeholder: "上传头像",
            type: "file"
        }), 
        new TextBox({
            key: "userName",
            label: "用户名:",
            placeholder: "用户名"
        }), 
        new TextBox({
            key: "email",
            label: "常用邮箱:",
            placeholder: "常用邮箱"
        }), 
        new TextBox({
            key: "password",
            label: "密码:",
            type: "password",
            placeholder: "密码，至少8位"
        }), 
        new TextBox({
            key: "confirmPassword",
            label: "重复密码:",
            type: "password",
            placeholder: "重复密码"
        }), 
        new Textarea({
            key: "description",
            label: "个人简介:",
            placeholder: "个人简介，最多140字，不能放链接。",
            rows: 3,
        })
    ]

    public form:FormGroup;

    constructor() { }

    ngOnInit() {
        this.form = this.toFormGroup(this.fields);
        console.log(this.form);
    }

    toFormGroup(fields: Base<any>[]) {
        let group: any = {};

        fields.forEach(field => {
            // 用每个field的key值作为group对象每一项的名字，
            // 构建FormControl并存入group对象
            group[field.key] = new FormControl(field.value || '');
        });
        console.log(group)
        // 构建整个FormGroup
        return new FormGroup(group);
    }

    doChangeInfo() {
        console.log(this.form.value);
        alert("控制台查看输出结果");
    }

}
