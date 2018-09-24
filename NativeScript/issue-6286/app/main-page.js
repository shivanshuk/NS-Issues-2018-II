"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_view_model_1 = require("./main-view-model");
var frame_1 = require("tns-core-modules/ui/frame");
var vm = new main_view_model_1.HelloWorldModel();
function onNavigatingTo(args) {
    var page = args.object;
    console.log("onNavigatingTo");
    console.log("selectedIndex", vm.get("selectedIndex"));
}
exports.onNavigatingTo = onNavigatingTo;
function onLoaded(args) {
    var page = args.object;
    page.bindingContext = vm;
    console.log("onLoaded");
    console.log("selectedIndex", vm.get("selectedIndex"));
}
exports.onLoaded = onLoaded;
function onNavigatedTo(args) {
    var page = args.object;
    console.log("onNavigatedTo");
    console.log("selectedIndex", vm.get("selectedIndex"));
}
exports.onNavigatedTo = onNavigatedTo;
function onTap() {
    frame_1.topmost().navigate("sub-page");
}
exports.onTap = onTap;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUEscURBQW9EO0FBQ3BELG1EQUFvRDtBQUdwRCxJQUFJLEVBQUUsR0FBRyxJQUFJLGlDQUFlLEVBQUUsQ0FBQztBQUUvQix3QkFBK0IsSUFBZTtJQUMxQyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztJQUM5QixPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsRUFBRSxFQUFFLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUM7QUFDMUQsQ0FBQztBQUpELHdDQUlDO0FBRUQsa0JBQXlCLElBQWU7SUFDcEMsSUFBSSxJQUFJLEdBQVMsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUM3QixJQUFJLENBQUMsY0FBYyxHQUFHLEVBQUUsQ0FBQztJQUN6QixPQUFPLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxFQUFFLEVBQUUsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUMxRCxDQUFDO0FBTEQsNEJBS0M7QUFFRCx1QkFBOEIsSUFBZTtJQUN6QyxJQUFJLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzdCLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7SUFDN0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxlQUFlLEVBQUUsRUFBRSxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0FBQzFELENBQUM7QUFKRCxzQ0FJQztBQUdEO0lBQ0ksZUFBTyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ25DLENBQUM7QUFGRCxzQkFFQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV2ZW50RGF0YSwgT2JzZXJ2YWJsZSB9IGZyb20gJ2RhdGEvb2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBQYWdlIH0gZnJvbSAndWkvcGFnZSc7XG5pbXBvcnQgeyBIZWxsb1dvcmxkTW9kZWwgfSBmcm9tICcuL21haW4tdmlldy1tb2RlbCc7XG5pbXBvcnQgeyB0b3Btb3N0IH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWVcIjtcbmltcG9ydCB7IExpc3RQaWNrZXIgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9saXN0LXBpY2tlclwiO1xuXG5sZXQgdm0gPSBuZXcgSGVsbG9Xb3JsZE1vZGVsKCk7XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgcGFnZSA9IDxQYWdlPmFyZ3Mub2JqZWN0O1xuICAgIGNvbnNvbGUubG9nKFwib25OYXZpZ2F0aW5nVG9cIik7XG4gICAgY29uc29sZS5sb2coXCJzZWxlY3RlZEluZGV4XCIsIHZtLmdldChcInNlbGVjdGVkSW5kZXhcIikpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb25Mb2FkZWQoYXJnczogRXZlbnREYXRhKSB7XG4gICAgbGV0IHBhZ2UgPSA8UGFnZT5hcmdzLm9iamVjdDtcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gdm07XG4gICAgY29uc29sZS5sb2coXCJvbkxvYWRlZFwiKTtcbiAgICBjb25zb2xlLmxvZyhcInNlbGVjdGVkSW5kZXhcIiwgdm0uZ2V0KFwic2VsZWN0ZWRJbmRleFwiKSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRlZFRvKGFyZ3M6IEV2ZW50RGF0YSkge1xuICAgIGxldCBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgY29uc29sZS5sb2coXCJvbk5hdmlnYXRlZFRvXCIpO1xuICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRJbmRleFwiLCB2bS5nZXQoXCJzZWxlY3RlZEluZGV4XCIpKTtcbn1cblxuXG5leHBvcnQgZnVuY3Rpb24gb25UYXAoKSB7XG4gICAgdG9wbW9zdCgpLm5hdmlnYXRlKFwic3ViLXBhZ2VcIik7XG59XG4iXX0=