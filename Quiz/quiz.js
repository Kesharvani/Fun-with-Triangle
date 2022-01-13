var quizFormSelector=document.querySelector(".triangle_form");
var btnSelector=document.querySelector("#form_btn");
var outputSelector1=document.querySelector("#output_id1");

const correctAnswer=["90°" , "right angled"];

function calculateScore()
{
    let score=0;
    let index=0;

    const formResult=new FormData(quizFormSelector);

    for(let value of formResult.values()) // Form has values() function and we are using it...we are using for each here... value will give the data of form enter by user. its like (alpha of alphabet) where alphabet is an array...alpha will give the value of array
    {
       if(value===correctAnswer[index])
       {
           score=score+1;
       }
       index=index+1;
    }

    outputSelector1.innerText=" Your Score is: " + score;
}

btnSelector.addEventListener("click", calculateScore)


