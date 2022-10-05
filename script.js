document.addEventListener("DOMContentLoaded" , function(){ 
    document.querySelector("form").addEventListener("submit" , function(event){ 
        const myform = document.getElementById("log-in")
        event.preventDefault() ;
        
        const form = event.target ; 
        const pass = form.pwd.value;
        const user = form.uname.value ;
    if(user == "ayantika" || user == "navneet"  ){
        if ( pass  == "ayantika" || pass == "navneet") { 
            window.location.href = "https://ayantika6767.github.io/Hackathon/";
        }
        else{ 
            alert("INVALID") ;
        }
    }
    else{ 
        alert("INVALID") ;
    }  
    })









    //////////////////////////////////////////////////////
})