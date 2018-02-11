"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
//services
var feedback_service_1 = require("../services/feedback-service");
var firebase_service_1 = require("../services/firebase-service");
var user_1 = require("../data/user");
//data
var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(page, feedBack, fireBase) {
        this.page = page;
        this.feedBack = feedBack;
        this.fireBase = fireBase;
        page.actionBarHidden = true;
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.user = new user_1.User({});
    };
    SignUpComponent.prototype.onSignUpButtonTap = function () {
        console.log(JSON.stringify(this.user));
        this.fireBase.registerNewUser(this.user.email, this.user.password);
    };
    SignUpComponent.prototype.showFeedBack = function () {
        this.feedBack.showSlidingNotification("success", "GG ez");
    };
    SignUpComponent = __decorate([
        core_1.Component({
            selector: "SignUp",
            moduleId: module.id,
            templateUrl: "./SignUp.component.html",
            styleUrls: ['./SignUp.scss']
        }),
        __metadata("design:paramtypes", [page_1.Page, feedback_service_1.FeedbackService, firebase_service_1.FireBaseService])
    ], SignUpComponent);
    return SignUpComponent;
}());
exports.SignUpComponent = SignUpComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2lnblVwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIlNpZ25VcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBZ0Q7QUFDaEQsZ0NBQTZCO0FBQzdCLFVBQVU7QUFDVixpRUFBNkQ7QUFDN0QsaUVBQTZEO0FBQzdELHFDQUFpRDtBQUlqRCxNQUFNO0FBT047SUFJSSx5QkFBb0IsSUFBVSxFQUFVLFFBQXlCLEVBQVUsUUFBeUI7UUFBaEYsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQWlCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDaEcsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7SUFDaEMsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFFUywyQ0FBaUIsR0FBM0I7UUFDSSxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7UUFDdkMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztJQUN2RSxDQUFDO0lBRVMsc0NBQVksR0FBdEI7UUFDSSxJQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxPQUFPLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBbkJRLGVBQWU7UUFOM0IsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUseUJBQXlCO1lBQ3RDLFNBQVMsRUFBRSxDQUFDLGVBQWUsQ0FBQztTQUMvQixDQUFDO3lDQUs0QixXQUFJLEVBQW9CLGtDQUFlLEVBQW9CLGtDQUFlO09BSjNGLGVBQWUsQ0FvQjNCO0lBQUQsc0JBQUM7Q0FBQSxBQXBCRCxJQW9CQztBQXBCWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBPbkluaXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQge1BhZ2V9IGZyb20gXCJ1aS9wYWdlXCI7XG4vL3NlcnZpY2VzXG5pbXBvcnQge0ZlZWRiYWNrU2VydmljZX0gZnJvbSBcIi4uL3NlcnZpY2VzL2ZlZWRiYWNrLXNlcnZpY2VcIjtcbmltcG9ydCB7RmlyZUJhc2VTZXJ2aWNlfSBmcm9tIFwiLi4vc2VydmljZXMvZmlyZWJhc2Utc2VydmljZVwiO1xuaW1wb3J0IHtVc2VySW50ZXJmYWNlLCBVc2VyfSBmcm9tIFwiLi4vZGF0YS91c2VyXCI7XG5pbXBvcnQge2lucHV0VHlwZX0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZGlhbG9nc1wiO1xuaW1wb3J0IHBhc3N3b3JkID0gaW5wdXRUeXBlLnBhc3N3b3JkO1xuXG4vL2RhdGFcbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIlNpZ25VcFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9TaWduVXAuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFsnLi9TaWduVXAuc2NzcyddXG59KVxuZXhwb3J0IGNsYXNzIFNpZ25VcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHVibGljIHVzZXI6IFVzZXJJbnRlcmZhY2U7XG4gICAgcHVibGljIGNvbmZpcm1QYXNzd29yZDpzdHJpbmc7XG5cbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHBhZ2U6IFBhZ2UsIHByaXZhdGUgZmVlZEJhY2s6IEZlZWRiYWNrU2VydmljZSwgcHJpdmF0ZSBmaXJlQmFzZTogRmlyZUJhc2VTZXJ2aWNlKSB7XG4gICAgICAgIHBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy51c2VyID0gbmV3IFVzZXIoe30pO1xuICAgIH1cblxuICAgIHByb3RlY3RlZCBvblNpZ25VcEJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy51c2VyKSk7XG4gICAgICAgIHRoaXMuZmlyZUJhc2UucmVnaXN0ZXJOZXdVc2VyKHRoaXMudXNlci5lbWFpbCwgdGhpcy51c2VyLnBhc3N3b3JkKTtcbiAgICB9XG5cbiAgICBwcm90ZWN0ZWQgc2hvd0ZlZWRCYWNrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmZlZWRCYWNrLnNob3dTbGlkaW5nTm90aWZpY2F0aW9uKFwic3VjY2Vzc1wiLCBcIkdHIGV6XCIpO1xuICAgIH1cbn1cbiJdfQ==