"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var app = require("tns-core-modules/application");
function navigatingTo(args) {
    var page = args.object;
    var appContext = app.android.context;
    var fingerprintManager;
    fingerprintManager = appContext.getSystemService(android.content.Context.FINGERPRINT_SERVICE);
    console.log(fingerprintManager);
}
exports.navigatingTo = navigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsa0RBQW9EO0FBRXBELHNCQUE2QixJQUFlO0lBQ3hDLElBQUksSUFBSSxHQUFTLElBQUksQ0FBQyxNQUFNLENBQUM7SUFFN0IsSUFBSSxVQUFVLEdBQUcsR0FBRyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUM7SUFFckMsSUFBSSxrQkFBbUUsQ0FBQztJQUN4RSxrQkFBa0IsR0FBRyxVQUFVLENBQUMsZ0JBQWdCLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsbUJBQW1CLENBQUMsQ0FBQztJQUU5RixPQUFPLENBQUMsR0FBRyxDQUFDLGtCQUFrQixDQUFDLENBQUM7QUFDcEMsQ0FBQztBQVRELG9DQVNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcbmltcG9ydCAqIGFzIGFwcCBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xuXG5leHBvcnQgZnVuY3Rpb24gbmF2aWdhdGluZ1RvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG5cbiAgICBsZXQgYXBwQ29udGV4dCA9IGFwcC5hbmRyb2lkLmNvbnRleHQ7XG5cbiAgICBsZXQgZmluZ2VycHJpbnRNYW5hZ2VyOiBhbmRyb2lkLmhhcmR3YXJlLmZpbmdlcnByaW50LkZpbmdlcnByaW50TWFuYWdlcjtcbiAgICBmaW5nZXJwcmludE1hbmFnZXIgPSBhcHBDb250ZXh0LmdldFN5c3RlbVNlcnZpY2UoYW5kcm9pZC5jb250ZW50LkNvbnRleHQuRklOR0VSUFJJTlRfU0VSVklDRSk7XG5cbiAgICBjb25zb2xlLmxvZyhmaW5nZXJwcmludE1hbmFnZXIpO1xufSJdfQ==