"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var Login_component_1 = require("./Login/Login.component");
var SignUp_component_1 = require("./SignUp/SignUp.component");
var routes = [
    { path: "", redirectTo: "/login", pathMatch: "full" },
    { path: "login", component: Login_component_1.LoginComponent },
    { path: "signup", component: SignUp_component_1.SignUpComponent },
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXVDO0FBRXZDLHNEQUFxRTtBQUVyRSwyREFBc0Q7QUFDdEQsOERBQTBEO0FBRTFELElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRSxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUM7SUFDbkQsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFDO0lBQzFDLEVBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxTQUFTLEVBQUUsa0NBQWUsRUFBQztJQUM1QyxFQUFDLElBQUksRUFBRSxNQUFNLEVBQUUsWUFBWSxFQUFFLCtCQUErQixFQUFDO0NBQ2hFLENBQUM7QUFNRjtJQUFBO0lBQ0EsQ0FBQztJQURZLGdCQUFnQjtRQUo1QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDbkQsT0FBTyxFQUFFLENBQUMsaUNBQXdCLENBQUM7U0FDdEMsQ0FBQztPQUNXLGdCQUFnQixDQUM1QjtJQUFELHVCQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksNENBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7Um91dGVzfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQge05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQge0xvZ2luQ29tcG9uZW50fSBmcm9tIFwiLi9Mb2dpbi9Mb2dpbi5jb21wb25lbnRcIlxuaW1wb3J0IHtTaWduVXBDb21wb25lbnR9IGZyb20gXCIuL1NpZ25VcC9TaWduVXAuY29tcG9uZW50XCI7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHtwYXRoOiBcIlwiLCByZWRpcmVjdFRvOiBcIi9sb2dpblwiLCBwYXRoTWF0Y2g6IFwiZnVsbFwifSxcbiAgICB7cGF0aDogXCJsb2dpblwiLCBjb21wb25lbnQ6IExvZ2luQ29tcG9uZW50fSxcbiAgICB7cGF0aDogXCJzaWdudXBcIiwgY29tcG9uZW50OiBTaWduVXBDb21wb25lbnR9LFxuICAgIHtwYXRoOiBcInRhYnNcIiwgbG9hZENoaWxkcmVuOiBcIi4vdGFicy90YWJzLm1vZHVsZSNUYWJzTW9kdWxlXCJ9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yUm9vdChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHtcbn1cbiJdfQ==