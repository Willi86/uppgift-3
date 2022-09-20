
let h1 = (message,bgcolor,color) => 
{
 let msg= document.querySelectorr("#h1");
 msg.innerText="message";
    msg.style.backgroundColor=bgcolor;
    msg.style.color=color;
}
    let first = document.querySelector("#btn1");
   first.addEventListener('click',function() { h1("Goodby Crul World","red","blue");} );
