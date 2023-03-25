
class Circle
{
    public Radious;
    public PI;

    public constructor(No1 : number)
    {
        this.Radious =No1;
        this.PI = 3.14;
    }

    public Area()
    {
        return this.Radious* this.PI* this.PI;
    }
}

class CircleX extends Circle
{
    public constructor(Value2 :number)
    {
        super(Value2);
    }

    public Circumference()
    {
        return 2*this.PI * this.Radious;
    }
}

var Ret : number = 0;

var cobj = new CircleX(25);

Ret = cobj.Area();
console.log("Area of circle is :"+Ret);

Ret = cobj.Area();
console.log("Circumference of circle is :"+Ret);

