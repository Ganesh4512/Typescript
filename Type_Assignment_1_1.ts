function Maximum(No1 : number,No2 : number,No3 : number) : number
{
    var Max : number = 0;
    var iCnt : number = 0;
    
    if(No1 > No2)
    {
        if(No1 > No3)
        {
            Max = No1;
        }
        else
        {
            Max = No3;
        }

    }
    else
    {
        if(No2 > No3)
        {
            Max = No2;
        }
    }
    return Max;
}

var Ret : number = 0;
Ret = Maximum(23,89,6)
console.log("Maximum number is "+Ret);


