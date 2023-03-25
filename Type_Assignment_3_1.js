var Arithmetic = /** @class */ (function () {
    function Arithmetic(Num1, Num2) {
        this.No1 = Num1;
        this.No2 = Num2;
    }
    Arithmetic.prototype.Add = function () {
        return this.No1 + this.No2;
    };
    Arithmetic.prototype.Sub = function () {
        return this.No1 - this.No2;
    };
    Arithmetic.prototype.Multiplication = function () {
        return this.No1 * this.No2;
    };
    Arithmetic.prototype.Division = function () {
        return this.No1 / this.No2;
    };
    return Arithmetic;
}());
var Ret = 0;
var Obj = new Arithmetic(11, 10);
Ret = Obj.Add();
console.log("Addirion is :" + Ret);
Ret = Obj.Sub();
console.log("Substraction is :" + Ret);
Ret = Obj.Multiplication();
console.log("Multiplication is :" + Ret);
Ret = Obj.Division();
console.log("Division is :" + Ret);
