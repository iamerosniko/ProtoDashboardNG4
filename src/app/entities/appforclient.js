"use strict";
var AppForClient = (function () {
    function AppForClient(AppID, //primary key
        AppName, AppisWeb, BUName, DevFront, ModFront, OpsFront, IsUatAvail, AppIsActive) {
        this.AppID = AppID;
        this.AppName = AppName;
        this.AppisWeb = AppisWeb;
        this.BUName = BUName;
        this.DevFront = DevFront;
        this.ModFront = ModFront;
        this.OpsFront = OpsFront;
        this.IsUatAvail = IsUatAvail;
        this.AppIsActive = AppIsActive;
    }
    return AppForClient;
}());
exports.AppForClient = AppForClient;
