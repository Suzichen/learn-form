import { LoginComponent } from './login/login.component';
import { RegisterComponent } from "./register/register.component";
import { UserDataComponent } from "./user-data/user-data.component";

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
    {
		path: "userData",
		component: UserDataComponent
	}
]