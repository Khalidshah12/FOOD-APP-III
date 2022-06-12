
// import data from navbar.js for appeding navbar on recipeDay.html page
import navbar from "../components/navbar.js";
const nav = document.querySelector('#navbar');
nav.innerHTML = navbar()

// import fetch from fetchData.js for fetching the data
import { getData, display } from '../components/fetchData.js';

let url = `https://www.themealdb.com/api/json/v1/1/random.php`
let data = await getData(url)
// console.log(data)
const food = document.querySelector('#food');
display(data, food)