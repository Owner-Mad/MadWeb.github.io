

 
function BTN(){
   var userInput = document.getElementById("userID").value;
     alert("Hello Mr/Mrs. "+ userInput + "  Your request cannot be completed at the moment because this website isn't hosted on internet !");
}
/* below code is for calculator program*/
Addition = (a,b)=>{
    return a+b;
}

Subtraction = (a,b)=>{
    return a-b;
}

Multiplication = (a,b)=>{
    return a*b;
}

Division = (a,b)=>{
    return a/b;
}

Calculate=()=>{
    as = document.getElementById("firstNoID").value;
    bs = document.getElementById("secNoID").value;
    a = parseFloat(as);
    b = parseFloat(bs);
    let c;
  if(!as==""){  
  stresponse = prompt("Please Enter Any Valid Option from Below list \n 1 = Addition \n 2 = Subtraction  \n 3 = Multiplication \n 4 = Division")
  
if(stresponse=="1"){
c =  "The Result for addition between "+as +' and '+bs+" is "+  Addition(a,b);
}
else if(stresponse =="2"){
c ="The Result for substraction between "+as +' and '+bs+" is "+ Subtraction(a,b);
}
else if(stresponse =="3"){
    c = "The Result for multiplication between "+as +' and '+bs+" is "+Multiplication(a,b);
    }
    else if(stresponse =="4"){
        c = "The Result for division between "+as +' and '+bs+" is "+Division(a,b);
        }

        else{
            c = "Invalid Option";
            alert("please enter correct option within the range of 1 to 4 !")

    }  
   }
   else{
        c="Both Numbers Must be inserted to perform the calculation !";
        alert(c)
   }
   document.getElementById("resultID").innerText=c;
   }
    


   document.addEventListener('keyup',(event)=>{
    if(event.key==='Enter'){
    
 Calculate();
    }
})





