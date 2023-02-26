const form = document.getElementById("calculator-form");

const gender = document.getElementById("gender")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const age = document.getElementById("age")
const activity = document.getElementById("activity")
const lost_weight = document.getElementById("lost_weight")
const calories = document.getElementById("calories")

form.addEventListener("submit", (e) =>{
    e.preventDefault();
    console.log(gender.value, height.value, weight.value, age.value, activity.value, lost_weight.value)
    if (gender.value === "M"){
        bmr = 10 * parseFloat(weight.value) + 6.25 * parseFloat(height.value) - 5 * parseFloat(age.value) + 5
        calories.value = parseFloat(bmr) * parseFloat(activity.value)
    }else if (gender.value === "F"){
        bmr = 10 * parseFloat(weight.value) + 6.25 * parseFloat(height.value) - 5 * parseFloat(age.value) - 161
        calories.value = parseFloat(bmr) * parseFloat(activity.value)
    }else{}
})

// if ('serviceWorker' in navigator){
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('sw.js', {updateViaCache: 'none'}).then(registration => {
//             registration.update();
//         })
//     });
// }
