const loginButton =
document.getElementById("login");

const logoutButton =
document.getElementById("logout");


const loginBox =
document.getElementById("login-box");

const dashboard =
document.getElementById("dashboard");



function showDashboard(user){

    loginBox.style.display="none";

    dashboard.style.display="block";

}



function showLogin(){

    loginBox.style.display="block";

    dashboard.style.display="none";

}




loginButton.addEventListener(
"click",
()=>{

    netlifyIdentity.open();

});





netlifyIdentity.on(
"init",
user=>{

    if(user){

        showDashboard(user);

    }

});





netlifyIdentity.on(
"login",
user=>{

    showDashboard(user);

    netlifyIdentity.close();

});





logoutButton.addEventListener(
"click",
()=>{

    netlifyIdentity.logout();

});





netlifyIdentity.on(
"logout",
()=>{

    showLogin();

});