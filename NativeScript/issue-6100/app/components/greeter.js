"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function onLoad(args) {
    var container = args.object;
    container.bindingContext = {
        myName: args.object["name"],
        myJob: args.object["job"]
    };
}
exports.onLoad = onLoad;
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JlZXRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImdyZWV0ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFHQSxnQkFBdUIsSUFBZTtJQUNsQyxJQUFJLFNBQVMsR0FBZ0IsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUN6QyxTQUFTLENBQUMsY0FBYyxHQUFHO1FBQ3ZCLE1BQU0sRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUMzQixLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUM7S0FDNUIsQ0FBQztBQUNOLENBQUM7QUFORCx3QkFNQztBQUFBLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFdmVudERhdGEgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUvb2JzZXJ2YWJsZVwiO1xuaW1wb3J0IHsgU3RhY2tMYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9sYXlvdXRzL3N0YWNrLWxheW91dC9zdGFjay1sYXlvdXRcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIG9uTG9hZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBsZXQgY29udGFpbmVyID0gPFN0YWNrTGF5b3V0PmFyZ3Mub2JqZWN0O1xuICAgIGNvbnRhaW5lci5iaW5kaW5nQ29udGV4dCA9IHsgXG4gICAgICAgIG15TmFtZTogYXJncy5vYmplY3RbXCJuYW1lXCJdLFxuICAgICAgICBteUpvYjogYXJncy5vYmplY3RbXCJqb2JcIl1cbiAgICB9O1xufTsiXX0=