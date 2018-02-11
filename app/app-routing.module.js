"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Login_component_1 = require("./Login/Login.component");
var SignUp_component_1 = require("./SignUp/SignUp.component");
var ForgotPassword_component_1 = require("./ForgotPassword/ForgotPassword.component");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: Login_component_1.LoginComponent },
    { path: "signup", component: SignUp_component_1.SignUpComponent },
    { path: "forgotpassword", component: ForgotPassword_component_1.ForgotPasswordComponent },
    { path: "tabs", loadChildren: "./tabs/tabs.module#TabsModule" }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forRoot(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVDO0FBRXZDLHNEQUFxRTtBQUVyRSwyREFBdUQ7QUFDdkQsOERBQTBEO0FBQzFELHNGQUFrRjtBQUVsRixJQUFNLE1BQU0sR0FBVztJQUNuQixFQUFDLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsTUFBTSxFQUFDO0lBQ25ELEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBQztJQUMxQyxFQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsU0FBUyxFQUFFLGtDQUFlLEVBQUM7SUFDNUMsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLGtEQUF1QixFQUFDO0lBQzVELEVBQUMsSUFBSSxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUUsK0JBQStCLEVBQUM7Q0FDaEUsQ0FBQztBQU1GO0lBQUE7SUFDQSxDQUFDO0lBRFksZ0JBQWdCO1FBSjVCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNuRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csZ0JBQWdCLENBQzVCO0lBQUQsdUJBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtSb3V0ZXN9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7TmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7TG9naW5Db21wb25lbnR9IGZyb20gXCIuL0xvZ2luL0xvZ2luLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtTaWduVXBDb21wb25lbnR9IGZyb20gXCIuL1NpZ25VcC9TaWduVXAuY29tcG9uZW50XCI7XG5pbXBvcnQge0ZvcmdvdFBhc3N3b3JkQ29tcG9uZW50fSBmcm9tIFwiLi9Gb3Jnb3RQYXNzd29yZC9Gb3Jnb3RQYXNzd29yZC5jb21wb25lbnRcIjtcblxuY29uc3Qgcm91dGVzOiBSb3V0ZXMgPSBbXG4gICAge3BhdGg6IFwiXCIsIHJlZGlyZWN0VG86IFwiL2xvZ2luXCIsIHBhdGhNYXRjaDogXCJmdWxsXCJ9LFxuICAgIHtwYXRoOiBcImxvZ2luXCIsIGNvbXBvbmVudDogTG9naW5Db21wb25lbnR9LFxuICAgIHtwYXRoOiBcInNpZ251cFwiLCBjb21wb25lbnQ6IFNpZ25VcENvbXBvbmVudH0sXG4gICAge3BhdGg6IFwiZm9yZ290cGFzc3dvcmRcIiwgY29tcG9uZW50OiBGb3Jnb3RQYXNzd29yZENvbXBvbmVudH0sXG4gICAge3BhdGg6IFwidGFic1wiLCBsb2FkQ2hpbGRyZW46IFwiLi90YWJzL3RhYnMubW9kdWxlI1RhYnNNb2R1bGVcIn1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KHJvdXRlcyldLFxuICAgIGV4cG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG59KVxuZXhwb3J0IGNsYXNzIEFwcFJvdXRpbmdNb2R1bGUge1xufVxuIl19