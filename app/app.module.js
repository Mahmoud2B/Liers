"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_routing_module_1 = require("./app-routing.module");
var app_component_1 = require("./app.component");
//pages
var Login_module_1 = require("./Login/Login.module");
var SignUp_module_1 = require("./SignUp/SignUp.module");
var ForgotPassword_module_1 = require("./ForgotPassword/ForgotPassword.module");
//plugins
var nativescript_feedback_1 = require("nativescript-feedback");
//services
var firebase_service_1 = require("./services/firebase-service");
var feedback_service_1 = require("./services/feedback-service");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var directives_1 = require("./services/directives");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [
                app_component_1.AppComponent
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                app_routing_module_1.AppRoutingModule,
                forms_1.NativeScriptFormsModule,
                //pages
                Login_module_1.LoginModule,
                SignUp_module_1.SignUpModule,
                ForgotPassword_module_1.ForgotPasswordModule
            ],
            declarations: [
                app_component_1.AppComponent,
                directives_1.MinLengthDirective,
                directives_1.IsEmailDirective
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ],
            providers: [
                nativescript_feedback_1.Feedback,
                nativescript_loading_indicator_1.LoadingIndicator,
                firebase_service_1.FireBaseService,
                feedback_service_1.FeedbackService
            ]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBQzVFLG9EQUFtRTtBQUVuRSwyREFBc0Q7QUFDdEQsaURBQTZDO0FBRTdDLE9BQU87QUFDUCxxREFBaUQ7QUFDakQsd0RBQW9EO0FBQ3BELGdGQUE0RTtBQUU1RSxTQUFTO0FBQ1QsK0RBQStDO0FBRS9DLFVBQVU7QUFDVixnRUFBNEQ7QUFDNUQsZ0VBQTREO0FBQzVELGlGQUFnRTtBQUNoRSxvREFBMkU7QUErQjNFO0lBQUE7SUFDQSxDQUFDO0lBRFksU0FBUztRQTVCckIsZUFBUSxDQUFDO1lBQ04sU0FBUyxFQUFFO2dCQUNQLDRCQUFZO2FBQ2Y7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQixxQ0FBZ0I7Z0JBQ2hCLCtCQUF1QjtnQkFDdkIsT0FBTztnQkFDUCwwQkFBVztnQkFDWCw0QkFBWTtnQkFDWiw0Q0FBb0I7YUFDdkI7WUFDRCxZQUFZLEVBQUU7Z0JBQ1YsNEJBQVk7Z0JBQ1osK0JBQWtCO2dCQUNsQiw2QkFBZ0I7YUFDbkI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1lBQ0QsU0FBUyxFQUFDO2dCQUNOLGdDQUFRO2dCQUNSLGlEQUFnQjtnQkFDaEIsa0NBQWU7Z0JBQ2Ysa0NBQWU7YUFDbEI7U0FDSixDQUFDO09BQ1csU0FBUyxDQUNyQjtJQUFELGdCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvZm9ybXNcIjtcblxuaW1wb3J0IHtBcHBSb3V0aW5nTW9kdWxlfSBmcm9tIFwiLi9hcHAtcm91dGluZy5tb2R1bGVcIjtcbmltcG9ydCB7QXBwQ29tcG9uZW50fSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbi8vcGFnZXNcbmltcG9ydCB7TG9naW5Nb2R1bGV9IGZyb20gXCIuL0xvZ2luL0xvZ2luLm1vZHVsZVwiO1xuaW1wb3J0IHtTaWduVXBNb2R1bGV9IGZyb20gXCIuL1NpZ25VcC9TaWduVXAubW9kdWxlXCI7XG5pbXBvcnQge0ZvcmdvdFBhc3N3b3JkTW9kdWxlfSBmcm9tIFwiLi9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC5tb2R1bGVcIjtcblxuLy9wbHVnaW5zXG5pbXBvcnQge0ZlZWRiYWNrfSBmcm9tIFwibmF0aXZlc2NyaXB0LWZlZWRiYWNrXCI7XG5cbi8vc2VydmljZXNcbmltcG9ydCB7RmlyZUJhc2VTZXJ2aWNlfSBmcm9tIFwiLi9zZXJ2aWNlcy9maXJlYmFzZS1zZXJ2aWNlXCI7XG5pbXBvcnQge0ZlZWRiYWNrU2VydmljZX0gZnJvbSBcIi4vc2VydmljZXMvZmVlZGJhY2stc2VydmljZVwiO1xuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5pbXBvcnQge0lzRW1haWxEaXJlY3RpdmUsIE1pbkxlbmd0aERpcmVjdGl2ZX0gZnJvbSBcIi4vc2VydmljZXMvZGlyZWN0aXZlc1wiO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgYm9vdHN0cmFwOiBbXG4gICAgICAgIEFwcENvbXBvbmVudFxuICAgIF0sXG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIEFwcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICAvL3BhZ2VzXG4gICAgICAgIExvZ2luTW9kdWxlLFxuICAgICAgICBTaWduVXBNb2R1bGUsXG4gICAgICAgIEZvcmdvdFBhc3N3b3JkTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBNaW5MZW5ndGhEaXJlY3RpdmUsXG4gICAgICAgIElzRW1haWxEaXJlY3RpdmVcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF0sXG4gICAgcHJvdmlkZXJzOltcbiAgICAgICAgRmVlZGJhY2ssXG4gICAgICAgIExvYWRpbmdJbmRpY2F0b3IsXG4gICAgICAgIEZpcmVCYXNlU2VydmljZSxcbiAgICAgICAgRmVlZGJhY2tTZXJ2aWNlXG4gICAgXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge1xufVxuIl19