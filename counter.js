//Event function
function minusfun()
{
    document.getElementById("level").value;
     alert("Negative digit not valid");
}


//plush function.
function plushfun()
{
    var no2=document.getElementById("level").value;
    if(no2<200)
    {
        document.getElementById("level").value++;
    }
}

//Reset function
function Resetfun()
{
    var no2=document.getElementById("level").value;
    if(no2<=200)
    {
        var c=document.getElementById("level").value=0;
    }
}



