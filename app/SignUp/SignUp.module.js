"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var SignUp_routing_module_1 = require("./SignUp-routing.module");
var SignUp_component_1 = require("./SignUp.component");
var nativescript_angular_1 = require("nativescript-angular");
var SignUpModule = /** @class */ (function () {
    function SignUpModule() {
    }
    SignUpModule = __decorate([
        core_1.NgModule({
            imports: [
                nativescript_module_1.NativeScriptModule,
                SignUp_routing_module_1.SignUpRoutingModule,
                nativescript_angular_1.NativeScriptFormsModule
            ],
            declarations: [
                SignUp_component_1.SignUpComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], SignUpModule);
    return SignUpModule;
}());
exports.SignUpModule = SignUpModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnblVwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNpZ25VcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUQ7QUFDekQsZ0ZBQTRFO0FBRTVFLGlFQUE0RDtBQUM1RCx1REFBbUQ7QUFDbkQsNkRBQTZEO0FBZTdEO0lBQUE7SUFDQSxDQUFDO0lBRFksWUFBWTtRQWJ4QixlQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwyQ0FBbUI7Z0JBQ25CLDhDQUF1QjthQUMxQjtZQUNELFlBQVksRUFBRTtnQkFDVixrQ0FBZTthQUNsQjtZQUNELE9BQU8sRUFBRTtnQkFDTCx1QkFBZ0I7YUFDbkI7U0FDSixDQUFDO09BQ1csWUFBWSxDQUN4QjtJQUFELG1CQUFDO0NBQUEsQUFERCxJQUNDO0FBRFksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge05nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRNb2R1bGV9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5cbmltcG9ydCB7U2lnblVwUm91dGluZ01vZHVsZX0gZnJvbSBcIi4vU2lnblVwLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQge1NpZ25VcENvbXBvbmVudH0gZnJvbSBcIi4vU2lnblVwLmNvbXBvbmVudFwiO1xuaW1wb3J0IHtOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZX0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyXCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRNb2R1bGUsXG4gICAgICAgIFNpZ25VcFJvdXRpbmdNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgU2lnblVwQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25VcE1vZHVsZSB7XG59XG4iXX0=