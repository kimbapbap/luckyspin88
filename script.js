function login() {

    const password = document.getElementById("password").value;
    const message = document.getElementById("message");

    if (password === "notredame") {

        message.style.color = "#00ff88";
        message.innerHTML = "ACCESS GRANTED";

        setTimeout(function () {

            window.location.href = "dashboard.html";

        }, 1000);

    } else {

        message.style.color = "#ff4444";
        message.innerHTML = "ACCESS DENIED";

        document.getElementById("password").value = "";

    }

}

document.getElementById("password").addEventListener("keypress", function(event){

    if(event.key === "Enter"){

        login();

    }

});
