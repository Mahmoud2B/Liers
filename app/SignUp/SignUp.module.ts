import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {SignUpRoutingModule} from "./SignUp-routing.module";
import {SignUpComponent} from "./SignUp.component";
import {NativeScriptFormsModule} from "nativescript-angular";

@NgModule({
    imports: [
        NativeScriptModule,
        SignUpRoutingModule,
        NativeScriptFormsModule
    ],
    declarations: [
        SignUpComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class SignUpModule {
}
