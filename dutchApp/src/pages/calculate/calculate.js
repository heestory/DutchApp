"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var transmission_1 = require("../transmission/transmission");
var CalculatePage = (function () {
    function CalculatePage(alertCtrl, navCtrl, navParams) {
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    CalculatePage.prototype.openPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Adding Price',
            message: 'Enter a price and Using content',
            inputs: [
                {
                    name: 'Price',
                    placeholder: 'price'
                },
                {
                    name: 'Content',
                    placeholder: 'content'
                }
            ],
            buttons: [
                {
                    text: 'Save',
                    handler: function (data) {
                        console.log('save');
                    }
                },
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('cancel');
                    }
                }
            ]
        });
        prompt.present();
    };
    CalculatePage.prototype.nextPage = function (event, item) {
        this.navCtrl.push(transmission_1.TransmissionPage, {
            item: item
        });
    };
    CalculatePage = __decorate([
        core_1.Component({
            selector: 'page-calculate',
            templateUrl: 'calculate.html'
        })
    ], CalculatePage);
    return CalculatePage;
}());
exports.CalculatePage = CalculatePage;
//# sourceMappingURL=calculate.js.map