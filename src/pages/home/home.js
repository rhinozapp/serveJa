var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GooglePlus } from "@ionic-native/google-plus";
import { Facebook } from '@ionic-native/facebook';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, _googlePlus, _fb) {
        this.navCtrl = navCtrl;
        this._googlePlus = _googlePlus;
        this._fb = _fb;
        this.isLoggedGoogleIn = false;
        this.isLoggedFacebookIn = false;
    }
    HomePage.prototype.loginGoogle = function () {
        var _this = this;
        this._googlePlus.login({
            'webClientId': '675857416832-gkkntadhdgbjs8o19akb071ho7stguki.apps.googleusercontent.com'
        })
            .then(function (res) {
            alert(res);
            _this.displayName = res.displayName;
            _this.email = res.email;
            _this.familyName = res.familyName;
            _this.givenName = res.givenName;
            _this.userId = res.userId;
            _this.imageUrl = res.imageUrl;
            _this.isLoggedGoogleIn = true;
        })
            .catch(function (err) { return _this.error = err; });
    };
    HomePage.prototype.logoutGoogle = function () {
        var _this = this;
        this._googlePlus.logout()
            .then(function (res) {
            alert(res);
            _this.displayName = "";
            _this.email = "";
            _this.familyName = "";
            _this.givenName = "";
            _this.userId = "";
            _this.imageUrl = "";
            _this.isLoggedGoogleIn = false;
        })
            .catch(function (err) { return alert(err); });
    };
    HomePage.prototype.loginFacebook = function () {
        var _this = this;
        this._fb.login(['public_profile', 'user_friends', 'email'])
            .then(function (res) {
            alert(res);
            _this.isLoggedFacebookIn = true;
        })
            .catch(function (err) { return _this.error = err; });
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html'
        }),
        __metadata("design:paramtypes", [NavController,
            GooglePlus,
            Facebook])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map