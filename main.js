const root = document.querySelector('#root');
createHtmlSignIn();

function createHtmlSignIn(){
    
const usernameInput = document.createElement('input');
usernameInput.placeholder = "Användarnamn";
const passwordInput = document.createElement('input');
passwordInput.placeholder = "Lösenord";
const signInBtn = document.createElement('button');
signInBtn.innerText = "Logga in"

root.append(usernameInput, passwordInput, signInBtn);
}