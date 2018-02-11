import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";
import {FireBaseService} from "../services/firebase-service";
@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./Login.component.html",
    styleUrls: ["./login.scss"]
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(private page: Page, protected firbase:FireBaseService) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {
    }

    protected onSigninButtonTap(): void {

    }

}
