// import data from navbar.js for appeding navbar on index.html page
import navbar from "../components/navbar.js"
const nav = document.querySelector('#navbar');
nav.innerHTML = navbar()

// import fetch from fetchData.js for fetching the data
import { getData, display } from '../components/fetchData.js';

//  adding Event listener "input" to input
const inputAddevent = document.querySelector('#search');
inputAddevent.addEventListener("input", searchData)

let id;
async function searchData() {
    if (id) {
        clearTimeout(id)
    }
    // added debouncing of 1s
    id = setTimeout(async function () {
        const search = document.querySelector('#search').value;
        let url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
        let data = await getData(url)
        const food = document.querySelector('#food');
        display(data, food)
        console.log(search)
    }, 1000)
}

let userName = localStorage.getItem("userName")
if (userName != null) {
    const navbarAgain = document.querySelector('#navbar');
    navbarAgain.innerHTML = `<div id="logo">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKYdgSpn6I5yspvTaLzUbv4GicXbT7Fm3gBZFef0flNlXi3qTJKXtp0oRk3oG6A-RzQf4&usqp=CAU" alt="">
    </div>
    <div id="options">
    <h3><a href="./index.html">Home</a></h3>
    <h3><a href="./recipeDay.html">Recipe of the Day</a></h3>
    <h3><a href="./login.html">${userName}</a></h3>
    </div>`
}
