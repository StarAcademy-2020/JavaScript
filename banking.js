console.log("*******Please Select option********");
console.log("1:For Checkbalance");
console.log("2:For Deposite Amount");
console.log("3:For Withdraw");

function Checkbalance()
{
    var balance=10000;
    console.log("Balance:  "+balance);
}
Checkbalance();

function Deposite(amount)
{
    var balance=10000;
    console.log("Before Deposit Amount is: "+balance);
    var totalbalance=balance+amount;
    console.log("After Deposit amount is: "+totalbalance);
}
Deposite(1000);

function Withdraw(withdrawAmount)
{
    var balance=10000;
    var amount=balance-withdrawAmount;
    console.log(amount);
}
Withdraw(5000);

var userChoice=1;
switch(userChoice)
{
    case 1:balance();
    break;
    case 2:Deposite();
    break;
    case 3:Withdraw();
    break;
    default:"Invalid Choice";
    break;
}