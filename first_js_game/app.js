let opt=document.querySelectorAll("button"); 
let p=document.querySelector("p");
let my_score=document.querySelector("#my_score");
let com_score=document.querySelector("#com_score");


let options=["rock","paper","scissor"];

let show=(e)=>
    {
    let computer_dis=options[Math.floor(Math.random()*options.length)];
      if(e.currentTarget.id=="rock" && computer_dis=="rock")
      {
        p.style.backgroundColor="blue"
        p.style.color="white";
        p.innerText="IT'S a Draw !!! "
      }
      else if(e.currentTarget.id=="rock" && computer_dis=="paper")
      {
        p.style.backgroundColor="red"
        p.style.color="white";
        p.innerText="You lose!!! "
        com_score.innerText=parseInt(com_score.innerText)+1;

      }
      else if(e.currentTarget.id=="rock" && computer_dis=="scissor")
      {
        p.style.backgroundColor="green"
        p.style.color="white";
        p.innerText="You won!!! "
        my_score.innerText=parseInt(my_score.innerText)+1;
      }
      else if(e.currentTarget.id=="paper" && computer_dis=="paper")
        {
          p.style.backgroundColor="blue"
          p.style.color="white";
          p.innerText="IT'S a Draw !!! "
        }
      else if(e.currentTarget.id=="paper" && computer_dis=="scissor")
        {
          p.style.backgroundColor="red"
          p.style.color="white";
          p.innerText="You lose!!! "
          com_score.innerText=parseInt(com_score.innerText)+1;
  
        }
        else if(e.currentTarget.id=="paper" && computer_dis=="rock")
        {
          p.style.backgroundColor="green"
          p.style.color="white";
          p.innerText="You won!!! "
          my_score.innerText=parseInt(my_score.innerText)+1;
        }
        else if(e.currentTarget.id=="scissor" && computer_dis=="scissor")
            {
              p.style.backgroundColor="blue"
              p.style.color="white";
              p.innerText="IT'S a Draw !!! "
            }
        else if(e.currentTarget.id=="scissor" && computer_dis=="rock")
            {
              p.style.backgroundColor="red"
              p.style.color="white";
              p.innerText="You lose!!! "
              com_score.innerText=parseInt(com_score.innerText)+1;
      
            }
        else if(e.currentTarget.id=="scissor" && computer_dis=="paper")
            {
              p.style.backgroundColor="green"
              p.style.color="white";
              p.innerText="You won!!! "
              my_score.innerText=parseInt(my_score.innerText)+1;
            }
    }  


for(let el of opt)
{
  el.addEventListener("click",show);
}



