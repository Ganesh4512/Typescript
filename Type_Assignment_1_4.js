function CheckPrime(NO) {
    var iCnt = 0;
    for (iCnt = 2; iCnt <= NO / 2; iCnt++) {
        if (NO % iCnt == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
var Ret = false;
Ret = CheckPrime(11);
if (Ret == true) {
    console.log("It is prime number :");
}
else {
    console.log("It is not prime number :");
}
