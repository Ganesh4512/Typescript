
class Circle
{
    public Value1;
    public PI;

    public constructor(No1 : number)    
    {
        this.Value1 = No1;
        this.PI = 3.14;
    }

    public Area()
    {
        return this.Value1*this.PI * this.PI ;
    }
}

var Ret : number = 0;
var cobj1 = new Circle(51);
var cobj2 = new Circle(21);

Ret = cobj1.Area();
console.log(" circle Area1 is :"+Ret);


Ret = cobj2.Area();
console.log(" circle Area2 is :"+Ret);