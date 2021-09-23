(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _page_about_about_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./page/about/about.component */ "./src/app/page/about/about.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/resume/resume.component */ "./src/app/page/resume/resume.component.ts");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/contact/contact.component */ "./src/app/page/contact/contact.component.ts");
/* harmony import */ var _page_project_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/project/project.component */ "./src/app/page/project/project.component.ts");
/* harmony import */ var _page_subproject_subproject_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./page/subproject/subproject.component */ "./src/app/page/subproject/subproject.component.ts");









const routes = [
    { path: '', redirectTo: '/project', pathMatch: 'full' },
    { path: 'about', component: _page_about_about_component__WEBPACK_IMPORTED_MODULE_0__["AboutComponent"] },
    { path: 'resume', component: _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_3__["ResumeComponent"] },
    { path: 'project', component: _page_project_project_component__WEBPACK_IMPORTED_MODULE_5__["ProjectComponent"] },
    { path: 'subproject/:id', component: _page_subproject_subproject_component__WEBPACK_IMPORTED_MODULE_6__["SubprojectComponent"] },
    { path: 'contact', component: _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_4__["ContactComponent"] },
    { path: '**', redirectTo: '/project' },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { scrollPositionRestoration: 'enabled' })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _route_animation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./route-animation */ "./src/app/route-animation.ts");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AppComponent {
    constructor() {
        this.items = [
            {
                title: 'About',
                link: '/about'
            },
            {
                title: 'Project',
                link: '/project'
            },
            {
                title: 'Resume',
                link: '/resume'
            },
        ];
    }
    // tslint:disable-next-line: typedef
    prepareRoute(outlet) {
        return outlet && outlet.activatedRouteData;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 19, vars: 2, consts: [["windowmode", "true", 1, "with-scroll", "windowmode"], ["fixed", "", 1, ""], [1, "lc_header"], [1, "lc_row"], [1, "d-none", "d-md-block"], [1, "lc_logo_container"], ["src", "assets/Icon.png", 1, "lc_icon"], [1, "lc_logo"], [1, "myFKName"], [1, "myFKJob"], [2, "width", "100%"], [1, "lc_menu_container"], [1, "lc_menu", 3, "items"], [1, "colored-column-basic", "lc_main"], ["outlet", "outlet"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-layout", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-layout-header", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Carter Yang");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Game Dev & Security engineer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "nb-menu", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-layout-column", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "router-outlet", null, 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.items);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("@routeAnimations", ctx.prepareRoute(_r0));
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbMenuComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_2__["NbLayoutColumnComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: ["[_nghost-%COMP%]     nb-menu {\n  align-self: flex-end;\n}\n\n[_nghost-%COMP%]     nb-menu .menu-item {\n  display: inline-block;\n  border-bottom: 0px;\n}\n\n[_nghost-%COMP%]     nb-menu .menu-item a {\n  font-weight: 600;\n  font-size: 1.125rem;\n  height: 3rem;\n  padding: 0.75rem 1.5rem;\n}\n\n[_nghost-%COMP%]     nb-menu .menu-item a.active {\n  background-repeat: repeat-x;\n  background-image: linear-gradient(to right, currentColor 100%, currentColor 0);\n  background-size: 1px 0.2em;\n  background-position: 0 calc(100% - 0em);\n}\n\n[_nghost-%COMP%]     nb-menu .menu-item {\n  letter-spacing: 0.03rem;\n}\n\n.lc_header[_ngcontent-%COMP%], .lc_main[_ngcontent-%COMP%] {\n  max-width: 1440px;\n  width: 100%;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.lc_main[_ngcontent-%COMP%] {\n  padding-left: 0 !important;\n  padding-right: 0 !important;\n  padding-top: 20px !important;\n}\n\n.lc_header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  padding-left: 10px !important;\n  padding-right: 10px !important;\n}\n\n.lc_row[_ngcontent-%COMP%] {\n  display: flex;\n  height: 100%;\n}\n\n.lc_menu_container[_ngcontent-%COMP%], .lc_logo_container[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n}\n\n.lc_logo[_ngcontent-%COMP%] {\n  flex-direction: column;\n  display: flex;\n  align-self: center;\n  padding-right: 1.5rem;\n}\n\n.myFKName[_ngcontent-%COMP%] {\n  white-space: nowrap;\n  font-size: 1.275rem;\n  text-decoration: none !important;\n  font-weight: 700;\n  padding-bottom: 0.4rem;\n}\n\n.myFKJob[_ngcontent-%COMP%] {\n  line-height: 0.85rem;\n  white-space: nowrap;\n  font-size: 0.85rem;\n}\n\n.lc_icon[_ngcontent-%COMP%] {\n  padding-right: 6px;\n  display: flex;\n  align-self: center;\n  width: auto;\n  height: 40px;\n}\n\n@media (max-width: 768px) {\n  .lc_menu_container[_ngcontent-%COMP%] {\n    display: flex !important;\n  }\n\n    nb-menu {\n    flex-grow: 1;\n  }\n    .menu-item {\n    width: 25%;\n  }\n    .menu-item a {\n    padding: 0 !important;\n  }\n    .menu-item a span {\n    text-align: center;\n  }\n}\n\n@media (min-width: 768px) {\n  .lc_menu_container[_ngcontent-%COMP%] {\n    justify-content: flex-end !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0Usb0JBQUE7QUFBRjs7QUFFQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFFQTtFQUNFLDJCQUFBO0VBQ0EsOEVBQUE7RUFDQSwwQkFBQTtFQUNBLHVDQUFBO0FBQ0Y7O0FBRUE7RUFDRSx1QkFBQTtBQUNGOztBQUdBOztFQUVFLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtBQUFGOztBQUdBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FBQUY7O0FBRUE7RUFDRSxhQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBOztFQUVFLFlBQUE7RUFDQSxhQUFBO0FBQ0Y7O0FBSUE7RUFFRSxzQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHFCQUFBO0FBREY7O0FBSUE7RUFDRSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLHNCQUFBO0FBREY7O0FBR0E7RUFDRSxvQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFHQTtFQUNFLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBRUEsV0FBQTtFQUNBLFlBQUE7QUFERjs7QUFHQTtFQUNFO0lBQ0Usd0JBQUE7RUFBRjs7RUFJRTtJQUNFLFlBQUE7RUFESjtFQUdFO0lBQ0UsVUFBQTtFQURKO0VBRUk7SUFDRSxxQkFBQTtFQUFOO0VBQ007SUFDRSxrQkFBQTtFQUNSO0FBQ0Y7O0FBSUE7RUFDRTtJQUNFLG9DQUFBO0VBRkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCA6Om5nLWRlZXAgbmItbWVudSB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIG5iLW1lbnUgLm1lbnUtaXRlbSB7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5iLW1lbnUgLm1lbnUtaXRlbSBhIHtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgaGVpZ2h0OiAzcmVtO1xyXG4gIHBhZGRpbmc6IDAuNzVyZW0gMS41cmVtO1xyXG59XHJcblxyXG46aG9zdCA6Om5nLWRlZXAgbmItbWVudSAubWVudS1pdGVtIGEuYWN0aXZlIHtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCBjdXJyZW50Q29sb3IgMTAwJSwgY3VycmVudENvbG9yIDApO1xyXG4gIGJhY2tncm91bmQtc2l6ZTogMXB4IDAuMmVtO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDAgY2FsYygxMDAlIC0gMGVtKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5iLW1lbnUgLm1lbnUtaXRlbXtcclxuICBsZXR0ZXItc3BhY2luZzogLjAzcmVtO1xyXG59XHJcblxyXG5cclxuLmxjX2hlYWRlcixcclxuLmxjX21haW4ge1xyXG4gIG1heC13aWR0aDogMTQ0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLmxjX21haW4ge1xyXG4gIHBhZGRpbmctbGVmdDogMCAhaW1wb3J0YW50O1xyXG4gIHBhZGRpbmctcmlnaHQ6IDAgIWltcG9ydGFudDtcclxuICBwYWRkaW5nLXRvcDogMjBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubGNfaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4ICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5sY19yb3cge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubGNfbWVudV9jb250YWluZXIsXHJcbi5sY19sb2dvX2NvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcblxyXG5cclxuLmxjX2xvZ28ge1xyXG4gIC1tcy1mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1yaWdodDogMS41cmVtO1xyXG59XHJcblxyXG4ubXlGS05hbWUge1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAxLjI3NXJlbTtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogNzAwO1xyXG4gIHBhZGRpbmctYm90dG9tOiAwLjRyZW07XHJcbn1cclxuLm15RktKb2Ige1xyXG4gIGxpbmUtaGVpZ2h0OiAwLjg1cmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xyXG59XHJcblxyXG4ubGNfaWNvbiB7XHJcbiAgcGFkZGluZy1yaWdodDogNnB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG5cclxuICB3aWR0aDogYXV0bztcclxuICBoZWlnaHQ6IDQwcHg7XHJcbn1cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxjX21lbnVfY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXggIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCB7XHJcbiAgICBuYi1tZW51IHtcclxuICAgICAgZmxleC1ncm93OiAxO1xyXG4gICAgfVxyXG4gICAgLm1lbnUtaXRlbSB7XHJcbiAgICAgIHdpZHRoOiAyNSU7XHJcbiAgICAgIGEge1xyXG4gICAgICAgIHBhZGRpbmc6IDAgIWltcG9ydGFudDtcclxuICAgICAgICBzcGFuIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgLmxjX21lbnVfY29udGFpbmVyIHtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuIl19 */"], data: { animation: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["fader"]] } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
                animations: [_route_animation__WEBPACK_IMPORTED_MODULE_1__["fader"]]
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @nebular/eva-icons */ "./node_modules/@nebular/eva-icons/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _page_about_about_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./page/about/about.component */ "./src/app/page/about/about.component.ts");
/* harmony import */ var _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./page/resume/resume.component */ "./src/app/page/resume/resume.component.ts");
/* harmony import */ var _page_project_project_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/project/project.component */ "./src/app/page/project/project.component.ts");
/* harmony import */ var _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/contact/contact.component */ "./src/app/page/contact/contact.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _page_subproject_subproject_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./page/subproject/subproject.component */ "./src/app/page/subproject/subproject.component.ts");
/* harmony import */ var _service_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./service/pipe */ "./src/app/service/pipe.ts");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");




















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerComponent"]], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'dark' }),
            ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPopoverModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
            _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"].forRoot(),
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"].forRoot(),
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbProgressBarModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
            _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
            _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _page_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
        _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"],
        _page_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
        _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
        _page_subproject_subproject_component__WEBPACK_IMPORTED_MODULE_14__["SubprojectComponent"],
        _service_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPopoverModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"], _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"], _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbProgressBarModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
        _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
        _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _page_about_about_component__WEBPACK_IMPORTED_MODULE_7__["AboutComponent"],
                    _page_resume_resume_component__WEBPACK_IMPORTED_MODULE_8__["ResumeComponent"],
                    _page_project_project_component__WEBPACK_IMPORTED_MODULE_9__["ProjectComponent"],
                    _page_contact_contact_component__WEBPACK_IMPORTED_MODULE_10__["ContactComponent"],
                    _page_subproject_subproject_component__WEBPACK_IMPORTED_MODULE_14__["SubprojectComponent"],
                    _service_pipe__WEBPACK_IMPORTED_MODULE_15__["SafePipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbThemeModule"].forRoot({ name: 'dark' }),
                    ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbPopoverModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbButtonModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbListModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbActionsModule"],
                    _angular_fire__WEBPACK_IMPORTED_MODULE_11__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_13__["environment"].firebase),
                    _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_12__["AngularFirestoreModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbMenuModule"].forRoot(),
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbSidebarModule"].forRoot(),
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbIconModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbTooltipModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbProgressBarModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbCardModule"],
                    _nebular_theme__WEBPACK_IMPORTED_MODULE_5__["NbLayoutModule"],
                    _nebular_eva_icons__WEBPACK_IMPORTED_MODULE_6__["NbEvaIconsModule"]
                ],
                providers: [ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_16__["PdfViewerComponent"]],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/page/about/about.component.ts":
/*!***********************************************!*\
  !*** ./src/app/page/about/about.component.ts ***!
  \***********************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _assets_data_bestGame_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../assets/data/bestGame.json */ "./src/assets/data/bestGame.json");
var _assets_data_bestGame_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/bestGame.json */ "./src/assets/data/bestGame.json", 1);
/* harmony import */ var _assets_data_about_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../assets/data/about.json */ "./src/assets/data/about.json");
var _assets_data_about_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/about.json */ "./src/assets/data/about.json", 1);
/* harmony import */ var _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../assets/data/skills.json */ "./src/assets/data/skills.json");
var _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../assets/data/skills.json */ "./src/assets/data/skills.json", 1);
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function AboutComponent_nb_list_item_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nb-list-item", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", game_r2, " ");
} }
function AboutComponent_div_20_div_1_div_3_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMapInterpolate1"]("tooltipSkill skillTitle_", item_r6.color, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("nbTooltip", skill_r9.tooltip);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("status", item_r6.color);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r9.name);
} }
function AboutComponent_div_20_div_1_div_3_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](skill_r9.name);
} }
function AboutComponent_div_20_div_1_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AboutComponent_div_20_div_1_div_3_span_2_Template, 4, 6, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_div_20_div_1_div_3_ng_template_3_Template, 2, 1, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "nb-progress-bar", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const skill_r9 = ctx.$implicit;
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
    const item_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", skill_r9.tooltip != null)("ngIfElse", _r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", skill_r9.percent)("status", item_r6.color);
} }
function AboutComponent_div_20_div_1_hr_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "hr");
} }
function AboutComponent_div_20_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AboutComponent_div_20_div_1_div_3_Template, 6, 4, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AboutComponent_div_20_div_1_hr_4_Template, 1, 0, "hr", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    const isLast_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().last;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMapInterpolate1"]("color:", item_r6.rgbcolor, ";");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r6.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", item_r6.skills);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isLast_r4);
} }
function AboutComponent_div_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AboutComponent_div_20_div_1_Template, 5, 6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const columns_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", columns_r3);
} }
class AboutComponent {
    constructor() {
        this.bestGameData = _assets_data_bestGame_json__WEBPACK_IMPORTED_MODULE_1__;
        this.aboutData = _assets_data_about_json__WEBPACK_IMPORTED_MODULE_2__;
        this.skillsData = _assets_data_skills_json__WEBPACK_IMPORTED_MODULE_3__;
    }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 21, vars: 3, consts: [[1, "row", "no-gutters"], [1, "col-md-3", "d-none", "d-md-block"], [1, "bestGame"], ["class", "bestGameList", 4, "ngFor", "ngForOf"], [1, "col-md-9", "col-sm-12"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "bestGameList"], [1, "row"], ["class", "col-lg-6 ", 4, "ngFor", "ngForOf"], [1, "col-lg-6"], [1, "text-center", "Skill_title"], ["class", "col-lg-12 row no-gutters skill", 4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "col-lg-12", "row", "no-gutters", "skill"], [1, "text-right", "col-sm-6", "bold"], ["nbTooltipPlacement", "top", 3, "class", "nbTooltip", 4, "ngIf", "ngIfElse"], ["templateName", ""], ["size", "tiny", 1, "col-sm-6", 3, "value", "status"], ["nbTooltipPlacement", "top", 3, "nbTooltip"], ["icon", "info-outline", 1, "align-self-center", 3, "status"], [1, "align-self-center"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Best Games I've Played");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-list", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AboutComponent_nb_list_item_7_Template, 2, 1, "nb-list-item", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "About Me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h5");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Skills");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AboutComponent_div_20_Template, 2, 1, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bestGameData);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.aboutData.content, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.skillsData);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbListItemComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbProgressBarComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbTooltipDirective"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"]], styles: ["[class*=col-][_ngcontent-%COMP%] {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n[_nghost-%COMP%]     .progress-container {\n  height: 0.5rem !important;\n}\n\n[_nghost-%COMP%]     nb-icon {\n  margin-right: 1px;\n}\n\n@media (max-width: 576px) {\n  .skill.row[_ngcontent-%COMP%] {\n    margin-left: 0px !important;\n    margin-right: 0px !important;\n  }\n}\n\n.skill[_ngcontent-%COMP%] {\n  margin-top: 0.5rem;\n  margin-bottom: 0.5rem;\n}\n\n.skill[_ngcontent-%COMP%]   .col-sm-6[_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.skill[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  white-space: nowrap !important;\n  font-size: 0.9375rem;\n  padding-right: 8px !important;\n  margin-bottom: 0;\n  -webkit-margin-before: 0;\n          margin-block-start: 0;\n  -webkit-margin-after: 0;\n          margin-block-end: 0;\n}\n\n.skill[_ngcontent-%COMP%]   nb-progress-bar[_ngcontent-%COMP%] {\n  align-self: center;\n}\n\n.Skill_title[_ngcontent-%COMP%] {\n  font-size: 1.125rem;\n  font-weight: 600;\n  margin-bottom: 0.75rem;\n}\n\n.tooltipSkill[_ngcontent-%COMP%] {\n  float: right;\n  display: flex;\n  align-self: center;\n  cursor: pointer;\n}\n\n.skillTitle_primary[_ngcontent-%COMP%]:hover {\n  color: #3366ff;\n}\n\n.skillTitle_info[_ngcontent-%COMP%]:hover {\n  color: #0095ff;\n}\n\n.skillTitle_warning[_ngcontent-%COMP%]:hover {\n  color: #ffaa00;\n}\n\n.skillTitle_danger[_ngcontent-%COMP%]:hover {\n  color: #ff3d71;\n}\n\n.skillTitle_success[_ngcontent-%COMP%]:hover {\n  color: #00d68f;\n}\n\n.bestGameList[_ngcontent-%COMP%]:first-child {\n  border-top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQU1BO0VBQ0U7SUFDRSwyQkFBQTtJQUNBLDRCQUFBO0VBSEY7QUFDRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFKRjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFNQTtFQUNFLDhCQUFBO0VBQ0Esb0JBQUE7RUFDQSw2QkFBQTtFQUVBLGdCQUFBO0VBQ0Esd0JBQUE7VUFBQSxxQkFBQTtFQUNBLHVCQUFBO1VBQUEsbUJBQUE7QUFKRjs7QUFNQTtFQUNFLGtCQUFBO0FBSEY7O0FBTUE7RUFDRSxtQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QUFIRjs7QUFLQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0FBREY7O0FBSUE7RUFDRSwwQkFBQTtBQURGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9hYm91dC9hYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIC5wcm9ncmVzcy1jb250YWluZXIge1xyXG4gIGhlaWdodDogMC41cmVtICFpbXBvcnRhbnQ7XHJcbn1cclxuOmhvc3QgOjpuZy1kZWVwIG5iLWljb24ge1xyXG4gIG1hcmdpbi1yaWdodDogMXB4O1xyXG59XHJcbi50b29sdGlwU2tpbGwgc3BhbixcclxuLlNraWxsX3RpdGxlLFxyXG4uYmVzdEdhbWUge1xyXG4gIC8vbGV0dGVyLXNwYWNpbmc6IDAuMDNyZW07XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzZweCkge1xyXG4gIC5za2lsbC5yb3cge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5za2lsbCB7XHJcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xyXG4gIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcclxufVxyXG4uc2tpbGwgLmNvbC1zbS02IHtcclxuICBwYWRkaW5nLXJpZ2h0OiAwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XHJcbn1cclxuXHJcbi5za2lsbCBwIHtcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwICFpbXBvcnRhbnQ7XHJcbiAgZm9udC1zaXplOiAwLjkzNzVyZW07XHJcbiAgcGFkZGluZy1yaWdodDogOHB4ICFpbXBvcnRhbnQ7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAwO1xyXG4gIG1hcmdpbi1ibG9jay1lbmQ6IDA7XHJcbn1cclxuLnNraWxsIG5iLXByb2dyZXNzLWJhciB7XHJcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG59XHJcblxyXG4uU2tpbGxfdGl0bGUge1xyXG4gIGZvbnQtc2l6ZTogMS4xMjVyZW07XHJcbiAgZm9udC13ZWlnaHQ6IDYwMDtcclxuICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xyXG59XHJcbi50b29sdGlwU2tpbGwge1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5za2lsbFRpdGxlX3ByaW1hcnk6aG92ZXIge1xyXG4gIGNvbG9yOiAjMzM2NmZmO1xyXG59XHJcbi5za2lsbFRpdGxlX2luZm86aG92ZXIge1xyXG4gIGNvbG9yOiAjMDA5NWZmO1xyXG59XHJcblxyXG4uc2tpbGxUaXRsZV93YXJuaW5nOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmYWEwMDtcclxufVxyXG5cclxuLnNraWxsVGl0bGVfZGFuZ2VyOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmM2Q3MTtcclxufVxyXG5cclxuLnNraWxsVGl0bGVfc3VjY2Vzczpob3ZlciB7XHJcbiAgY29sb3I6ICMwMGQ2OGY7XHJcbn1cclxuXHJcbi5iZXN0R2FtZUxpc3Q6Zmlyc3QtY2hpbGQge1xyXG4gIGJvcmRlci10b3A6IDBweCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page/contact/contact.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/contact/contact.component.ts ***!
  \***************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");



class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 5, vars: 0, consts: [[1, "row", "no-gutters"], [1, "col-xl-12"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Contact ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"]], styles: ["[class*=col-][_ngcontent-%COMP%] {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page/project/project.component.ts":
/*!***************************************************!*\
  !*** ./src/app/page/project/project.component.ts ***!
  \***************************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");






function ProjectComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectComponent_div_0_div_1_Template_nb_card_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const project_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r3.navSub(project_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r2 = ctx.$implicit;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r2.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.getCover(project_r2.id), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectComponent_div_0_div_1_Template, 6, 2, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.projects);
} }
class ProjectComponent {
    constructor(router, pService) {
        this.router = router;
        this.pService = pService;
        this.pService.init(this);
    }
    setData() {
        this.projects = this.pService.getProjects();
    }
    ngOnInit() { }
    navSub(id) {
        this.router.navigate([`subproject/${id}`]);
    }
    getCover(id) {
        return `assets/project/cover/${id}_cover.jpg`;
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 1, vars: 1, consts: [["class", "row no-gutters", 4, "ngIf"], [1, "row", "no-gutters"], ["class", "col-sm-6 col-lg-4 col-xl-3 ", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-lg-4", "col-xl-3"], [3, "click"], [1, "projectTitle"], ["onerror", "this.src='https://via.placeholder.com/400x300'", 1, "img-fluid", "rounded", 3, "src"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectComponent_div_0_Template, 2, 1, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.projects);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"]], styles: ["[_nghost-%COMP%]     nb-card {\n  cursor: pointer;\n}\n\n[_nghost-%COMP%]     nb-card-body {\n  padding: 0;\n  overflow: hidden;\n  border-radius: 0.25rem;\n}\n\n[_nghost-%COMP%]     nb-card-body img {\n  transition: all 0.3s ease-in-out;\n}\n\n[_nghost-%COMP%]     nb-card-body:hover img {\n  transform: scale(1.1, 1.1);\n  -ms-transform: scale(1.1, 1.1);\n  -webkit-transform: scale(1.1, 1.1);\n}\n\n[_nghost-%COMP%]     nb-card-body:hover .projectTitle {\n  opacity: 1;\n  transition: all 0.3s;\n}\n\n[class*=col-][_ngcontent-%COMP%] {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.projectTitle[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  margin: 10px;\n  padding: 4.5px 8px 4.5px 8px;\n  z-index: 1;\n  background: rgba(0, 0, 0, 0.7);\n  border-radius: 3px;\n  opacity: 0;\n  font-weight: 600;\n  font-size: 1rem;\n  transition: all 0.3s;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBQUVGOztBQUVBO0VBS0UsZ0NBQUE7QUFDRjs7QUFFQTtFQUNFLDBCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQ0FBQTtBQUNGOztBQUVBO0VBQ0UsVUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUE7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7RUFDQSxVQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUNGOztBQUVBO0VBQ0UsV0FBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9wcm9qZWN0L3Byb2plY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCA6Om5nLWRlZXAgbmItY2FyZCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbjpob3N0IDo6bmctZGVlcCBuYi1jYXJkLWJvZHkge1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xyXG59XHJcblxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5iLWNhcmQtYm9keSBpbWcge1xyXG4gIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgLW1vei10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtby10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLWluLW91dDtcclxuICAtbXMtdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbi1vdXQ7XHJcbn1cclxuXHJcbjpob3N0IDo6bmctZGVlcCBuYi1jYXJkLWJvZHk6aG92ZXIgaW1nIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjEsIDEuMSk7XHJcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKTtcclxufVxyXG5cclxuOmhvc3QgOjpuZy1kZWVwIG5iLWNhcmQtYm9keTpob3ZlciAucHJvamVjdFRpdGxle1xyXG4gIG9wYWNpdHk6IDE7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuXHJcbltjbGFzcyo9XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG5cclxuLnByb2plY3RUaXRsZXtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwcHg7XHJcbiAgcmlnaHQ6IDBweDtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDQuNXB4IDhweCA0LjVweCA4cHg7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kOnJnYmEoMCwgMCwgMCwgMC43KTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMXJlbTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/page/resume/resume.component.ts":
/*!*************************************************!*\
  !*** ./src/app/page/resume/resume.component.ts ***!
  \*************************************************/
/*! exports provided: ResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResumeComponent", function() { return ResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng2-pdf-viewer */ "./node_modules/ng2-pdf-viewer/__ivy_ngcc__/fesm2015/ng2-pdf-viewer.js");




class ResumeComponent {
    constructor() {
        this.pdfSrc = `assets/Resume.pdf`;
        console.log(this.pdfSrc);
    }
    ngOnInit() {
    }
}
ResumeComponent.ɵfac = function ResumeComponent_Factory(t) { return new (t || ResumeComponent)(); };
ResumeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ResumeComponent, selectors: [["app-resume"]], decls: 4, vars: 2, consts: [[1, "row", "no-gutters", "justify-content-center"], [2, "display", "block", 3, "src", "render-text"]], template: function ResumeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "nb-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card-body");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "pdf-viewer", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.pdfSrc)("render-text", true);
    } }, directives: [_nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_1__["NbCardBodyComponent"], ng2_pdf_viewer__WEBPACK_IMPORTED_MODULE_2__["PdfViewerComponent"]], styles: ["[class*=col-][_ngcontent-%COMP%] {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZS9yZXN1bWUvcmVzdW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiW2NsYXNzKj1cImNvbC1cIl0ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ResumeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-resume',
                templateUrl: './resume.component.html',
                styleUrls: ['./resume.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/page/subproject/subproject.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/page/subproject/subproject.component.ts ***!
  \*********************************************************/
/*! exports provided: SubprojectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubprojectComponent", function() { return SubprojectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _service_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/project.service */ "./src/app/service/project.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _nebular_theme__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @nebular/theme */ "./node_modules/@nebular/theme/__ivy_ngcc__/fesm2015/index.js");
/* harmony import */ var _service_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../service/pipe */ "./src/app/service/pipe.ts");







function SubprojectComponent_div_0_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "iframe", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "safe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r12.getVideo()), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
} }
function SubprojectComponent_div_0_div_11_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_0_div_11_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index; const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); ctx_r14.openModal(); return ctx_r14.currentSlide(i_r11); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx_r13.getThumbClassName());
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r13.getThumb(i_r11), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0, a1) { return { "col-12": a0, "col-4": a1 }; };
function SubprojectComponent_div_0_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubprojectComponent_div_0_div_11_div_1_Template, 3, 3, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SubprojectComponent_div_0_div_11_div_2_Template, 4, 3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const isFirst_r10 = ctx.first;
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, ctx_r2.isFullWidth(isFirst_r10), !ctx_r2.isFullWidth(isFirst_r10)));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", isFirst_r10 && ctx_r2.project.demoVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !isFirst_r10 || !ctx_r2.project.demoVideo);
} }
function SubprojectComponent_div_0_div_18_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const outline_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](outline_r19);
} }
function SubprojectComponent_div_0_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubprojectComponent_div_0_div_18_div_1_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r3.project.outline);
} }
function SubprojectComponent_div_0_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const info_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r20.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](info_r20.desc);
} }
function SubprojectComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r21);
} }
function SubprojectComponent_div_0_div_22_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const member_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r23.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](member_r23.role);
} }
function SubprojectComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h6", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Team Members");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SubprojectComponent_div_0_div_22_div_3_Template, 6, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.project.members);
} }
function SubprojectComponent_div_0_button_23_Template(rf, ctx) { if (rf & 1) {
    const _r25 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_0_button_23_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r25); const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r24.goToLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r7.getLinkText(), " ");
} }
function SubprojectComponent_div_0_button_24_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_0_button_24_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.goToSCLink(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "nb-icon", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " SOURCE CODE ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function () { return []; };
function SubprojectComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nb-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "nb-card-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, SubprojectComponent_div_0_div_11_Template, 3, 6, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nb-card", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "nb-card-body");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, SubprojectComponent_div_0_div_18_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, SubprojectComponent_div_0_div_19_Template, 6, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, SubprojectComponent_div_0_div_21_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, SubprojectComponent_div_0_div_22_Template, 4, 1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, SubprojectComponent_div_0_button_23_Template, 3, 1, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, SubprojectComponent_div_0_button_24_Template, 3, 0, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_0_Template_button_click_26_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.previousProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "nb-icon", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Previous ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_0_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.backToMenu(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "nb-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Home ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_0_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29); const ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r31.nextProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "nb-icon", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c1).constructor(ctx_r0.getMediaLength()));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.outline);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.project.infos);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.project.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.members);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.link);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.SCLink);
} }
function SubprojectComponent_div_1_div_5_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r36 = ctx.index;
    const ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r34.getThumb(i_r36), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SubprojectComponent_div_1_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubprojectComponent_div_1_div_5_div_1_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1).constructor(ctx_r32.getMediaLength()));
} }
function SubprojectComponent_div_1_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r39 = ctx.index;
    const ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r37.getThumb(i_r39 + 1), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function SubprojectComponent_div_1_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubprojectComponent_div_1_div_6_div_1_Template, 2, 1, "div", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1).constructor(ctx_r33.getMediaLength() - 1));
} }
function SubprojectComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r41 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_1_Template_span_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r40 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r40.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2716");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, SubprojectComponent_div_1_div_5_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, SubprojectComponent_div_1_div_6_Template, 2, 2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_1_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r42 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r42.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_1_Template_a_click_8_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r43 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r43.plusSlides(0 - 1); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u276E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SubprojectComponent_div_1_Template_a_click_10_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r41); const ctx_r44 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); ctx_r44.plusSlides(1); return $event.stopPropagation(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u276F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r1.project.demoVideo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.project.demoVideo);
} }
class SubprojectComponent {
    constructor(router, route, pService) {
        this.router = router;
        this.route = route;
        this.pService = pService;
        this.slideIndex = 0;
        this.projectId = this.route.snapshot.params.id;
        this.pService.init(this);
        this.router.routeReuseStrategy.shouldReuseRoute = () => {
            return false;
        };
    }
    setData() {
        this.project = this.pService.getProject(this.projectId);
    }
    ngOnInit() {
    }
    //big Image
    openModal() {
        document.getElementById('bigImg').style.display = 'block';
    }
    closeModal() {
        document.getElementById('bigImg').style.display = 'none';
    }
    plusSlides(n) {
        this.slideIndex += n;
        this.showSlides();
    }
    currentSlide(n) {
        this.slideIndex = n;
        this.showSlides();
    }
    showSlides() {
        const slides = document.getElementsByClassName('img-slides');
        var baseIndex = 1;
        var maxIndex = slides.length;
        if (this.project.demoVideo == null) {
            baseIndex = 0;
            maxIndex = slides.length - 1;
        }
        if (this.slideIndex > maxIndex) {
            this.slideIndex = baseIndex;
        }
        if (this.slideIndex < baseIndex) {
            this.slideIndex = maxIndex;
        }
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[this.slideIndex - baseIndex].style.display = 'block';
    }
    getMediaLength() {
        let mediaLength = this.project.mediaLength;
        if (mediaLength == null) {
            return 4;
        }
        else {
            return mediaLength;
        }
    }
    getThumbClassName() {
        let thumbClass = this.project.thumbClass;
        if (thumbClass == null) {
            return 'ratio16vs9';
        }
        else {
            return thumbClass;
        }
    }
    getThumb(index) {
        return `assets/project/thumb/${this.projectId}_thumb_${index}.jpg`;
    }
    getVideo() {
        return `https://www.youtube.com/embed/${this.project.demoVideo}?rel=0`;
    }
    isFullWidth(isFirst) {
        return isFirst && this.project.noMainImage == null;
    }
    //router
    previousProject() {
        const previousId = this.pService.getPlusProjectId(this.projectId, -1);
        this.router.navigate([`subproject/${previousId}`]);
    }
    nextProject() {
        const nextId = this.pService.getPlusProjectId(this.projectId, 1);
        this.router.navigate([`subproject/${nextId}`]);
    }
    backToMenu() {
        this.router.navigate([`project`]);
    }
    goToLink() {
        window.open(this.project.link, "_blank");
    }
    goToSCLink() {
        window.open(this.project.SCLink, "_blank");
    }
    getLinkText() {
        return (this.project.linkType) ? this.project.linkType : 'DOWNLOAD';
    }
}
SubprojectComponent.ɵfac = function SubprojectComponent_Factory(t) { return new (t || SubprojectComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
SubprojectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubprojectComponent, selectors: [["app-subproject"]], decls: 2, vars: 2, consts: [["class", "row no-gutters justify-content-md-center", 4, "ngIf"], ["id", "bigImg", 4, "ngIf"], [1, "row", "no-gutters", "justify-content-md-center"], [1, "col-xl-10"], ["id", "main-card"], ["id", "project_title"], [1, "row", "no-gutters", "margin-back"], [1, "col-lg-8"], [1, "lc-gallery"], [1, "row", "no-gutters"], [3, "ngClass", 4, "ngFor", "ngForOf"], ["id", "lc_details", 1, "col-lg-4"], [1, "lc_container"], [1, "no-padding"], [1, "lc_small-crad"], ["class", "lc_outline", 4, "ngIf"], ["class", "row no-gutters", 4, "ngFor", "ngForOf"], ["id", "lc_tag"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "button", "class", "btn btn-info btn-sm ", 3, "click", 4, "ngIf"], ["style", "margin-left: 5px;", "type", "button", "class", "btn btn-info btn-sm", 3, "click", 4, "ngIf"], ["id", "btn-actions", "role", "group", 1, "btn-group", "mt-auto"], ["type", "button", 1, "btn", "btn-outline-success", "btn-sm", 3, "click"], ["icon", "arrow-back-outline", 1, "main-back-icon"], ["type", "button", 1, "btn", "btn-outline-warning", "btn-sm", 3, "click"], ["icon", "home-outline", 1, "main-back-icon"], ["icon", "arrow-forward-outline", 1, "main-forward-icon"], [3, "ngClass"], ["class", "embed-responsive embed-responsive-16by9", 4, "ngIf"], ["class", "lightbox", 3, "click", 4, "ngIf"], [1, "embed-responsive", "embed-responsive-16by9"], ["scrolling", "no", "frameborder", "0", "allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], [1, "lightbox", 3, "click"], ["icon", "maximize-outline"], [3, "src"], [1, "lc_outline"], [1, "text-left", "col-lg-4", "col-md-6", "col-6"], [1, "col-lg-8", "col-6"], [1, "small-title"], [1, "col-lg-8", "col-md-6", "col-6"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 3, "click"], ["icon", "attach-outline", 1, "back-icon"], ["type", "button", 1, "btn", "btn-info", "btn-sm", 2, "margin-left", "5px", 3, "click"], ["id", "bigImg"], [1, "bigImg-container"], [1, "close", 3, "click"], [1, "slide-modal-content"], [1, "click-area", 3, "click"], [1, "prev", 3, "click"], [1, "next", 3, "click"], ["class", "img-slides", 4, "ngFor", "ngForOf"], [1, "img-slides"], [1, "image-fullscreen", 3, "src"]], template: function SubprojectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SubprojectComponent_div_0_Template, 35, 9, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SubprojectComponent_div_1_Template, 12, 2, "div", 1);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardHeaderComponent"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbCardBodyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _nebular_theme__WEBPACK_IMPORTED_MODULE_4__["NbIconComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"]], pipes: [_service_pipe__WEBPACK_IMPORTED_MODULE_5__["SafePipe"]], styles: ["[class*=col-][_ngcontent-%COMP%] {\n  padding-right: 10px;\n  padding-left: 10px;\n}\n\n.no-scrollbar[_ngcontent-%COMP%] {\n  overflow: hidden !important;\n}\n\n.lc_small-crad[_ngcontent-%COMP%]   [class*=col-][_ngcontent-%COMP%] {\n  padding-right: 0px;\n  padding-left: 0px;\n}\n\n.no-padding[_ngcontent-%COMP%] {\n  margin-left: 0px;\n  margin-right: 0px;\n}\n\n.no-color[_ngcontent-%COMP%] {\n  background-color: inherit;\n}\n\n.margin-back[_ngcontent-%COMP%] {\n  margin-left: -10px;\n  margin-right: -10px;\n}\n\n\n\n.lc-gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 2px;\n}\n\n.lc-gallery[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%] {\n  margin-left: -2px;\n  margin-right: -2px;\n}\n\n.lc-gallery[_ngcontent-%COMP%]   .lightbox[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n.lc-gallery[_ngcontent-%COMP%]   .lightbox[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 0;\n  position: relative;\n}\n\n.lc-gallery[_ngcontent-%COMP%]   .lightbox[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-top: -13px;\n  margin-left: -13px;\n  opacity: 0;\n  color: #fff;\n  font-size: 26px;\n  pointer-events: none;\n  z-index: 9000;\n  transition: 0.3s;\n}\n\n.lc-gallery[_ngcontent-%COMP%]   .lightbox[_ngcontent-%COMP%]:after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  opacity: 0;\n  background-color: rgba(0, 0, 0, 0.3);\n  content: \"\";\n  transition: 0.3s;\n}\n\n.lightbox[_ngcontent-%COMP%]     nb-icon {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  z-index: 63;\n  transform: translate(-50%, -50%);\n  -ms-transform: translate(-50%, -50%);\n  opacity: 0;\n  font-size: 30px;\n}\n\n.lc-gallery[_ngcontent-%COMP%]   .lightbox[_ngcontent-%COMP%]:hover     nb-icon {\n  opacity: 1;\n}\n\n.lc-gallery[_ngcontent-%COMP%]   .lightbox[_ngcontent-%COMP%]:hover:after, .lc-gallery[_ngcontent-%COMP%]   .lightbox[_ngcontent-%COMP%]:hover:before {\n  opacity: 1;\n}\n\n\n\n#bigImg[_ngcontent-%COMP%] {\n  display: none;\n  position: absolute;\n  z-index: 100000;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  overflow: auto;\n  background-color: rgba(0, 0, 0, 0.8);\n}\n\n.image-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.image-row[_ngcontent-%COMP%]    > .image-column[_ngcontent-%COMP%] {\n  padding: 5px 10px;\n}\n\n.image-row[_ngcontent-%COMP%]:after {\n  content: \"\";\n  display: table;\n  clear: both;\n}\n\n.image-column[_ngcontent-%COMP%] {\n  float: left;\n  width: 25%;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.bigImg-container[_ngcontent-%COMP%] {\n  justify-content: center;\n  align-items: center;\n  display: flex;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n}\n\n.slide-modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  margin: auto;\n  padding: 0;\n  z-index: 2;\n}\n\n.slide-modal-content[_ngcontent-%COMP%]   .image-column[_ngcontent-%COMP%] {\n  padding: 0;\n}\n\n.close[_ngcontent-%COMP%] {\n  color: white;\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  font-size: 20px;\n  font-weight: bold;\n  text-align: center;\n  line-height: 50px;\n  z-index: 3;\n  width: 50px;\n  height: 50px;\n  cursor: pointer;\n  border-radius: 80px;\n  transition: 0.2s;\n  background-color: rgba(51, 102, 255, 0);\n}\n\n.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus {\n  cursor: pointer;\n  transition: 0.2s;\n  background-color: rgba(51, 102, 255, 0.8);\n}\n\n.img-slides[_ngcontent-%COMP%] {\n  display: none;\n}\n\n.prev[_ngcontent-%COMP%], .next[_ngcontent-%COMP%] {\n  cursor: pointer;\n  position: absolute;\n  top: calc(50% - 28px);\n  padding: 18px;\n  color: white !important;\n  font-weight: bold;\n  font-size: 20px;\n  transition: 0.2s;\n  border-radius: 0 10px 10px 0;\n  -moz-user-select: none;\n       user-select: none;\n  -webkit-user-select: none;\n  background-color: rgba(51, 102, 255, 0.2);\n  text-decoration: none;\n}\n\n.next[_ngcontent-%COMP%] {\n  right: 0;\n  border-radius: 10px 0 0 10px;\n}\n\n.prev[_ngcontent-%COMP%]:hover, .next[_ngcontent-%COMP%]:hover {\n  transition: 0.2s;\n  background-color: rgba(51, 102, 255, 0.8);\n}\n\n.image-fullscreen[_ngcontent-%COMP%] {\n  max-width: 90vw;\n  max-height: 90vh;\n  width: auto;\n}\n\n.click-area[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  height: 100%;\n  width: 100%;\n  z-index: 1;\n}\n\n.back-icon[_ngcontent-%COMP%] {\n  line-height: 1rem;\n}\n\n.forward-icon[_ngcontent-%COMP%] {\n  line-height: 1rem;\n}\n\n.main-back-icon[_ngcontent-%COMP%] {\n  line-height: 1rem;\n  margin-left: -3px;\n  margin-right: 0.1rem !important;\n}\n\n.main-forward-icon[_ngcontent-%COMP%] {\n  line-height: 1rem;\n  margin-left: 0.1rem !important;\n  margin-right: -3px;\n}\n\n#main-card[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n\n#lc_details[_ngcontent-%COMP%]     nb-card {\n  margin-bottom: 1rem;\n}\n\n#lc_details[_ngcontent-%COMP%]   h6[_ngcontent-%COMP%] {\n  font-size: 1rem;\n}\n\n#lc_details[_ngcontent-%COMP%]   .lc_container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n#project_title[_ngcontent-%COMP%] {\n  float: left;\n}\n\n#btn-actions[_ngcontent-%COMP%] {\n  float: right;\n}\n\n#btn-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:first-child {\n  border-right: 0px;\n}\n\n#btn-actions[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]:last-child {\n  border-left: 0px;\n}\n\n@media (max-width: 576px) {\n  #btn-actions[_ngcontent-%COMP%] {\n    float: left;\n  }\n}\n\n#lc_tag[_ngcontent-%COMP%] {\n  display: flex;\n  -webkit-padding-start: 0;\n          padding-inline-start: 0;\n  margin-top: 10px;\n  margin-bottom: -5px;\n  flex-wrap: wrap;\n}\n\n#lc_tag[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  text-transform: none;\n  background-color: rgba(0, 214, 143, 0.08);\n  border-color: #00d68f;\n  color: #00d68f;\n  padding: 0.3125rem 0.625rem;\n  border-style: solid;\n  border-width: 0.0625rem;\n  border-radius: 1.5rem;\n  line-height: 0.8rem;\n  font-family: Open Sans, sans-serif;\n  font-weight: 600;\n}\n\n.lc_outline[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n\n.lc_outline[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:not(:last-child) {\n  margin-bottom: 5px;\n}\n\n.small-title[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  margin-bottom: 10px;\n  line-height: 1.6;\n  font-weight: bold;\n  background-color: rgba(255, 170, 0, 0.08);\n  border-color: #ffaa00;\n  color: #ffaa00;\n  text-align: center;\n}\n\n.ratio4vs3[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 75%;\n}\n\n.ratio4vs3[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute !important;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.ratio16vs9[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 56.2%;\n}\n\n.ratio16vs9[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute !important;\n  object-fit: cover;\n  width: 100%;\n  height: 100%;\n}\n\n.ratio3vs4[_ngcontent-%COMP%] {\n  position: relative;\n  padding-bottom: 125%;\n}\n\n.ratio3vs4[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  position: absolute !important;\n  object-fit: cover;\n  height: 100%;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZS9zdWJwcm9qZWN0L3N1YnByb2plY3QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGOztBQUFBO0VBQ0Usa0JBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UseUJBQUE7QUFHRjs7QUFBQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFBQSxnQ0FBQTs7QUFFQTtFQUNFLFlBQUE7QUFFRjs7QUFDQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0Esb0NBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0EsZ0NBQUE7RUFDQSxvQ0FBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0FBR0Y7O0FBQUE7O0VBRUUsVUFBQTtBQUdGOztBQUFBLDZCQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esb0NBQUE7QUFHRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBQUE7RUFDRSxpQkFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UsV0FBQTtBQUdGOztBQUFBO0VBQ0UsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBR0Y7O0FBQUE7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsVUFBQTtBQUdGOztBQUFBO0VBQ0UsVUFBQTtBQUdGOztBQUFBO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1Q0FBQTtBQUdGOztBQUFBOztFQUVFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHlDQUFBO0FBR0Y7O0FBQUE7RUFDRSxhQUFBO0FBR0Y7O0FBQ0E7O0VBRUUsZUFBQTtFQUNBLGtCQUFBO0VBQ0EscUJBQUE7RUFFQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7T0FBQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EseUNBQUE7RUFDQSxxQkFBQTtBQUNGOztBQUVBO0VBQ0UsUUFBQTtFQUNBLDRCQUFBO0FBQ0Y7O0FBRUE7O0VBR0UsZ0JBQUE7RUFDQSx5Q0FBQTtBQUFGOztBQUdBO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQUFGOztBQUdBO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsVUFBQTtBQUFGOztBQUdBO0VBQ0UsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0FBQUY7O0FBR0E7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7QUFBRjs7QUFHQTtFQUNFLGlCQUFBO0VBQ0EsOEJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7QUFBRjs7QUFJRTtFQUNFLG1CQUFBO0FBREo7O0FBSUU7RUFDRSxlQUFBO0FBRko7O0FBS0U7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0FBSEo7O0FBU0E7RUFDRSxXQUFBO0FBUEY7O0FBVUE7RUFDRSxZQUFBO0FBUEY7O0FBUUU7RUFDRSxpQkFBQTtBQU5KOztBQVFFO0VBQ0UsZ0JBQUE7QUFOSjs7QUFVQTtFQUNFO0lBQ0UsV0FBQTtFQVBGO0FBQ0Y7O0FBVUE7RUFDRSxhQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBUkY7O0FBU0U7RUFDRSxpQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUVBLHlDQUFBO0VBQ0EscUJBQUE7RUFDQSxjQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtDQUFBO0VBQ0EsZ0JBQUE7QUFSSjs7QUFZQTtFQUNFLG1CQUFBO0FBVEY7O0FBV0E7RUFDRSxrQkFBQTtBQVJGOztBQVdBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLHFCQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBVEY7O0FBWUE7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0FBVEY7O0FBVUU7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFSSjs7QUFZQTtFQUNFLGtCQUFBO0VBQ0EscUJBQUE7QUFURjs7QUFVRTtFQUNFLDZCQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQVJKOztBQVlBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQVRGOztBQVVFO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0FBUkoiLCJmaWxlIjoic3JjL2FwcC9wYWdlL3N1YnByb2plY3Qvc3VicHJvamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIltjbGFzcyo9XCJjb2wtXCJdIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxufVxyXG4ubm8tc2Nyb2xsYmFyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuICFpbXBvcnRhbnQ7XHJcbn1cclxuLmxjX3NtYWxsLWNyYWQgW2NsYXNzKj1cImNvbC1cIl0ge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDBweDtcclxufVxyXG5cclxuLm5vLXBhZGRpbmcge1xyXG4gIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAwcHg7XHJcbn1cclxuXHJcbi5uby1jb2xvciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogaW5oZXJpdDtcclxufVxyXG5cclxuLm1hcmdpbi1iYWNrIHtcclxuICBtYXJnaW4tbGVmdDogLTEwcHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAtMTBweDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSovXHJcblxyXG4ubGMtZ2FsbGVyeSAucm93ID4gZGl2IHtcclxuICBwYWRkaW5nOiAycHg7XHJcbn1cclxuXHJcbi5sYy1nYWxsZXJ5IC5yb3cge1xyXG4gIG1hcmdpbi1sZWZ0OiAtMnB4O1xyXG4gIG1hcmdpbi1yaWdodDogLTJweDtcclxufVxyXG5cclxuLmxjLWdhbGxlcnkgLmxpZ2h0Ym94IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5sYy1nYWxsZXJ5IC5saWdodGJveCBpbWcge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDA7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ubGMtZ2FsbGVyeSAubGlnaHRib3g6YmVmb3JlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIG1hcmdpbi10b3A6IC0xM3B4O1xyXG4gIG1hcmdpbi1sZWZ0OiAtMTNweDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIGZvbnQtc2l6ZTogMjZweDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICB6LWluZGV4OiA5MDAwO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5sYy1nYWxsZXJ5IC5saWdodGJveDphZnRlciB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBvcGFjaXR5OiAwO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRyYW5zaXRpb246IDAuM3M7XHJcbn1cclxuXHJcbi5saWdodGJveCA6Om5nLWRlZXAgbmItaWNvbiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIGxlZnQ6IDUwJTtcclxuICB6LWluZGV4OiA2MztcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcclxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgb3BhY2l0eTogMDtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLmxjLWdhbGxlcnkgLmxpZ2h0Ym94OmhvdmVyIDo6bmctZGVlcCBuYi1pY29uIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcblxyXG4ubGMtZ2FsbGVyeSAubGlnaHRib3g6aG92ZXI6YWZ0ZXIsXHJcbi5sYy1nYWxsZXJ5IC5saWdodGJveDpob3ZlcjpiZWZvcmUge1xyXG4gIG9wYWNpdHk6IDE7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0qL1xyXG4jYmlnSW1nIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB6LWluZGV4OiAxMDAwMDA7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OiBhdXRvO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44KTtcclxufVxyXG5cclxuLmltYWdlLXJvdyB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbn1cclxuXHJcbi5pbWFnZS1yb3cgPiAuaW1hZ2UtY29sdW1uIHtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxufVxyXG5cclxuLmltYWdlLXJvdzphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBkaXNwbGF5OiB0YWJsZTtcclxuICBjbGVhcjogYm90aDtcclxufVxyXG5cclxuLmltYWdlLWNvbHVtbiB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDI1JTtcclxufVxyXG5cclxuaW1nIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJpZ0ltZy1jb250YWluZXIge1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5zbGlkZS1tb2RhbC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgei1pbmRleDogMjtcclxufVxyXG5cclxuLnNsaWRlLW1vZGFsLWNvbnRlbnQgLmltYWdlLWNvbHVtbiB7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMTBweDtcclxuICByaWdodDogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGxpbmUtaGVpZ2h0OiA1MHB4O1xyXG4gIHotaW5kZXg6IDM7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiA4MHB4O1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMTAyLCAyNTUsIDApO1xyXG59XHJcblxyXG4uY2xvc2U6aG92ZXIsXHJcbi5jbG9zZTpmb2N1cyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IDAuMnM7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMTAyLCAyNTUsIDAuOCk7XHJcbn1cclxuXHJcbi5pbWctc2xpZGVzIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcblxyXG5cclxuLnByZXYsXHJcbi5uZXh0IHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogY2FsYyg1MCUgLSAyOHB4KTtcclxuXHJcbiAgcGFkZGluZzogMThweDtcclxuICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBib3JkZXItcmFkaXVzOiAwIDEwcHggMTBweCAwO1xyXG4gIHVzZXItc2VsZWN0OiBub25lO1xyXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg1MSwgMTAyLCAyNTUsIDAuMik7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG59XHJcblxyXG4ubmV4dCB7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAwIDAgMTBweDtcclxufVxyXG5cclxuLnByZXY6aG92ZXIsXHJcbi5uZXh0OmhvdmVyIHtcclxuXHJcbiAgdHJhbnNpdGlvbjogMC4ycztcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNTEsIDEwMiwgMjU1LCAwLjgpO1xyXG59XHJcblxyXG4uaW1hZ2UtZnVsbHNjcmVlbiB7XHJcbiAgbWF4LXdpZHRoOiA5MHZ3O1xyXG4gIG1heC1oZWlnaHQ6IDkwdmg7XHJcbiAgd2lkdGg6IGF1dG87XHJcbn1cclxuXHJcbi5jbGljay1hcmVhIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5iYWNrLWljb24ge1xyXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG59XHJcblxyXG4uZm9yd2FyZC1pY29uIHtcclxuICBsaW5lLWhlaWdodDogMXJlbTtcclxufVxyXG5cclxuLm1haW4tYmFjay1pY29uIHtcclxuICBsaW5lLWhlaWdodDogMXJlbTtcclxuICBtYXJnaW4tbGVmdDogLTNweDtcclxuICBtYXJnaW4tcmlnaHQ6IDAuMXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubWFpbi1mb3J3YXJkLWljb24ge1xyXG4gIGxpbmUtaGVpZ2h0OiAxcmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiAwLjFyZW0gIWltcG9ydGFudDtcclxuICBtYXJnaW4tcmlnaHQ6IC0zcHg7XHJcbn1cclxuXHJcbiNtYWluLWNhcmQge1xyXG4gIG1hcmdpbi1ib3R0b206IDA7XHJcbn1cclxuXHJcbiNsY19kZXRhaWxzIHtcclxuICA6Om5nLWRlZXAgbmItY2FyZCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgaDYge1xyXG4gICAgZm9udC1zaXplOiAxcmVtO1xyXG4gIH1cclxuXHJcbiAgLmxjX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgID4gZGl2IHtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbiNwcm9qZWN0X3RpdGxlIHtcclxuICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuI2J0bi1hY3Rpb25zIHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgLmJ0bjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IDBweDtcclxuICB9XHJcbiAgLmJ0bjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAwcHg7XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNTc2cHgpIHtcclxuICAjYnRuLWFjdGlvbnMge1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgfVxyXG59XHJcblxyXG4jbGNfdGFnIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmctaW5saW5lLXN0YXJ0OiAwO1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogLTVweDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgPiAqIHtcclxuICAgIGZvbnQtc2l6ZTogMC44cmVtO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA1cHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcclxuXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDIxNCwgMTQzLCAwLjA4KTtcclxuICAgIGJvcmRlci1jb2xvcjogIzAwZDY4ZjtcclxuICAgIGNvbG9yOiAjMDBkNjhmO1xyXG4gICAgcGFkZGluZzogMC4zMTI1cmVtIDAuNjI1cmVtO1xyXG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICAgIGJvcmRlci13aWR0aDogMC4wNjI1cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMS41cmVtO1xyXG4gICAgbGluZS1oZWlnaHQ6IDAuOHJlbTtcclxuICAgIGZvbnQtZmFtaWx5OiBPcGVuIFNhbnMsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gIH1cclxufVxyXG5cclxuLmxjX291dGxpbmUge1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbn1cclxuLmxjX291dGxpbmUgPiBkaXY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xyXG59XHJcblxyXG4uc21hbGwtdGl0bGUge1xyXG4gIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuXHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMTcwLCAwLCAwLjA4KTtcclxuICBib3JkZXItY29sb3I6ICNmZmFhMDA7XHJcbiAgY29sb3I6ICNmZmFhMDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ucmF0aW80dnMzIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZy1ib3R0b206IDc1JTtcclxuICBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gIH1cclxufVxyXG5cclxuLnJhdGlvMTZ2czkge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogNTYuMiU7XHJcbiAgaW1nIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xyXG4gICAgb2JqZWN0LWZpdDogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9XHJcbn1cclxuXHJcbi5yYXRpbzN2czQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nLWJvdHRvbTogMTI1JTtcclxuICBpbWcge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlICFpbXBvcnRhbnQ7XHJcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubprojectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subproject',
                templateUrl: './subproject.component.html',
                styleUrls: ['./subproject.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _service_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/route-animation.ts":
/*!************************************!*\
  !*** ./src/app/route-animation.ts ***!
  \************************************/
/*! exports provided: fader */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fader", function() { return fader; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");

const fader = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('routeAnimations', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* <=> *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ position: 'relative' }),
        // Set a default  style for enter and leave
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter, :leave', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                position: 'absolute',
                width: '100%',
                opacity: 0,
            }),
        ], { optional: true }),
        // Animate the new page in
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('600ms ease', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 })),
        ], { optional: true })
    ]),
]);


/***/ }),

/***/ "./src/app/service/pipe.ts":
/*!*********************************!*\
  !*** ./src/app/service/pipe.ts ***!
  \*********************************/
/*! exports provided: SafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafePipe", function() { return SafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");



class SafePipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    }
}
SafePipe.ɵfac = function SafePipe_Factory(t) { return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safe", type: SafePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{ name: 'safe' }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "./src/app/service/project.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/project.service.ts ***!
  \********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/fesm2015/angular-fire-firestore.js");




class ProjectService {
    constructor(router, firestore) {
        this.router = router;
        this.firestore = firestore;
        this.valueChanges = this.firestore
            .collection('projects', ref => ref.orderBy('order'))
            .valueChanges({ idField: 'id' });
    }
    init(component) {
        if (!this.projects) {
            const subscription = this.valueChanges.subscribe((p) => {
                this.setProjects(p);
                component.setData();
                subscription.unsubscribe();
            });
        }
        else {
            component.setData();
        }
    }
    setProjects(p) {
        this.projects = p;
    }
    getProjects() {
        return this.projects.map(x => {
            return { id: x.id, name: x.name };
        });
    }
    getProject(id) {
        return this.projects.find(p => p.id === id);
    }
    getPlusProjectId(current_id, n) {
        let index = this.projects.findIndex(x => x.id === current_id);
        index += n;
        if (index >= this.projects.length) {
            index = 0;
        }
        if (index < 0) {
            index = this.projects.length - 1;
        }
        return this.projects[index].id;
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }]; }, null); })();


/***/ }),

/***/ "./src/assets/data/about.json":
/*!************************************!*\
  !*** ./src/assets/data/about.json ***!
  \************************************/
/*! exports provided: content, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"content\":\"Game Developer with 4 years of progressive experience, Cyber Security Engineer working on games and websites. Master of Science in Computer Engineering, New York University.\"}");

/***/ }),

/***/ "./src/assets/data/bestGame.json":
/*!***************************************!*\
  !*** ./src/assets/data/bestGame.json ***!
  \***************************************/
/*! exports provided: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, default */
/***/ (function(module) {

module.exports = JSON.parse("[\"Rain World\",\"Celeste\",\"Hollow Knight\",\"Kerbal Space Program\",\"Rabi-Ribi\",\"Doki Doki Literature Club\",\"Little Fighter 2\",\"Sonic Rush\",\"Undertale\",\"Fate/EXTRA CCC\",\"Osu! Tatakae! Ouendan\",\"Cuphead\",\"Inside\"]");

/***/ }),

/***/ "./src/assets/data/skills.json":
/*!*************************************!*\
  !*** ./src/assets/data/skills.json ***!
  \*************************************/
/*! exports provided: 0, 1, 2, default */
/***/ (function(module) {

module.exports = JSON.parse("[[{\"title\":\"Game Development\",\"rgbcolor\":\"#3366ff\",\"color\":\"primary\",\"skills\":[{\"name\":\"Unity\",\"percent\":\"99\",\"tooltip\":\"Customize Unity Editor, DOTS, URP, Shader Graph, Cinemachine, Tilemap, MMD4Mecanim\"},{\"name\":\"Script Optimization\",\"percent\":\"85\",\"tooltip\":\"Reducing GC Allocation, Writing data-oriented design and cache-friendly code\"},{\"name\":\"Engine Development\",\"percent\":\"75\",\"tooltip\":\"Collision Detection (Ray-AABB), Sandbox Development\"},{\"name\":\"OpenGL\",\"percent\":\"70\"}]},{\"title\":\"Cyber Security\",\"rgbcolor\":\"#0095ff\",\"color\":\"info\",\"skills\":[{\"name\":\"Game Security\",\"percent\":\"90\",\"tooltip\":\"Making Game Modifiers, Anti-cheat, MOD\"},{\"name\":\"Network Security\",\"percent\":\"75\",\"tooltip\":\"XSS, CSRF, SQL Injection, MITM\"},{\"name\":\"Reverse Engineering\",\"percent\":\"85\",\"tooltip\":\"Cheat Engine, IDA Pro, GDB, Ghidra, x64dbg, ILSpy\"},{\"name\":\"Cryptography\",\"percent\":\"65\",\"tooltip\":\"RSA, Blockchain\"}]}],[{\"title\":\"Front-End & Back-End\",\"rgbcolor\":\"#ffaa00\",\"color\":\"warning\",\"skills\":[{\"name\":\"JavaScript\",\"percent\":\"95\",\"tooltip\":\"Angular (2+), TypeScript, D3.js, Node.js, jQuery\"},{\"name\":\"HTML / CSS\",\"percent\":\"85\",\"tooltip\":\"Chrome Extension Development, Bootstrap\"},{\"name\":\"ASP.NET MVC 5\",\"percent\":\"75\"},{\"name\":\"SQL\",\"percent\":\"60\",\"tooltip\":\"Firebase, IBM DB2, MSSQL, MySQL\"}]},{\"title\":\"Programming Language\",\"rgbcolor\":\"#ff3d71\",\"color\":\"danger\",\"skills\":[{\"name\":\"Python\",\"percent\":\"95\",\"tooltip\":\"CTF, Pygame, NumPy, Flask, Kivy, Jupyter, Programming Z3\"},{\"name\":\"C#\",\"percent\":\"90\",\"tooltip\":\"UnityEngine, Mono, ASP.NET MVC, Windows Forms\"},{\"name\":\"C / C++\",\"percent\":\"80\"},{\"name\":\"Assembly\",\"percent\":\"75\",\"tooltip\":\"x86 / x64 Architecture, FASM, NASM\"}]}],[{\"title\":\"Design\",\"rgbcolor\":\"#00d68f\",\"color\":\"success\",\"skills\":[{\"name\":\"Digital Drawing\",\"percent\":\"75\"},{\"name\":\"Paint Tool SAI\",\"percent\":\"70\"},{\"name\":\"Adobe Photoshop\",\"percent\":\"60\"},{\"name\":\"Aseprite\",\"percent\":\"60\"}]},{\"title\":\"Other\",\"color\":\"control\",\"skills\":[{\"name\":\"Code Refactoring\",\"percent\":\"95\"},{\"name\":\"AI Development\",\"percent\":\"75\"},{\"name\":\"WinAPI\",\"percent\":\"70\"},{\"name\":\"Linux/Unix Administration\",\"percent\":\"65\"}]}]]");

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyDettCO-GIul-5KoSb01Ro8WViZWY8bqnE',
        authDomain: 'carter-yang-portfolio.firebaseapp.com',
        databaseURL: 'https://carter-yang-portfolio.firebaseio.com',
        projectId: 'carter-yang-portfolio',
        storageBucket: 'carter-yang-portfolio.appspot.com',
        messagingSenderId: '358333213996',
        appId: '1:358333213996:web:d8a40a5bbda6cfbdea1089',
        measurementId: 'G-4SKW0CSSYJ'
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\code\myCode\website\Portfolio\src\main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!**********************!*\
  !*** zlib (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 2:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 3:
/*!**********************!*\
  !*** http (ignored) ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 4:
/*!***********************!*\
  !*** https (ignored) ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 5:
/*!*********************!*\
  !*** url (ignored) ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map