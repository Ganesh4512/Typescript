

class Arithmetic
{
    public No1;
    public No2;

    public constructor(Num1 : number,Num2 : number)
    {
        this.No1 = Num1;
        this.No2 = Num2;
    }

    public Add()
    {
        return this.No1+this.No2;
    }

    public Sub()
    {
        return this.No1-this.No2;
    }

    public Multiplication()
    {
        return this.No1 * this.No2;
    }

    public Division()
    {
        return this.No1/this.No2;
    }

}

var Ret : number = 0;

var Obj = new Arithmetic(11,10);

Ret = Obj.Add();
console.log("Addirion is :"+Ret);

Ret = Obj.Sub();
console.log("Substraction is :"+Ret);

Ret = Obj.Multiplication();
console.log("Multiplication is :"+Ret);

Ret = Obj.Division();
console.log("Division is :"+Ret);