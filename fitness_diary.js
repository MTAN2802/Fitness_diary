//Adding current date to website
const currentDate = new Date();
document.getElementById("today").innerHTML = "Current date: " + currentDate.toLocaleDateString();

//Making the text mandatory if "other" is checked
const button = document.getElementById("otherbutton");
const other = document.getElementById("other")

button.addEventListener("change", () => {
    other.required = button.checked;
});
