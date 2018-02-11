import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { ForgotPasswordRoutingModule } from "./ForgotPassword-routing.module";
import { ForgotPasswordComponent } from "./ForgotPassword.component";

@NgModule({
    imports: [
        NativeScriptModule,
        ForgotPasswordRoutingModule
    ],
    declarations: [
        ForgotPasswordComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class ForgotPasswordModule { }
