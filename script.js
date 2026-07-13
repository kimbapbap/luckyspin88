function login(){

    const password = document.getElementById("password").value;

    const message = document.getElementById("message");

    if(password === "notredame"){

        message.style.color="#00ff88";

        message.innerHTML="ACCESS GRANTED";

        setTimeout(()=>{

            window.location.href="dashboard.html";

        },1200);

    }

    else{

        message.style.color="#ff4040";

        message.innerHTML="ACCESS DENIED";

    }

}
