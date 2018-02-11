import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
//services
import {FeedbackService} from "../services/feedback-service";
import {FireBaseService} from "../services/firebase-service";
import {UserInterface, User} from "../data/user";
import {inputType} from "tns-core-modules/ui/dialogs";
import password = inputType.password;

//data
@Component({
    selector: "SignUp",
    moduleId: module.id,
    templateUrl: "./SignUp.component.html",
    styleUrls: ['./SignUp.scss']
})
export class SignUpComponent implements OnInit {
    public user: UserInterface;
    public confirmPassword:string;

    constructor(private page: Page, private feedBack: FeedbackService, private fireBase: FireBaseService) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
        this.user = new User({});
    }

    protected onSignUpButtonTap(): void {
        console.log(JSON.stringify(this.user));
        this.fireBase.registerNewUser(this.user.email, this.user.password);
    }

    protected showFeedBack(): void {
        this.feedBack.showSlidingNotification("success", "GG ez");
    }
}
