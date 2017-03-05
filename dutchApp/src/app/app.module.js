"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var ionic_angular_1 = require('ionic-angular');
var app_component_1 = require('./app.component');
var hello_ionic_1 = require('../pages/hello-ionic/hello-ionic');
var item_details_1 = require('../pages/item-details/item-details');
var list_1 = require('../pages/list/list');
var calculate_1 = require('../pages/calculate/calculate');
var phone_book_1 = require('../pages/phone-book/phone-book');
var meeting_name_1 = require('../pages/meeting-name/meeting-name');
var transmission_1 = require('../pages/transmission/transmission');
var groups_1 = require('../pages/groups/groups');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.MyApp,
                hello_ionic_1.HelloIonicPage,
                item_details_1.ItemDetailsPage,
                list_1.ListPage,
                calculate_1.CalculatePage,
                phone_book_1.PhoneBookPage,
                meeting_name_1.MeetingNamePage,
                transmission_1.TransmissionPage,
                groups_1.GroupsPage
            ],
            imports: [
                ionic_angular_1.IonicModule.forRoot(app_component_1.MyApp)
            ],
            bootstrap: [ionic_angular_1.IonicApp],
            entryComponents: [
                app_component_1.MyApp,
                hello_ionic_1.HelloIonicPage,
                item_details_1.ItemDetailsPage,
                list_1.ListPage,
                calculate_1.CalculatePage,
                phone_book_1.PhoneBookPage,
                meeting_name_1.MeetingNamePage,
                transmission_1.TransmissionPage,
                groups_1.GroupsPage
            ],
            providers: [{ provide: core_1.ErrorHandler, useClass: ionic_angular_1.IonicErrorHandler }]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map