const form = document.getElementById("calculator-form");

const gender = document.getElementById("gender")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const age = document.getElementById("age")
const activity = document.getElementById("activity")
const lost_weight = document.getElementById("lost_weight")
const calories = document.getElementById("calories")
const protein = document.getElementById("protein")
const carbs = document.getElementById("carbs")
const fat = document.getElementById("fat")
const results = document.getElementById("results")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    // console.log(gender.value, height.value, weight.value, age.value, activity.value, lost_weight.value)
    if (gender.value === "M"){
        bmr = 10 * parseFloat(weight.value) + 6.25 * parseFloat(height.value) - 5 * parseFloat(age.value) + 5
    }else if (gender.value === "F"){
        bmr = 10 * parseFloat(weight.value) + 6.25 * parseFloat(height.value) - 5 * parseFloat(age.value) - 161
    }else{}
    calorie_val = parseFloat(bmr) * parseFloat(activity.value)
    calories.textContent = calorie_val + " kcal/day"
    protein.textContent = ((calorie_val * 24.5) / (100 * 4)).toFixed(2) + " g"
    carbs.textContent = ((calorie_val * 52) / (100 * 4)).toFixed(2) + " g"
    fat.textContent = ((calorie_val * 23.5) / (100 * 9)).toFixed(2) + " g"
    results.classList.remove("invisible")
})

if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js', {updateViaCache: 'none'}).then(registration => {
            registration.update();
        })
    });
}


import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-app.js'
import { getAnalytics, logEvent } from 'https://www.gstatic.com/firebasejs/9.19.1/firebase-analytics.js'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBHcgWjlcd3oOqBUzN03_agfkXw7x4wZmE",
    authDomain: "calorie-calculator-7a3ed.firebaseapp.com",
    projectId: "calorie-calculator-7a3ed",
    storageBucket: "calorie-calculator-7a3ed.appspot.com",
    messagingSenderId: "194258354252",
    appId: "1:194258354252:web:fad2b89d1d4541684cb4e9",
    measurementId: "G-1NT6RE98Y4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
logEvent(analytics, 'app_loaded');
