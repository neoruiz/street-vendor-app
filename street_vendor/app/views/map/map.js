var observable = require("data/observable");
var moment = require("moment");
var mapbox = require("nativescript-mapbox/mapbox.ios");

var HelloWorldModel = (function (_super) {
    __extends(HelloWorldModel, _super);
    function HelloWorldModel() {
        _super.call(this);
        this.set("dateshort", moment().format('l'));
        this.set("datelong", moment().format('LLLL'));
    }
    return HelloWorldModel;
})(observable.Observable);

function pageLoaded(args) {
    var page = args.object;
    page.bindingContext = new HelloWorldModel();
}
exports.pageLoaded = pageLoaded;