function DisplayFactors(NO) {
    var iCnt = 0;
    console.log("Factors are :");
    for (iCnt = 0; iCnt < NO; iCnt++) {
        if (NO % iCnt == 0) {
            console.log(iCnt);
        }
    }
}
var Ret = 0;
DisplayFactors(20);
