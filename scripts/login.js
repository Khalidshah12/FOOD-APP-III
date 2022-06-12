// import data from navbar.js for appeding navbar on index.html page
import navbar from "../components/navbar.js"
const nav = document.querySelector('#navbar');
nav.innerHTML = navbar()



var btn = document.querySelector("#signinbtn")
btn.addEventListener("click", myfunction)

var logindata = JSON.parse(localStorage.getItem("userdetails"))

function myfunction() {

    var obj = {
        email: document.querySelector("#email").value,
        password: document.querySelector("#password").value
    }

    let count = 0;
    let count1 = 0;
    let count2 = 0;

    if (obj.email == "" || obj.password == "") {
        alert("Please Fill All Details")
    }
    else {
        if (logindata != null) {
            logindata.forEach(function (elem) {
                if (elem.email == obj.email && elem.password == obj.password) {
                    count1++
                    localStorage.setItem("userName", elem.name)
                }
                else if (elem.email != obj.email || elem.password != obj.password) {
                    count2++
                }
            })
        }
        else {
            alert("Creat an Account")
        }

        if (count1 > 0) {
            alert("Login Successful")
            window.location.href = "index.html"
            const nav = document.querySelector('#navbar');
        } else if (count2 > 0) {
            alert("User Does not Exist")
        }
    }


}