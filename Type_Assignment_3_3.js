var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Circle = /** @class */ (function () {
    function Circle(No1) {
        this.Radious = No1;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.Radious * this.PI * this.PI;
    };
    return Circle;
}());
var CircleX = /** @class */ (function (_super) {
    __extends(CircleX, _super);
    function CircleX(Value2) {
        return _super.call(this, Value2) || this;
    }
    CircleX.prototype.Circumference = function () {
        return 2 * this.PI * this.Radious;
    };
    return CircleX;
}(Circle));
var Ret = 0;
var cobj = new CircleX(25);
Ret = cobj.Area();
console.log("Area of circle is :" + Ret);
Ret = cobj.Area();
console.log("Circumference of circle is :" + Ret);
