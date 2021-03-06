"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var rating_service_1 = require("../../../services/rating.service");
var ratings_1 = require("../../../entities/ratings");
var ACRatingsComponent = (function () {
    function ACRatingsComponent(route, router, ratingService) {
        this.route = route;
        this.router = router;
        this.ratingService = ratingService;
        this.ratings = new ratings_1.Ratings(0, 0, '', 0);
        this.avgRatings = new ratings_1.Ratings(0, 0, '', 0);
    }
    ACRatingsComponent.prototype.ngOnInit = function () {
        this.getselectedID();
        this.getRating();
        this.getAverage();
    };
    ACRatingsComponent.prototype.getselectedID = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.selectedID = params['id'];
        });
    };
    ACRatingsComponent.prototype.getRating = function () {
        var _this = this;
        this.ratingService.getRating(this.selectedID)
            .then(function (rat) { return _this.ratings = new ratings_1.Ratings(rat.RatingID, rat.AppID, rat.UserName, rat.Rating); });
    };
    ACRatingsComponent.prototype.getAverage = function () {
        var _this = this;
        this.ratingService.getAverageRating(this.selectedID)
            .then(function (rat) { return _this.avgRatings = new ratings_1.Ratings(rat.RatingID, rat.AppID, rat.UserName, rat.Rating); });
    };
    ACRatingsComponent.prototype.postRating = function () {
        var _this = this;
        this.ratingService.postRating(this.ratings)
            .then(function () {
            _this.getRating();
            _this.getAverage();
        }).catch(function () {
            console.log("update");
        });
    };
    ACRatingsComponent.prototype.getFeed = function () {
        if (this.avgRatings.Rating == 0)
            return "This app has no ratings yet. Be the first to rate.";
        else if (this.avgRatings.Rating == 5)
            return "Wow, this app got perfect score from our users!";
        else
            return "This app got score of " + this.avgRatings.Rating.toString() + " from our users!";
    };
    return ACRatingsComponent;
}());
ACRatingsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ac-ratings',
        templateUrl: 'ac-ratings.component.html'
    }),
    __metadata("design:paramtypes", [router_1.ActivatedRoute,
        router_1.Router,
        rating_service_1.RatingService])
], ACRatingsComponent);
exports.ACRatingsComponent = ACRatingsComponent;
