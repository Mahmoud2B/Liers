import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {Feedback, FeedbackType, FeedbackPosition} from "nativescript-feedback";

@Component({
    selector: "SignUp",
    moduleId: module.id,
    templateUrl: "./SignUp.component.html",
    styleUrls: ['./SignUp.scss']
})
export class SignUpComponent implements OnInit {
    constructor(private page: Page, private feedBack: Feedback) {
        page.actionBarHidden = true;
        this.feedBack = new Feedback();
    }

    ngOnInit(): void {
    }

    protected onSignUpButtonTap(): void {

    }

    protected showFeedBack(): void {
        this.feedBack.success({
            message: "Easiest thing ever, right?"
        });
    }
}
