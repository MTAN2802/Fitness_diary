//Adding current date to website
const currentDate = new Date();
document.getElementById("today").innerHTML = "Current date: " + currentDate.toLocaleDateString();

//Making the text mandatory if "other" is checked
const otherButton = document.getElementById("otherbutton");
const otherOption = document.getElementById("other")

otherButton.addEventListener("change", () => {
    otherOption.required = otherButton.checked;
});

//Alerting if nothing has been selected
function activeStatus(e){
    const inputs = document.querySelectorAll('input[type="checkbox"]');
    let active = false;
    inputs.forEach((input) => {
        if (input.checked){
            active = true;
        };
    });
    if(!active){
        alert("Please select at least one option to continue.")
        e.preventDefault() // Prevent the form from going to the next page
    }
}
