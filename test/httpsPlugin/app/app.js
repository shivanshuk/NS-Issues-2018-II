"use strict";
/*
In NativeScript, the app.ts file is the entry point to your application.
You can use this file to perform app-level initialization, but the primary
purpose of the file is to pass control to the app’s first module.
*/
Object.defineProperty(exports, "__esModule", { value: true });
var application = require("application");
var Https = require("nativescript-https");
var file_system_1 = require("tns-core-modules/file-system");
var dir = file_system_1.knownFolders.currentApp().getFolder('certs');
var certificate = dir.getFile('httpbin.org.cer').path;
Https.enableSSLPinning({ host: 'httpbin.org', certificate: certificate });
application.run({ moduleName: 'app-root' });
/*
Do not place any code after the application has been started as it will not
be executed on iOS.
*/
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXBwLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7OztFQUlFOztBQUVGLHlDQUEyQztBQUMzQywwQ0FBNEM7QUFDNUMsNERBQTREO0FBRTVELElBQUksR0FBRyxHQUFHLDBCQUFZLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ3ZELElBQUksV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQyxJQUFJLENBQUM7QUFDdEQsS0FBSyxDQUFDLGdCQUFnQixDQUFDLEVBQUUsSUFBSSxFQUFFLGFBQWEsRUFBRSxXQUFXLGFBQUEsRUFBRSxDQUFDLENBQUM7QUFFN0QsV0FBVyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFVBQVUsRUFBRSxVQUFVLEVBQUUsQ0FBQyxDQUFDO0FBRTVDOzs7RUFHRSIsInNvdXJjZXNDb250ZW50IjpbIi8qXG5JbiBOYXRpdmVTY3JpcHQsIHRoZSBhcHAudHMgZmlsZSBpcyB0aGUgZW50cnkgcG9pbnQgdG8geW91ciBhcHBsaWNhdGlvbi5cbllvdSBjYW4gdXNlIHRoaXMgZmlsZSB0byBwZXJmb3JtIGFwcC1sZXZlbCBpbml0aWFsaXphdGlvbiwgYnV0IHRoZSBwcmltYXJ5XG5wdXJwb3NlIG9mIHRoZSBmaWxlIGlzIHRvIHBhc3MgY29udHJvbCB0byB0aGUgYXBw4oCZcyBmaXJzdCBtb2R1bGUuXG4qL1xuXG5pbXBvcnQgKiBhcyBhcHBsaWNhdGlvbiBmcm9tICdhcHBsaWNhdGlvbic7XG5pbXBvcnQgKiBhcyBIdHRwcyBmcm9tICduYXRpdmVzY3JpcHQtaHR0cHMnO1xuaW1wb3J0IHsga25vd25Gb2xkZXJzIH0gZnJvbSAndG5zLWNvcmUtbW9kdWxlcy9maWxlLXN5c3RlbSc7XG5cbmxldCBkaXIgPSBrbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLmdldEZvbGRlcignY2VydHMnKTtcbmxldCBjZXJ0aWZpY2F0ZSA9IGRpci5nZXRGaWxlKCdodHRwYmluLm9yZy5jZXInKS5wYXRoO1xuSHR0cHMuZW5hYmxlU1NMUGlubmluZyh7IGhvc3Q6ICdodHRwYmluLm9yZycsIGNlcnRpZmljYXRlIH0pO1xuXG5hcHBsaWNhdGlvbi5ydW4oeyBtb2R1bGVOYW1lOiAnYXBwLXJvb3QnIH0pO1xuXG4vKlxuRG8gbm90IHBsYWNlIGFueSBjb2RlIGFmdGVyIHRoZSBhcHBsaWNhdGlvbiBoYXMgYmVlbiBzdGFydGVkIGFzIGl0IHdpbGwgbm90XG5iZSBleGVjdXRlZCBvbiBpT1MuXG4qL1xuIl19