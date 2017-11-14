import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";

export const formsRouter = [
    {
		path:'',
		redirectTo:'login',
		pathMatch:'full'
	},
    {
		path: "login",
		component: LoginComponent
    },
    {
		path: "register",
		component: RegisterComponent
	},
]