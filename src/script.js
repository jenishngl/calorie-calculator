const form = document.getElementById("calculator-form");


form.addEventListener("submit", (e) =>{
    e.preventDefault();
    const results = document.getElementById("results")
    results.classList.remove("invisible")
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

    let bmr = 0
    let calorie_val = 0

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
})

if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js', {updateViaCache: 'none'}).then(registration => {
            registration.update();
        })
    });
}
