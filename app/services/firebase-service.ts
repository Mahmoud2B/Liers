import {Injectable} from "@angular/core";
import fireBase = require("nativescript-plugin-firebase");
import {FeedbackService} from "./feedback-service";

// import {DRIVERS} from "./mock-drivers";

@Injectable()
export class FireBaseService {

    constructor(protected feedback: FeedbackService) {
        this.InitFireBase();
    }

    /**
     * Initialize the fireBase configuration
     * */
    private InitFireBase(): void {
        if (!fireBase.init()) {
            fireBase.init({
                onAuthStateChanged: data => {
                    console.log(data.loggedIn ? "Logged in to firebase" : "Logged out from firebase");
                    if (data.loggedIn) {
                        console.log("user's email address: " + (data.user.email ? data.user.email : "N/A"));
                    }
                }
            }).then(
                instance => {
                    console.log("success", "FireBase installed successfully :D");
                    console.log(instance);
                },
                error => {
                    console.log("error", "Not installed" + error);
                }
            );
        }
    }

    /**
     * Register new user to app fireBase
     *
     * @param email
     * @param password
     */
    public registerNewUser(email: string, password: string) {
        this.feedback.showLoading();
        fireBase.createUser({
            email: email,
            password: password
        }).then(
            response => {
                this.feedback.hideLoading();
                this.feedback.showSlidingNotification("success", "Your Account Created Successfully", "Success!");
                console.log(response.key);
                return response;
            }
        ).catch(error => {
            this.feedback.hideLoading();
            this.feedback.showSlidingNotification("error", error, "Something went wrong");
            console.log(error);
            return error;
        })
    }
}