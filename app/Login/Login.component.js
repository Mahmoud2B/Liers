"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var firebase_service_1 = require("../services/firebase-service");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(page, firbase) {
        this.page = page;
        this.firbase = firbase;
        page.actionBarHidden = true;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.onSigninButtonTap = function () {
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: "Login",
            moduleId: module.id,
            templateUrl: "./Login.component.html",
            styleUrls: ["./login.scss"]
        }),
        __metadata("design:paramtypes", [page_1.Page, firebase_service_1.FireBaseService])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiTG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWdEO0FBQ2hELGdDQUE2QjtBQUM3QixpRUFBNkQ7QUFPN0Q7SUFJSSx3QkFBb0IsSUFBVSxFQUFZLE9BQXVCO1FBQTdDLFNBQUksR0FBSixJQUFJLENBQU07UUFBWSxZQUFPLEdBQVAsT0FBTyxDQUFnQjtRQUM3RCxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNoQyxDQUFDO0lBRUQsaUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFUywwQ0FBaUIsR0FBM0I7SUFFQSxDQUFDO0lBYlEsY0FBYztRQU4xQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLE9BQU87WUFDakIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx3QkFBd0I7WUFDckMsU0FBUyxFQUFFLENBQUMsY0FBYyxDQUFDO1NBQzlCLENBQUM7eUNBSzRCLFdBQUksRUFBb0Isa0NBQWU7T0FKeEQsY0FBYyxDQWUxQjtJQUFELHFCQUFDO0NBQUEsQUFmRCxJQWVDO0FBZlksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgT25Jbml0fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtQYWdlfSBmcm9tIFwidWkvcGFnZVwiO1xuaW1wb3J0IHtGaXJlQmFzZVNlcnZpY2V9IGZyb20gXCIuLi9zZXJ2aWNlcy9maXJlYmFzZS1zZXJ2aWNlXCI7XG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJMb2dpblwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9Mb2dpbi5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9sb2dpbi5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIExvZ2luQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByb3RlY3RlZCBmaXJiYXNlOkZpcmVCYXNlU2VydmljZSkge1xuICAgICAgICBwYWdlLmFjdGlvbkJhckhpZGRlbiA9IHRydWU7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uU2lnbmluQnV0dG9uVGFwKCk6IHZvaWQge1xuXG4gICAgfVxuXG59XG4iXX0=