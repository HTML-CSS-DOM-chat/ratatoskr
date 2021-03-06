"use strict";
var es6_promise_1 = require('es6-promise');
function make() {
    var def = {};
    def.promise = new es6_promise_1.Promise(function (resolve, reject) {
        def.resolve = resolve;
        def.reject = reject;
    });
    return def;
}
exports.make = make;
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = make;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVmZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvZGVmZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUVBLDRCQUFzQixhQUFhLENBQUMsQ0FBQTtBQVFwQztJQUNJLElBQUksR0FBRyxHQUFRLEVBQUUsQ0FBQztJQUVsQixHQUFHLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1FBQ3RDLEdBQUcsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3RCLEdBQUcsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3hCLENBQUMsQ0FBQyxDQUFDO0lBRUgsTUFBTSxDQUFDLEdBQUcsQ0FBQztBQUNmLENBQUM7QUFUZSxZQUFJLE9BU25CLENBQUE7QUFFRDtrQkFBZSxJQUFJLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vdHlwaW5ncy9pbmRleC5kLnRzXCIgLz5cclxuXHJcbmltcG9ydCB7UHJvbWlzZX0gZnJvbSAnZXM2LXByb21pc2UnO1xyXG5cclxuZXhwb3J0IGludGVyZmFjZSBEZWZlcnJlZCB7IFxyXG4gICAgcHJvbWlzZTogUHJvbWlzZTxhbnk+O1xyXG4gICAgcmVzb2x2ZTogKHZhbHVlPzogYW55KSA9PiB2b2lkOyBcclxuICAgIHJlamVjdDogKHJlYXNvbj86IGFueSkgPT4gdm9pZDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1ha2UoKTogRGVmZXJyZWQge1xyXG4gICAgdmFyIGRlZjogYW55ID0ge307XHJcblxyXG4gICAgZGVmLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgZGVmLnJlc29sdmUgPSByZXNvbHZlO1xyXG4gICAgICAgIGRlZi5yZWplY3QgPSByZWplY3Q7XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gZGVmO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtYWtlO1xyXG4iXX0=