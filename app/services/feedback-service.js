"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_feedback_1 = require("nativescript-feedback");
var nativescript_loading_indicator_1 = require("nativescript-loading-indicator");
var FeedbackService = /** @class */ (function () {
    function FeedbackService(feedBack, loading) {
        this.feedBack = feedBack;
        this.loading = loading;
        this.feedBack = new nativescript_feedback_1.Feedback();
        this.loading = new nativescript_loading_indicator_1.LoadingIndicator();
    }
    /**
     * show notification that slide form top of the screen
     * @param type the type of the message
     * @param msg the message content
     * @param title optional for giving message title
     * @param duration the time you would like the message to appear
     * @return void
     * */
    FeedbackService.prototype.showSlidingNotification = function (type, msg, title, duration) {
        var options = {
            message: msg,
            title: title,
            duration: duration,
        };
        switch (type) {
            case 'info':
                this.feedBack.info(options);
                break;
            case 'success':
                this.feedBack.success(options);
                break;
            case 'error':
                this.feedBack.error(options);
                break;
            case 'warning':
                this.feedBack.warning(options);
                break;
            default: this.feedBack.info(options);
        }
    };
    /**
     * show loading Indicator while doing some process
     */
    FeedbackService.prototype.showLoading = function () {
        this.loading.show();
    };
    /**
     * hide loading Indicator while doing some process
     */
    FeedbackService.prototype.hideLoading = function () {
        this.loading.hide();
    };
    FeedbackService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [nativescript_feedback_1.Feedback, nativescript_loading_indicator_1.LoadingIndicator])
    ], FeedbackService);
    return FeedbackService;
}());
exports.FeedbackService = FeedbackService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmVlZGJhY2stc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImZlZWRiYWNrLXNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFDekMsK0RBQStDO0FBQy9DLGlGQUFnRTtBQUdoRTtJQUVJLHlCQUFvQixRQUFrQixFQUFVLE9BQXlCO1FBQXJELGFBQVEsR0FBUixRQUFRLENBQVU7UUFBVSxZQUFPLEdBQVAsT0FBTyxDQUFrQjtRQUNyRSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksZ0NBQVEsRUFBRSxDQUFDO1FBQy9CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpREFBZ0IsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRDs7Ozs7OztTQU9LO0lBQ0UsaURBQXVCLEdBQTlCLFVBQStCLElBQVksRUFBRSxHQUFXLEVBQUUsS0FBYyxFQUFFLFFBQWlCO1FBQ3ZGLElBQUksT0FBTyxHQUFHO1lBQ1YsT0FBTyxFQUFFLEdBQUc7WUFDWixLQUFLLEVBQUUsS0FBSztZQUNaLFFBQVEsRUFBRSxRQUFRO1NBQ3JCLENBQUM7UUFDRixNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1gsS0FBSyxNQUFNO2dCQUNQLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUM1QixLQUFLLENBQUM7WUFDVixLQUFLLFNBQVM7Z0JBQ1YsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQy9CLEtBQUssQ0FBQztZQUNWLEtBQUssT0FBTztnQkFDUixJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDN0IsS0FBSyxDQUFDO1lBQ1YsS0FBSyxTQUFTO2dCQUNWLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUMvQixLQUFLLENBQUM7WUFDVixTQUFTLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3pDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxxQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDeEIsQ0FBQztJQUVEOztPQUVHO0lBQ0kscUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFsRFEsZUFBZTtRQUQzQixpQkFBVSxFQUFFO3lDQUdxQixnQ0FBUSxFQUFtQixpREFBZ0I7T0FGaEUsZUFBZSxDQW1EM0I7SUFBRCxzQkFBQztDQUFBLEFBbkRELElBbURDO0FBbkRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHtGZWVkYmFja30gZnJvbSBcIm5hdGl2ZXNjcmlwdC1mZWVkYmFja1wiO1xuaW1wb3J0IHtMb2FkaW5nSW5kaWNhdG9yfSBmcm9tIFwibmF0aXZlc2NyaXB0LWxvYWRpbmctaW5kaWNhdG9yXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGZWVkYmFja1NlcnZpY2Uge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmZWVkQmFjazogRmVlZGJhY2ssIHByaXZhdGUgbG9hZGluZzogTG9hZGluZ0luZGljYXRvcikge1xuICAgICAgICB0aGlzLmZlZWRCYWNrID0gbmV3IEZlZWRiYWNrKCk7XG4gICAgICAgIHRoaXMubG9hZGluZyA9IG5ldyBMb2FkaW5nSW5kaWNhdG9yKCk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogc2hvdyBub3RpZmljYXRpb24gdGhhdCBzbGlkZSBmb3JtIHRvcCBvZiB0aGUgc2NyZWVuXG4gICAgICogQHBhcmFtIHR5cGUgdGhlIHR5cGUgb2YgdGhlIG1lc3NhZ2VcbiAgICAgKiBAcGFyYW0gbXNnIHRoZSBtZXNzYWdlIGNvbnRlbnRcbiAgICAgKiBAcGFyYW0gdGl0bGUgb3B0aW9uYWwgZm9yIGdpdmluZyBtZXNzYWdlIHRpdGxlXG4gICAgICogQHBhcmFtIGR1cmF0aW9uIHRoZSB0aW1lIHlvdSB3b3VsZCBsaWtlIHRoZSBtZXNzYWdlIHRvIGFwcGVhclxuICAgICAqIEByZXR1cm4gdm9pZFxuICAgICAqICovXG4gICAgcHVibGljIHNob3dTbGlkaW5nTm90aWZpY2F0aW9uKHR5cGU6IHN0cmluZywgbXNnOiBzdHJpbmcsIHRpdGxlPzogc3RyaW5nLCBkdXJhdGlvbj86IG51bWJlcikge1xuICAgICAgICBsZXQgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1lc3NhZ2U6IG1zZyxcbiAgICAgICAgICAgIHRpdGxlOiB0aXRsZSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiBkdXJhdGlvbixcbiAgICAgICAgfTtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdpbmZvJzpcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCYWNrLmluZm8ob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdzdWNjZXNzJzpcbiAgICAgICAgICAgICAgICB0aGlzLmZlZWRCYWNrLnN1Y2Nlc3Mob3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XG4gICAgICAgICAgICAgICAgdGhpcy5mZWVkQmFjay5lcnJvcihvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3dhcm5pbmcnOlxuICAgICAgICAgICAgICAgIHRoaXMuZmVlZEJhY2sud2FybmluZyhvcHRpb25zKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6IHRoaXMuZmVlZEJhY2suaW5mbyhvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIHNob3cgbG9hZGluZyBJbmRpY2F0b3Igd2hpbGUgZG9pbmcgc29tZSBwcm9jZXNzXG4gICAgICovXG4gICAgcHVibGljIHNob3dMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcuc2hvdygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGhpZGUgbG9hZGluZyBJbmRpY2F0b3Igd2hpbGUgZG9pbmcgc29tZSBwcm9jZXNzXG4gICAgICovXG4gICAgcHVibGljIGhpZGVMb2FkaW5nKCkge1xuICAgICAgICB0aGlzLmxvYWRpbmcuaGlkZSgpO1xuICAgIH1cbn0iXX0=