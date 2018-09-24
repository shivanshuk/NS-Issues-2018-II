"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var application_settings_1 = require("tns-core-modules/application-settings");
var application_1 = require("application");
var platform_1 = require("platform");
var utils = require("utils/utils");
function navigatingTo(args) {
    application_settings_1.setBoolean("isReal", true);
    application_settings_1.setNumber("myNumber", 42);
    application_settings_1.setString("myString", "John Doe");
}
exports.navigatingTo = navigatingTo;
function getAll() {
    if (platform_1.isAndroid) {
        var sharedPreferences = application_1.getNativeApplication().getApplicationContext().getSharedPreferences("prefs.db", 0);
        var mappedPreferences = sharedPreferences.getAll();
        var iterator = mappedPreferences.keySet().iterator();
        while (iterator.hasNext()) {
            var key = iterator.next();
            // console.log(key); // myString, myNumbver, isReal
            var value = mappedPreferences.get(key);
            // console.log(value); // "John Doe", 42, true
        }
    }
    else if (platform_1.isIOS) {
        var userDefaults = utils.ios.getter(NSUserDefaults, NSUserDefaults.standardUserDefaults);
        var dictionaryUserDefaults = userDefaults.dictionaryRepresentation();
        var allKeys = dictionaryUserDefaults.allKeys;
        var allValues = dictionaryUserDefaults.allValues;
        // console.log(dictionaryUserDefaults.allKeys);
        // console.log(dictionaryUserDefaults.allValues);
    }
}
exports.getAll = getAll;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEsOEVBQW9HO0FBQ3BHLDJDQUFtRDtBQUNuRCxxQ0FBNEM7QUFDNUMsbUNBQXFDO0FBRXJDLHNCQUE2QixJQUFlO0lBQ3hDLGlDQUFVLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzNCLGdDQUFTLENBQUMsVUFBVSxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQzFCLGdDQUFTLENBQUMsVUFBVSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ3RDLENBQUM7QUFKRCxvQ0FJQztBQUVEO0lBQ0ksRUFBRSxDQUFDLENBQUMsb0JBQVMsQ0FBQyxDQUFDLENBQUM7UUFDWixJQUFJLGlCQUFpQixHQUE2QixrQ0FBb0IsRUFBRyxDQUFDLHFCQUFxQixFQUFFLENBQUMsb0JBQW9CLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3RJLElBQUksaUJBQWlCLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDbkQsSUFBSSxRQUFRLEdBQUcsaUJBQWlCLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFFckQsT0FBTyxRQUFRLENBQUMsT0FBTyxFQUFFLEVBQUUsQ0FBQztZQUN4QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7WUFDMUIsbURBQW1EO1lBQ25ELElBQUksS0FBSyxHQUFHLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN2Qyw4Q0FBOEM7UUFDbEQsQ0FBQztJQUVMLENBQUM7SUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsZ0JBQUssQ0FBQyxDQUFDLENBQUM7UUFDZixJQUFJLFlBQVksR0FBRyxLQUFLLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsY0FBYyxDQUFDLG9CQUFvQixDQUFDLENBQUM7UUFDekYsSUFBSSxzQkFBc0IsR0FBRyxZQUFZLENBQUMsd0JBQXdCLEVBQUUsQ0FBQztRQUVyRSxJQUFJLE9BQU8sR0FBRyxzQkFBc0IsQ0FBQyxPQUFPLENBQUM7UUFDN0MsSUFBSSxTQUFTLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDO1FBQ2pELCtDQUErQztRQUMvQyxpREFBaUQ7SUFDckQsQ0FBQztBQUNMLENBQUM7QUF0QkQsd0JBc0JDIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBzZXRCb29sZWFuLCBzZXROdW1iZXIsIHNldFN0cmluZywgZ2V0U3RyaW5nIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb24tc2V0dGluZ3NcIjtcbmltcG9ydCB7IGdldE5hdGl2ZUFwcGxpY2F0aW9uIH0gZnJvbSBcImFwcGxpY2F0aW9uXCI7XG5pbXBvcnQgeyBpc0FuZHJvaWQsIGlzSU9TIH0gZnJvbSBcInBsYXRmb3JtXCI7XG5pbXBvcnQgKiBhcyB1dGlscyBmcm9tIFwidXRpbHMvdXRpbHNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBzZXRCb29sZWFuKFwiaXNSZWFsXCIsIHRydWUpO1xuICAgIHNldE51bWJlcihcIm15TnVtYmVyXCIsIDQyKTtcbiAgICBzZXRTdHJpbmcoXCJteVN0cmluZ1wiLCBcIkpvaG4gRG9lXCIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsKCkge1xuICAgIGlmIChpc0FuZHJvaWQpIHtcbiAgICAgICAgbGV0IHNoYXJlZFByZWZlcmVuY2VzID0gKDxhbmRyb2lkLmFwcC5BcHBsaWNhdGlvbj5nZXROYXRpdmVBcHBsaWNhdGlvbigpKS5nZXRBcHBsaWNhdGlvbkNvbnRleHQoKS5nZXRTaGFyZWRQcmVmZXJlbmNlcyhcInByZWZzLmRiXCIsIDApO1xuICAgICAgICBsZXQgbWFwcGVkUHJlZmVyZW5jZXMgPSBzaGFyZWRQcmVmZXJlbmNlcy5nZXRBbGwoKTtcbiAgICAgICAgbGV0IGl0ZXJhdG9yID0gbWFwcGVkUHJlZmVyZW5jZXMua2V5U2V0KCkuaXRlcmF0b3IoKTtcblxuICAgICAgICB3aGlsZSAoaXRlcmF0b3IuaGFzTmV4dCgpKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gaXRlcmF0b3IubmV4dCgpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coa2V5KTsgLy8gbXlTdHJpbmcsIG15TnVtYnZlciwgaXNSZWFsXG4gICAgICAgICAgICBsZXQgdmFsdWUgPSBtYXBwZWRQcmVmZXJlbmNlcy5nZXQoa2V5KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHZhbHVlKTsgLy8gXCJKb2huIERvZVwiLCA0MiwgdHJ1ZVxuICAgICAgICB9XG5cbiAgICB9IGVsc2UgaWYgKGlzSU9TKSB7XG4gICAgICAgIHZhciB1c2VyRGVmYXVsdHMgPSB1dGlscy5pb3MuZ2V0dGVyKE5TVXNlckRlZmF1bHRzLCBOU1VzZXJEZWZhdWx0cy5zdGFuZGFyZFVzZXJEZWZhdWx0cyk7XG4gICAgICAgIGxldCBkaWN0aW9uYXJ5VXNlckRlZmF1bHRzID0gdXNlckRlZmF1bHRzLmRpY3Rpb25hcnlSZXByZXNlbnRhdGlvbigpO1xuXG4gICAgICAgIGxldCBhbGxLZXlzID0gZGljdGlvbmFyeVVzZXJEZWZhdWx0cy5hbGxLZXlzO1xuICAgICAgICBsZXQgYWxsVmFsdWVzID0gZGljdGlvbmFyeVVzZXJEZWZhdWx0cy5hbGxWYWx1ZXM7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRpY3Rpb25hcnlVc2VyRGVmYXVsdHMuYWxsS2V5cyk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKGRpY3Rpb25hcnlVc2VyRGVmYXVsdHMuYWxsVmFsdWVzKTtcbiAgICB9XG59Il19