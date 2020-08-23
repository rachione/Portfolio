"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppRoutingModule = void 0;
var about_component_1 = require("./page/about/about.component");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var resume_component_1 = require("./page/resume/resume.component");
var contact_component_1 = require("./page/contact/contact.component");
var project_component_1 = require("./page/project/project.component");
var subproject_component_1 = require("./page/subproject/subproject.component");
var routes = [
    { path: '', redirectTo: '/project', pathMatch: 'full' },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'resume', component: resume_component_1.ResumeComponent },
    { path: 'project', component: project_component_1.ProjectComponent },
    { path: 'subproject/:id', component: subproject_component_1.SubprojectComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '**', redirectTo: '/project' },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;
