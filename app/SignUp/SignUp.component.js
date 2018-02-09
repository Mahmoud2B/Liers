"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var nativescript_feedback_1 = require("nativescript-feedback");
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(page, feedBack) {
        this.page = page;
        this.feedBack = feedBack;
        page.actionBarHidden = true;
        this.feedBack = new nativescript_feedback_1.Feedback();
    }
    SignUpComponent.prototype.ngOnInit = function () {
    };
    SignUpComponent.prototype.onSignUpButtonTap = function () {
    };
    SignUpComponent.prototype.showFeedBack = function () {
        this.feedBack.success({
            message: "Easiest thing ever, right?"
        });
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: "SignUp",
            moduleId: module.id,
            templateUrl: "./SignUp.component.html",
            styleUrls: ['./SignUp.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page, nativescript_feedback_1.Feedback])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnblVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNpZ25VcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsZ0NBQTZCO0FBQzdCLCtEQUErRTtBQVEvRTtJQUNJLHlCQUFvQixJQUFVLEVBQVUsUUFBa0I7UUFBdEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVU7UUFDdEQsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDNUIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLGdDQUFRLEVBQUUsQ0FBQztJQUNuQyxDQUFDO0lBRUQsa0NBQVEsR0FBUjtJQUNBLENBQUM7SUFFUywyQ0FBaUIsR0FBM0I7SUFFQSxDQUFDO0lBRVMsc0NBQVksR0FBdEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQztZQUNsQixPQUFPLEVBQUUsNEJBQTRCO1NBQ3hDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFqQlEsZUFBZTtRQU4zQixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFFBQVE7WUFDbEIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSx5QkFBeUI7WUFDdEMsU0FBUyxFQUFFLENBQUMsZUFBZSxDQUFDO1NBQy9CLENBQUM7eUNBRTRCLFdBQUksRUFBb0IsZ0NBQVE7T0FEakQsZUFBZSxDQWtCM0I7SUFBRCxzQkFBQztDQUFBLEFBbEJELElBa0JDO0FBbEJZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIE9uSW5pdH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7UGFnZX0gZnJvbSBcInVpL3BhZ2VcIjtcbmltcG9ydCB7RmVlZGJhY2ssIEZlZWRiYWNrVHlwZSwgRmVlZGJhY2tQb3NpdGlvbn0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mZWVkYmFja1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJTaWduVXBcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vU2lnblVwLmNvbXBvbmVudC5odG1sXCIsXG4gICAgc3R5bGVVcmxzOiBbJy4vU2lnblVwLnNjc3MnXVxufSlcbmV4cG9ydCBjbGFzcyBTaWduVXBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSwgcHJpdmF0ZSBmZWVkQmFjazogRmVlZGJhY2spIHtcbiAgICAgICAgcGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmZlZWRCYWNrID0gbmV3IEZlZWRiYWNrKCk7XG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIG9uU2lnblVwQnV0dG9uVGFwKCk6IHZvaWQge1xuXG4gICAgfVxuXG4gICAgcHJvdGVjdGVkIHNob3dGZWVkQmFjaygpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5mZWVkQmFjay5zdWNjZXNzKHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IFwiRWFzaWVzdCB0aGluZyBldmVyLCByaWdodD9cIlxuICAgICAgICB9KTtcbiAgICB9XG59XG4iXX0=