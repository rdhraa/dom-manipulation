let quote = document.getElementById("quote")
quote.innerHTML ="WORK HARD,DREAM BIG,NEVER GIVE UP"


let infobox = document.querySelectorAll("div")
infobox.forEach((y) => {
    y.style.backgroundColor ="yellow"
});

let task = document.getElementsByTagName("li")
task[2].innerText = "Task Completed"

let footerMsg = document.querySelector('footer span')
footerMsg.append(', Have a great day.')


