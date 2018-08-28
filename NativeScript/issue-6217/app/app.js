"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
var platform_1 = require("platform");
var application = require("application");
application.on(application.uncaughtErrorEvent, function (errData) {
    if (platform_1.isAndroid) {
        // For Android applications, args.android is an NativeScriptError.
        console.log(" *** NativeScriptError *** : " + errData.android);
        console.log(" *** StackTrace *** : " + errData.android.stackTrace);
        console.log(" *** nativeException *** : " + errData.android.nativeException);
    }
    else if (platform_1.isIOS) {
        // For iOS applications, args.ios is NativeScriptError.
        console.log("NativeScriptError: " + errData.ios);
    }
});
application.run({ moduleName: 'app-root' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUE7Ozs7RUFJRTtBQUNGLHFDQUE0QztBQUM1Qyx5Q0FBMkM7QUFFM0MsV0FBVyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsa0JBQWtCLEVBQUUsVUFBQyxPQUFPO0lBQ25ELEVBQUUsQ0FBQyxDQUFDLG9CQUFTLENBQUMsQ0FBQyxDQUFDO1FBQ1osa0VBQWtFO1FBQ2xFLE9BQU8sQ0FBQyxHQUFHLENBQUMsK0JBQStCLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9ELE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNuRSxPQUFPLENBQUMsR0FBRyxDQUFDLDZCQUE2QixHQUFHLE9BQU8sQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDakYsQ0FBQztJQUNELElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxnQkFBSyxDQUFDLENBQUMsQ0FBQztRQUNiLHVEQUF1RDtRQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLHFCQUFxQixHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyRCxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxXQUFXLENBQUMsR0FBRyxDQUFDLEVBQUUsVUFBVSxFQUFFLFVBQVUsRUFBRSxDQUFDLENBQUM7QUFFNUM7OztFQUdFIiwic291cmNlc0NvbnRlbnQiOlsiLypcbkluIE5hdGl2ZVNjcmlwdCwgdGhlIGFwcC50cyBmaWxlIGlzIHRoZSBlbnRyeSBwb2ludCB0byB5b3VyIGFwcGxpY2F0aW9uLlxuWW91IGNhbiB1c2UgdGhpcyBmaWxlIHRvIHBlcmZvcm0gYXBwLWxldmVsIGluaXRpYWxpemF0aW9uLCBidXQgdGhlIHByaW1hcnlcbnB1cnBvc2Ugb2YgdGhlIGZpbGUgaXMgdG8gcGFzcyBjb250cm9sIHRvIHRoZSBhcHDigJlzIGZpcnN0IG1vZHVsZS5cbiovXG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XG5cbmFwcGxpY2F0aW9uLm9uKGFwcGxpY2F0aW9uLnVuY2F1Z2h0RXJyb3JFdmVudCwgKGVyckRhdGEpID0+IHtcbiAgICBpZiAoaXNBbmRyb2lkKSB7XG4gICAgICAgIC8vIEZvciBBbmRyb2lkIGFwcGxpY2F0aW9ucywgYXJncy5hbmRyb2lkIGlzIGFuIE5hdGl2ZVNjcmlwdEVycm9yLlxuICAgICAgICBjb25zb2xlLmxvZyhcIiAqKiogTmF0aXZlU2NyaXB0RXJyb3IgKioqIDogXCIgKyBlcnJEYXRhLmFuZHJvaWQpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIiAqKiogU3RhY2tUcmFjZSAqKiogOiBcIiArIGVyckRhdGEuYW5kcm9pZC5zdGFja1RyYWNlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCIgKioqIG5hdGl2ZUV4Y2VwdGlvbiAqKiogOiBcIiArIGVyckRhdGEuYW5kcm9pZC5uYXRpdmVFeGNlcHRpb24pO1xuICAgIH1cbiAgICBlbHNlIGlmIChpc0lPUykge1xuICAgICAgICAvLyBGb3IgaU9TIGFwcGxpY2F0aW9ucywgYXJncy5pb3MgaXMgTmF0aXZlU2NyaXB0RXJyb3IuXG4gICAgICAgIGNvbnNvbGUubG9nKFwiTmF0aXZlU2NyaXB0RXJyb3I6IFwiICsgZXJyRGF0YS5pb3MpO1xuICAgIH1cbn0pO1xuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xuXG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuIl19