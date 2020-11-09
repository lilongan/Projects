1. Create a button to your HTML page
<button id="btnDeal"></button>
 
<button id="btnHit"></button>
 
 
<button id="btnStand"></button>

 
2) In your JS file, add the following code.  This code "listens" for the user to click the button, and then executes the code inside the code block.  Note that the listenter takes as arguments, the event, and and annonymous function.  

document.getElementById("btnDeal").addEventListener("click", function(){
    //write dealer logic here
});

 
document.getElementById("btnHit").addEventListener("click", function(){
    //write "hit" logic here
});

 
document.getElementById("btnStand").addEventListener("click", function(){
    //write "Stand" logic here
});