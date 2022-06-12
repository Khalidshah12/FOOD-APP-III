
// import data from navbar.js for appeding navbar on randomRecipe.html page
import navbar from "../components/navbar.js"
const nav = document.querySelector('#navbar');
nav.innerHTML = navbar()



let dataArr = JSON.parse(localStorage.getItem("userdetails")) || []

var btn = document.querySelector("#signupbtn")
btn.addEventListener("click", myfunction)

function myfunction() {
    var obj = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    if (obj.name == "" || obj.email == "" || obj.password == "") {
        alert("Please Fill All Details")
    }
    else {
        dataArr.push(obj)
        localStorage.setItem("userdetails", JSON.stringify(dataArr))
        window.location.href = "./login.html"
    }

}