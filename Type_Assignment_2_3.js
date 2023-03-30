function Largets() {
    var Arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        Arr[_i] = arguments[_i];
    }
    var Cnt = 0;
    var Max1st = 0;
    var Max2nd = 0;
    for (Cnt = 0; Cnt < Arr.length; Cnt++) {
        if (Arr[Cnt] > Max1st && Arr[Cnt] > Max2nd) {
            Max2nd = Max1st;
            Max1st = Arr[Cnt];
        }
        else if (Arr[Cnt] > Max2nd && Arr[Cnt] < Max1st) {
            Max2nd = Arr[Cnt];
        }
    }
    return Max2nd;
}
var Ret = 0;
Ret = Largets(23, 89, 6, 29, 56, 45, 77, 32);
console.log("Second largest number is :" + Ret);
