import {Component, OnInit} from "@angular/core";
import {Page} from "ui/page";

@Component({
    selector: "Login",
    moduleId: module.id,
    templateUrl: "./Login.component.html",
    styleUrls: ["./login.scss"]
})
export class LoginComponent implements OnInit {
    email: string;
    password: string;

    constructor(private page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {

    }

    protected onSigninButtonTap(): void {

    }

}
