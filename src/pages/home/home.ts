import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {GooglePlus} from "@ionic-native/google-plus";
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';

@Component({
    selector: 'page-home',
    templateUrl: 'home.html'
})
export class HomePage {
    displayName: any;
    email: any;
    familyName: any;
    givenName: any;
    userId: any;
    imageUrl: any;

    isLoggedGoogleIn:boolean = false;
    isLoggedFacebookIn:boolean = false;
    error : any;

    constructor(public navCtrl: NavController,
                private _googlePlus : GooglePlus,
                private _fb: Facebook) {}

    loginGoogle() {
        this._googlePlus.login({
            'webClientId': '675857416832-gkkntadhdgbjs8o19akb071ho7stguki.apps.googleusercontent.com'
        })
            .then(res => {
                alert(res);
                this.displayName = res.displayName;
                this.email = res.email;
                this.familyName = res.familyName;
                this.givenName = res.givenName;
                this.userId = res.userId;
                this.imageUrl = res.imageUrl;

                this.isLoggedGoogleIn = true;
            })
            .catch(err => this.error = err);
    }

    logoutGoogle() {
        this._googlePlus.logout()
            .then(res => {
                alert(res);
                this.displayName = "";
                this.email = "";
                this.familyName = "";
                this.givenName = "";
                this.userId = "";
                this.imageUrl = "";

                this.isLoggedGoogleIn = false;
            })
            .catch(err => alert(err));
    }

    loginFacebook(){
        this._fb.login(['public_profile', 'user_friends', 'email'])
            .then((res: FacebookLoginResponse) => {
                alert(res);
                this.isLoggedFacebookIn = true;
            })
            .catch(err => this.error = err);

    }
}
