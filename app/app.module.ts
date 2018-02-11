import {NgModule, NO_ERRORS_SCHEMA} from "@angular/core";
import {NativeScriptModule} from "nativescript-angular/nativescript.module";
import {NativeScriptFormsModule} from "nativescript-angular/forms";

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";

//pages
import {LoginModule} from "./Login/Login.module";
import {SignUpModule} from "./SignUp/SignUp.module";
import {ForgotPasswordModule} from "./ForgotPassword/ForgotPassword.module";

//plugins
import {Feedback} from "nativescript-feedback";

//services
import {FireBaseService} from "./services/firebase-service";
import {FeedbackService} from "./services/feedback-service";
import {LoadingIndicator} from "nativescript-loading-indicator";
import {IsEmailDirective, MinLengthDirective} from "./services/directives";


@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule,
        NativeScriptFormsModule,
        //pages
        LoginModule,
        SignUpModule,
        ForgotPasswordModule
    ],
    declarations: [
        AppComponent,
        MinLengthDirective,
        IsEmailDirective
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    providers:[
        Feedback,
        LoadingIndicator,
        FireBaseService,
        FeedbackService
    ]
})
export class AppModule {
}
