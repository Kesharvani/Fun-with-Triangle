var firstSelector=document.querySelector(".inputid1");
var secondSelector=document.querySelector(".inputid2");
var thirdSelector=document.querySelector(".inputid3");

var btnSelector=document.querySelector("#checktrianglebtn")

var outputSelector=document.querySelector("#outputid");



btnSelector.addEventListener("click", function isTraingle()
{

var sum=calculateSumOfAngles(firstSelector.value , secondSelector.value , thirdSelector.value);
if(sum===180)
{
    showoutput("Yes! This is a traingle");
}
else{
    showoutput("This is not a traingle");
}

});

function calculateSumOfAngles(firstSelector,secondSelector,thirdSelector)
{
    return ( Number(firstSelector)+ Number(secondSelector)+ Number(thirdSelector));

}


function showoutput(msg)
{
    outputSelector.innerText=msg;
}