document.querySelector(".greenbtn").addEventListener("click", handleclick1 );

function handleclick1(){
    document.querySelector(".first").style.backgroundColor="green";
}

document.querySelector(".red").addEventListener("click", handleclick2 );

function handleclick2(){
    document.querySelector(".first").style.backgroundColor="red";
}

document.querySelector(".blue").addEventListener("click", handleclick3 );

function handleclick3(){
    document.querySelector(".first").style.backgroundColor="blue";
}
