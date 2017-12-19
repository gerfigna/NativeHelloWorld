var frameModule = require("ui/frame");

exports.tap = function() {
    var topmost = frameModule.topmost();
    topmost.navigate("views/webview/webview");
};
