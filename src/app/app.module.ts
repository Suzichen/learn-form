import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { formsRouter } from './app.routes';


import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { EqualValidator } from "./register/directives/equal-validator.directive";
import { ChineseMobileValidator } from './register/directives/mobile-validator.directive';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EqualValidator,
    ChineseMobileValidator
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(formsRouter)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
