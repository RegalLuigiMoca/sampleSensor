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