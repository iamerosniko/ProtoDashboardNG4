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
var comment_1 = require("../../../entities/comment");
var comment_service_1 = require("../../../services/comment.service");
var ACCreateCommentComponent = (function () {
    function ACCreateCommentComponent(commentService) {
        this.commentService = commentService;
        this.refreshComment = new core_1.EventEmitter();
        this.comment = new comment_1.Comment(0, this.appid, '', '', new Date(), '');
    }
    ACCreateCommentComponent.prototype.submitComment = function () {
        var _this = this;
        this.comment.AppID = this.appid;
        this.commentService.postComment(this.comment)
            .then(function () {
            alert('success');
            _this.refreshComment.emit();
            _this.closeComment();
        });
    };
    ACCreateCommentComponent.prototype.closeComment = function () {
        this.comment = new comment_1.Comment(0, this.appid, '', '', new Date(), '');
    };
    return ACCreateCommentComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Number)
], ACCreateCommentComponent.prototype, "appid", void 0);
__decorate([
    core_1.Output(),
    __metadata("design:type", Object)
], ACCreateCommentComponent.prototype, "refreshComment", void 0);
ACCreateCommentComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ac-createcomment',
        templateUrl: "ac-createcomment.component.html"
    }),
    __metadata("design:paramtypes", [comment_service_1.CommentService])
], ACCreateCommentComponent);
exports.ACCreateCommentComponent = ACCreateCommentComponent;
