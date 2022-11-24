if (localStorage.getItem ("username")) {
    showPage3();
} else {
    showPage2();
}


function showPage1(){
    document.querySelector("#page1").style.display = "";
    document.querySelector("#page2").style.display = "none";
    document.querySelector("#page3").style.display = "none";
    document.querySelector("#page4").style.display = "none";
}

function showPage2(){
    document.querySelector("#page1").style.display = "none";
    document.querySelector("#page2").style.display = "";
    document.querySelector("#page3").style.display = "none";
    document.querySelector("#page4").style.display = "none";

   } 
   var objPeople = [
    { 
        username: "janne",
        password: "test"
    },
    { 
        username: "sara",
        password: "password"
    },
    { 
        username: "chris",
        password: "password"
    }

]

    function getInfo() {
        var username = document.getElementById('user').value
        var password = document.getElementById('pass').value
        let inloggad = document.getElementById("loggedIn");
    
        var loginSuccess = false;
        
        for(var i = 0; i < objPeople.length; i++) {
            
                if(username === objPeople[i].username && password === objPeople[i].password) {
                        loginSuccess = true; 
                     }
                   }
                   if(loginSuccess){
                localStorage.setItem("username", username)
                showPage3();   
            }else {
                 alert("Wrong username or password");
                }
            }


function showPage3(){
    document.querySelector("#page1").style.display = "none";
    document.querySelector("#page2").style.display = "none";
    document.querySelector("#page3").style.display = "";
    document.querySelector("#page4").style.display = "none";

        let user = localStorage.getItem("username");

    loggedIn.innerText = "Welcome " + user.charAt(0).toUpperCase() + user.slice(1) +"!"; 
}

function logOut() {
    localStorage.removeItem("username");
        showPage1();
}
    
function showPage4(){
    document.querySelector("#page1").style.display = "none";
    document.querySelector("#page2").style.display = "none";
    document.querySelector("#page3").style.display = "none";
    document.querySelector("#page4").style.display = "";

}
function createAccount() {
    var registerUsername = document.getElementById('newuser').value
    var registerPassword = document.getElementById('newpass').value

    var newUser = {
      username: registerUsername,
      password: registerPassword
    }

    for (var i = 0; i < objPeople.length; i++) {
  
      if (registerUsername == objPeople[i].username) {
        alert('That username is already taken, please choose another')
        return; 
      } else {
    
    alert('User created, you can now log in!');
    objPeople.push(newUser)
    
}

}
}
