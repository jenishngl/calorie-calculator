const form = document.getElementById("calculator-form");

form.addEventListener("submit", (e) =>{
    e.preventDefault();
})

if ('serviceWorker' in navigator){
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('sw.js', {updateViaCache: 'none'}).then(registration => {
            registration.update();
        })
    });
}
