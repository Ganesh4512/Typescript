function MaxNum(... Arr : number[]) : number
{
    let Max = 0;
    let Cnt =0;

    for(Cnt = 0; Cnt <Arr.length; Cnt++)
    {
        if(Arr[Cnt] > Max)
        {
            Max = Arr[Cnt];
        }
    }
    return Max;
}

//var Array : number = 0;

var Ret : number = 0;

Ret = MaxNum(23,89,6,29,56,45,77,32);
console.log("Largets number is :"+Ret);