//Adding current date to website
const currentDate = new Date();
document.getElementById("today").innerHTML = "Current date: " + currentDate.toLocaleDateString();

//Making the text mandatory if "other" is checked
const otherbutton = document.getElementById("otherbutton");
const other = document.getElementById("other")

otherbutton.addEventListener("change", () => {
    other.required = button.checked;
});

//Alerting if nothing has been selected
function activeStatus(){
    const inputs = document.querySelectorAll('input[type="checkbox"]');
    let active = false;
    inputs.forEach((input) => {
        if (input.checked){
            active = true;
        };
    });
    if(!active){
        alert("Please select at least one option to continue.")
    }
}

const submitButton = document.getElementById("continue");
submitButton.addEventListener("click", activeStatus)

