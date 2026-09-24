let loggedIn = false;
let username;
let password;

{
    username = window.prompt("Enter your username");
    password = window.prompt("Enter your password");

    if(username === "myUsername" && password === "myPassword" )
        {loggedIn = true;
        console.log("you are logged in!");
    }
    else{
        console.log("invalid credentials ! please try again");
    }
}