function examMarks (mark){
  var mark = prompt("What is your mark?");
   var result = mark;

   if(result<=100 && result>=95){
       return alert("Your mark is " +result+ " You have passed with excellent mark A+")
   }
   else if (result< 95 && result>=75){
       return alert("Your mark is " + result + " You have passed the exam with very good mark A")
   }
   else if(result<75 && result >=65){
       return alert("Your mark is " +result+ " You have passsed the exam with good mark B")
   }
   else if (result<65 && result>=55){
       return alert("Your mark is " +result+ " You have passed the exam with  C")
   }
   else if(result<55 && result >=35){
       return alert("Your mark is " +result+ " You have passed the exam with S")
   }
   else{
       return alert("You have failed the Exam")
   }

}


examMarks();
   


