import {Injectable} from "@angular/core";
import {Feedback} from "nativescript-feedback";
import {LoadingIndicator} from "nativescript-loading-indicator";

@Injectable()
export class FeedbackService {

    constructor(private feedBack: Feedback, private loading: LoadingIndicator) {
        this.feedBack = new Feedback();
        this.loading = new LoadingIndicator();
    }

    /**
     * show notification that slide form top of the screen
     * @param type the type of the message
     * @param msg the message content
     * @param title optional for giving message title
     * @param duration the time you would like the message to appear
     * @return void
     * */
    public showSlidingNotification(type: string, msg: string, title?: string, duration?: number) {
        let options = {
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
    }

    /**
     * show loading Indicator while doing some process
     */
    public showLoading() {
        this.loading.show();
    }

    /**
     * hide loading Indicator while doing some process
     */
    public hideLoading() {
        this.loading.hide();
    }
}