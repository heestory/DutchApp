"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var calculate_1 = require("../calculate/calculate");
var MeetingNamePage = (function () {
    function MeetingNamePage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    MeetingNamePage.prototype.nextPage = function (event, item) {
        this.navCtrl.push(calculate_1.CalculatePage, {
            item: item
        });
    };
    MeetingNamePage = __decorate([
        core_1.Component({
            selector: 'meeting-name',
            templateUrl: 'meeting-name.html'
        })
    ], MeetingNamePage);
    return MeetingNamePage;
}());
exports.MeetingNamePage = MeetingNamePage;
//# sourceMappingURL=meeting-name.js.map