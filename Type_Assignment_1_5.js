function Fibonacci(No) {
    var No1 = 0;
    var No2 = 1;
    var No3 = 0;
    No3 = No1 + No2;
    var iCnt = 0;
    for (iCnt = 3; iCnt <= No; iCnt++) {
        // console.log(No3);
        No1 = No2;
        No2 = No3;
        No3 = No1 + No2;
        console.log("Fibonacci series is : " + No3);
    }
}
var No = 0;
Fibonacci(10);
