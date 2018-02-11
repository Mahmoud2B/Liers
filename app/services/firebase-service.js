"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fireBase = require("nativescript-plugin-firebase");
var feedback_service_1 = require("./feedback-service");
// import {DRIVERS} from "./mock-drivers";
var FireBaseService = /** @class */ (function () {
    function FireBaseService(feedback) {
        this.feedback = feedback;
        this.InitFireBase();
    }
    /**
     * Initialize the fireBase configuration
     * */
    FireBaseService.prototype.InitFireBase = function () {
        if (!fireBase.init()) {
            fireBase.init({
                onAuthStateChanged: function (data) {
                    console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                    if (data.loggedIn) {
                        console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
                    }
                }
            }).then(function (instance) {
                console.log("success", "FireBase installed successfully :D");
                console.log(instance);
            }, function (error) {
                console.log("error", "Not installed" + error);
            });
        }
    };
    /**
     * Register new user to app fireBase
     *
     * @param email
     * @param password
     */
    FireBaseService.prototype.registerNewUser = function (email, password) {
        var _this = this;
        this.feedback.showLoading();
        fireBase.createUser({
            email: email,
            password: password
        }).then(function (response) {
            _this.feedback.hideLoading();
            _this.feedback.showSlidingNotification("success", "Your Account Created Successfully", "Success!");
            console.log(response.key);
            return response;
        }).catch(function (error) {
            _this.feedback.hideLoading();
            _this.feedback.showSlidingNotification("error", error, "Something went wrong");
            console.log(error);
            return error;
        });
    };
    FireBaseService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [feedback_service_1.FeedbackService])
    ], FireBaseService);
    return FireBaseService;
}());
exports.FireBaseService = FireBaseService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZWJhc2Utc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZpcmViYXNlLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsdURBQTBEO0FBQzFELHVEQUFtRDtBQUVuRCwwQ0FBMEM7QUFHMUM7SUFFSSx5QkFBc0IsUUFBeUI7UUFBekIsYUFBUSxHQUFSLFFBQVEsQ0FBaUI7UUFDM0MsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFRDs7U0FFSztJQUNHLHNDQUFZLEdBQXBCO1FBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUM7Z0JBQ1Ysa0JBQWtCLEVBQUUsVUFBQSxJQUFJO29CQUNwQixPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLHVCQUF1QixDQUFDLENBQUMsQ0FBQywwQkFBMEIsQ0FBQyxDQUFDO29CQUNsRixFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztvQkFDeEYsQ0FBQztnQkFDTCxDQUFDO2FBQ0osQ0FBQyxDQUFDLElBQUksQ0FDSCxVQUFBLFFBQVE7Z0JBQ0osT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsb0NBQW9DLENBQUMsQ0FBQztnQkFDN0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMxQixDQUFDLEVBQ0QsVUFBQSxLQUFLO2dCQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLGVBQWUsR0FBRyxLQUFLLENBQUMsQ0FBQztZQUNsRCxDQUFDLENBQ0osQ0FBQztRQUNOLENBQUM7SUFDTCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSSx5Q0FBZSxHQUF0QixVQUF1QixLQUFhLEVBQUUsUUFBZ0I7UUFBdEQsaUJBa0JDO1FBakJHLElBQUksQ0FBQyxRQUFRLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDNUIsUUFBUSxDQUFDLFVBQVUsQ0FBQztZQUNoQixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQSxRQUFRO1lBQ0osS0FBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUM1QixLQUFJLENBQUMsUUFBUSxDQUFDLHVCQUF1QixDQUFDLFNBQVMsRUFBRSxtQ0FBbUMsRUFBRSxVQUFVLENBQUMsQ0FBQztZQUNsRyxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUMxQixNQUFNLENBQUMsUUFBUSxDQUFDO1FBQ3BCLENBQUMsQ0FDSixDQUFDLEtBQUssQ0FBQyxVQUFBLEtBQUs7WUFDVCxLQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzVCLEtBQUksQ0FBQyxRQUFRLENBQUMsdUJBQXVCLENBQUMsT0FBTyxFQUFFLEtBQUssRUFBRSxzQkFBc0IsQ0FBQyxDQUFDO1lBQzlFLE9BQU8sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDbkIsTUFBTSxDQUFDLEtBQUssQ0FBQztRQUNqQixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUF0RFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUd1QixrQ0FBZTtPQUZ0QyxlQUFlLENBdUQzQjtJQUFELHNCQUFDO0NBQUEsQUF2REQsSUF1REM7QUF2RFksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgZmlyZUJhc2UgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LXBsdWdpbi1maXJlYmFzZVwiKTtcbmltcG9ydCB7RmVlZGJhY2tTZXJ2aWNlfSBmcm9tIFwiLi9mZWVkYmFjay1zZXJ2aWNlXCI7XG5cbi8vIGltcG9ydCB7RFJJVkVSU30gZnJvbSBcIi4vbW9jay1kcml2ZXJzXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaXJlQmFzZVNlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGZlZWRiYWNrOiBGZWVkYmFja1NlcnZpY2UpIHtcbiAgICAgICAgdGhpcy5Jbml0RmlyZUJhc2UoKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBJbml0aWFsaXplIHRoZSBmaXJlQmFzZSBjb25maWd1cmF0aW9uXG4gICAgICogKi9cbiAgICBwcml2YXRlIEluaXRGaXJlQmFzZSgpOiB2b2lkIHtcbiAgICAgICAgaWYgKCFmaXJlQmFzZS5pbml0KCkpIHtcbiAgICAgICAgICAgIGZpcmVCYXNlLmluaXQoe1xuICAgICAgICAgICAgICAgIG9uQXV0aFN0YXRlQ2hhbmdlZDogZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubG9nZ2VkSW4gPyBcIkxvZ2dlZCBpbiB0byBmaXJlYmFzZVwiIDogXCJMb2dnZWQgb3V0IGZyb20gZmlyZWJhc2VcIik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLmxvZ2dlZEluKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInVzZXIncyBlbWFpbCBhZGRyZXNzOiBcIiArIChkYXRhLnVzZXIuZW1haWwgPyBkYXRhLnVzZXIuZW1haWwgOiBcIk4vQVwiKSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzdWNjZXNzXCIsIFwiRmlyZUJhc2UgaW5zdGFsbGVkIHN1Y2Nlc3NmdWxseSA6RFwiKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW5zdGFuY2UpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIsIFwiTm90IGluc3RhbGxlZFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBSZWdpc3RlciBuZXcgdXNlciB0byBhcHAgZmlyZUJhc2VcbiAgICAgKlxuICAgICAqIEBwYXJhbSBlbWFpbFxuICAgICAqIEBwYXJhbSBwYXNzd29yZFxuICAgICAqL1xuICAgIHB1YmxpYyByZWdpc3Rlck5ld1VzZXIoZW1haWw6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZykge1xuICAgICAgICB0aGlzLmZlZWRiYWNrLnNob3dMb2FkaW5nKCk7XG4gICAgICAgIGZpcmVCYXNlLmNyZWF0ZVVzZXIoe1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICByZXNwb25zZSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgICAgIHRoaXMuZmVlZGJhY2suc2hvd1NsaWRpbmdOb3RpZmljYXRpb24oXCJzdWNjZXNzXCIsIFwiWW91ciBBY2NvdW50IENyZWF0ZWQgU3VjY2Vzc2Z1bGx5XCIsIFwiU3VjY2VzcyFcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2Uua2V5KTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICkuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5oaWRlTG9hZGluZygpO1xuICAgICAgICAgICAgdGhpcy5mZWVkYmFjay5zaG93U2xpZGluZ05vdGlmaWNhdGlvbihcImVycm9yXCIsIGVycm9yLCBcIlNvbWV0aGluZyB3ZW50IHdyb25nXCIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgICAgICAgcmV0dXJuIGVycm9yO1xuICAgICAgICB9KVxuICAgIH1cbn0iXX0=