//declare array
var colors = ["yellow", "red", "orange", "purple"];

//declare a variable that holds the element placeholder in our index.html code
var el = document.getElementById("container");

//use the textContent property to add the array text into the placeholder declared above
el.textContent = colors;

function changeText(){
    //change style properties
    el.style.color = "black";
    el.style.backgroundColor = "black";
    el.style.padding = "50px";
    //change background picture of DIV
    // el.style.backgroundImage = "url(https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg)";
    //delete the button by using the remove() method
    document.getElementById("click").remove();
    //Change text color value back to red by calling the function
    changeBackValue();
}

//New function that is called above in the changeText() function
function changeBackValue(){
    el.style.color ="red";
}