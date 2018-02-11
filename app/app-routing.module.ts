import {NgModule} from "@angular/core";
import {Routes} from "@angular/router";
import {NativeScriptRouterModule} from "nativescript-angular/router";

import {LoginComponent} from "./Login/Login.component";
import {SignUpComponent} from "./SignUp/SignUp.component";
import {ForgotPasswordComponent} from "./ForgotPassword/ForgotPassword.component";

const routes: Routes = [
    {path: "", redirectTo: "/login", pathMatch: "full"},
    {path: "login", component: LoginComponent},
    {path: "signup", component: SignUpComponent},
    {path: "forgotpassword", component: ForgotPasswordComponent},
    {path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule"}
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule {
}
