
const minutesInput = document.querySelector("#minutes");
const adviseBtn = document.querySelector("#adviseBtn");
const result = document.querySelector("#result");

// 
adviseBtn.addEventListener("click", function() {

    
    let minutes = Number(minutesInput.value);

  
    if (minutesInput.value.trim() === "" || !Number.isFinite(minutes) || minutes < 0) {

        result.textContent = "Please enter a valid number of minutes.";

    } else if (minutes < 25) {

        result.textContent = "Keep going! You don't need a break yet.";

    } else if (minutes < 50) {

        result.textContent = "Take a 5-minute break.";

    } else if (minutes < 90) {

        result.textContent = "Take a 10-minute break.";

    } else {

        result.textContent = "Take a longer break and recharge.";

    }

});
