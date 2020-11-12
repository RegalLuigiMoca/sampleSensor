/*
*   This function changes the header text.
*/
function OnLoadEvents()
{
    document.getElementById("header").value = "Scandia Team";
    document.getElementById("header").innerHTML = "Scandia Team";
    document.getElementById("kyle").style.visibility = "hidden";
}

/*
*   This function reminds everyone that
*   Kyle still owes Luigi Chipotle LMAO.
*/
function OweMeChipotle()
{
    document.getElementById("kyle").style.visibility = "visible";
}

/*
*   This function reminds everyone that
*   Kyle still owes Luigi Chipotle LMAO.
*/
function GoAway()
{
    document.getElementById("kyle").style.visibility = "hidden";
}

/*
*   Function outputs the results from the user input.
*/
function results()
{
    let results = document.getElementById("results");
    let uA = document.getElementsByName("userAnswer");
    let answer = "";

    for(i = 0; i < uA.length; i++)
        if(uA[i].checked) answer = uA[i].value;

    switch(answer)
    {
        case "yes": results.innerHTML = "You freakin' right!";
        break;

        case "no": results.innerHTML = "You are absolutely wrong & you owe me Chipotle too!";
        break;
        
        default: results.innerHTML = "";
        break;
    }
}