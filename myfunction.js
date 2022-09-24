function marksheet(sub1,sub2,sub3,sub4,sub5)
{
    //add the total number of subjects
    var total_number=sub1+sub2+sub3+sub4+sub5;
      
      console.log("Total marks:   "+total_number);
    //find the percentage of total number;
    var percentage=total_number/500*100;

    console.log("Percentage:   "+percentage);

    if(percentage>=60)
    console.log("A Gread- First Division");
    else if(percentage<=60 && percentage>=50)
    console.log("B Gread -Second Division");
    else if(percentage<=50 && percentage>=40)
    console.log("C Gread-Third Division");
    else
    {
        console.log("Faild Division");
    }

}
marksheet(80,60,40,90,87);