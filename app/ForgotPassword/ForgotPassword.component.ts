import { Component, OnInit } from "@angular/core";
import {Page} from "ui/page";

@Component({
    selector: "ForgotPassword",
    moduleId: module.id,
    templateUrl: "./ForgotPassword.component.html",
    styleUrls:['./ForgotPassword.scss']
})
export class ForgotPasswordComponent implements OnInit {
    constructor(private page: Page) {
        page.actionBarHidden = true;
    }

    ngOnInit(): void {

    }
}
