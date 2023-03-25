var Circle = /** @class */ (function () {
    function Circle(No1) {
        this.Value1 = No1;
        this.PI = 3.14;
    }
    Circle.prototype.Area = function () {
        return this.Value1 * this.PI * this.PI;
    };
    return Circle;
}());
var Ret = 0;
var cobj1 = new Circle(51);
var cobj2 = new Circle(21);
Ret = cobj1.Area();
console.log(" circle Area is :" + Ret);
Ret = cobj2.Area();
console.log(" circle Area is :" + Ret);
