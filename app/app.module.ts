import {NgModule, NgModuleFactoryLoader, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LoginModule} from "./Login/Login.module";
import {SignUpModule} from "./SignUp/SignUp.module";

import {Feedback} from "nativescript-feedback";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        LoginModule,
        SignUpModule
    ],
    declarations: [
        AppComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers:[
        Feedback
    ]
})
export class AppModule {
}
