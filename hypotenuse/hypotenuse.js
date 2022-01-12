var lengthSelector=document.querySelector("#lengthid");
var widthSelector=document.querySelector("#widthid");

var hypotenuseButtonSelector=document.querySelector("#hypotenusebtn")

var outputhypotenusebtnSelector=document.querySelector("#outputhypotenuseid");

hypotenuseButtonSelector.addEventListener("click", function calculateHypotenuse()
{

    if(Number(lengthSelector.value)>0 && Number(widthSelector.value)>0)
    {
        var result= Math.sqrt((Number(lengthSelector.value)*Number(lengthSelector.value))+(Number(widthSelector.value)*Number(widthSelector.value)))

        outputhypotenusebtnSelector.innerText=result;
    }
    else{
        outputhypotenusebtnSelector.innerText="Please Enter valid length and width";
    }
});