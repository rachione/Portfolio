"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.SubprojectComponent = void 0;
var core_1 = require("@angular/core");
var SubprojectComponent = /** @class */ (function () {
    function SubprojectComponent(router, route, pService) {
        this.router = router;
        this.route = route;
        this.pService = pService;
        this.slideIndex = 0;
        this.projectId = this.route.snapshot.params.id;
        this.pService.init(this);
    }
    SubprojectComponent.prototype.setData = function () {
        this.project = this.pService.getProject(this.projectId);
    };
    SubprojectComponent.prototype.ngOnInit = function () {
    };
    SubprojectComponent.prototype.openModal = function () {
        document.getElementById('bigImg').style.display = 'block';
    };
    SubprojectComponent.prototype.closeModal = function () {
        document.getElementById('bigImg').style.display = 'none';
    };
    SubprojectComponent.prototype.plusSlides = function (n) {
        this.slideIndex += n;
        this.showSlides();
    };
    SubprojectComponent.prototype.currentSlide = function (n) {
        this.slideIndex = n;
        this.showSlides();
    };
    SubprojectComponent.prototype.showSlides = function () {
        var slides = document.getElementsByClassName('img-slides');
        if (this.slideIndex > slides.length) {
            this.slideIndex = 1;
        }
        if (this.slideIndex < 1) {
            this.slideIndex = slides.length;
        }
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }
        slides[this.slideIndex - 1].style.display = 'block';
    };
    SubprojectComponent.prototype.previousProject = function () {
    };
    SubprojectComponent.prototype.nextProject = function () {
    };
    SubprojectComponent.prototype.backToMenu = function () {
        this.router.navigate(["project"]);
    };
    SubprojectComponent = __decorate([
        core_1.Component({
            selector: 'app-subproject',
            templateUrl: './subproject.component.html',
            styleUrls: ['./subproject.component.scss']
        })
    ], SubprojectComponent);
    return SubprojectComponent;
}());
exports.SubprojectComponent = SubprojectComponent;
