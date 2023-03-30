function MaxNum() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var Max = 0;
    var Cnt = 0;
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        if (Arr[Cnt] > Max) {
            Max = Arr[Cnt];
        }
    }
    return Max;
}
//var Array : number = 0;
var Ret = 0;
Ret = MaxNum(23, 89, 6, 29, 56, 45, 77, 32);
console.log("Largets number is :" + Ret);
