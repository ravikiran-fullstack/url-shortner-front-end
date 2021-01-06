const usernameLogin = document.getElementById("userEmailLogin");
const passwordLogin = document.getElementById("userPasswordLogin");
async function login(loginData){
  try{
    const url = 'http://localhost:8585/login';
    const response = await fetch(url, {
                      method: 'POST',
                      headers: {
                        'Content-Type': 'application/json'
                      },
                      body: JSON.stringify(loginData)
                    });
    const data = await response.json();
    validateLoginResponse(data);
  } catch(err){
    console.log("login error",err);
  }
}

function validateLoginResponse(data){
  console.log('validateLoginResponse', data);
  if(data.message === "Invalid username or password"){
   // usernameLogin.focus();  
   // passwordLogin.focus();
    usernameLogin.value = '';
    passwordLogin.value = '';
    
    document.getElementById('invalidCredentialsHelp').classList.remove('hidden');
  }
}

function loginUser() {
  const username = usernameLogin.value;
  const password = passwordLogin.value;
  // location.replace('/register.html');
  const loginData = {
    username, 
    password
  }
  console.log(loginData);
  login(loginData);
  event.preventDefault();
}

document.querySelector('#userEmailLogin').addEventListener("click", event => {
  document.getElementById('invalidCredentialsHelp').classList.add('hidden');
});

document.querySelector('#userPasswordLogin ').addEventListener("click", event => {
  document.getElementById('invalidCredentialsHelp').classList.add('hidden');
});