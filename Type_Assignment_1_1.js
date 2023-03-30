function Maximum(No1, No2, No3) {
    var Max = 0;
    var iCnt = 0;
    if (No1 > No2) {
        if (No1 > No3) {
            Max = No1;
        }
        else {
            Max = No3;
        }
    }
    else {
        if (No2 > No3) {
            Max = No2;
        }
    }
    return Max;
}
var Ret = 0;
Ret = Maximum(23, 89, 6);
console.log("Maximum number is " + Ret);
