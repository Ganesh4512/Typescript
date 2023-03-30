function Fibonacci(No : number) : void
{
    var No1 : number = 0;
    var No2 : number = 1;

    var No3 : number = 0;
    No3 = No1 + No2;

    var iCnt : number = 0;

    for(iCnt =3; iCnt <= No; iCnt++)
    {
       // console.log(No3);
        No1 = No2;
        No2 = No3;
        No3 = No1 + No2;
        console.log("Fibonacci series is : "+ No3);
    }
}

var No : number = 0;
Fibonacci(10);
