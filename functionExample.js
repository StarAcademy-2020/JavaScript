//Type 1: With Parameter list and with return value
function function1(n1,n2)
{
    var result=n1+n2;
    return result;
}
function1(100,100);
//Type 2: With Parameter list and without return value
function function2(p1,p2)
{
    var result=p1-p2;
    console.log(result);
}
function2(100,50);
//Type 3: Without Parameter list and with return value
function function3()
{
    var x=100;
    var y=100;
    var z=x*y;
    return z;
}
function3();
//Type 4: Without Parameter list and without return value 
function function4()
{
    var a=20;
    var b=10;
    c=a+b;
    console.log(c);
}
function4();