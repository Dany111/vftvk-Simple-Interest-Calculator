
function checkdata ()
{
    var number = document.getElementById("principal");

    //Check if number is valid
    if(number.value <= 0){
          alert("Enter a positive number");
          principal.focus();
          return false;
    }
 
   //If all is well return true.
   return true;
}




function compute()
{
if (checkdata()) {
    

   var principal = document.getElementById("principal").value;
   var rate = document.getElementById("rate").value;
   var years = document.getElementById("years").value;
   var interest = principal * years * rate / 100;
   var year = new Date().getFullYear()+parseInt(years);
   document.getElementById("result").innerHTML = "<p> If you deposit <mark>" + principal + "</mark>," + "<br />" +
                                                 "at an interest rate of <mark>" + rate + "</mark>%." + "<br />" +
                                                 "You will receive an amount of <mark>" + interest + "</mark>," + "<br />" +
                                                 "in the year <mark>" + year + "</mark>"
}                                                         
    
}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    

}
