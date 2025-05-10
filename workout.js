//Getting the data from the homepage
const urlParams = new URLSearchParams(window.location.search);
const params = ['gym', 'muaythai', 'running', 'other'];

for (i = 0; i < params.length; i++){
    if (urlParams.get(params[i]) === 'on'){
        document.getElementById(params[i] + 'routine').style.display = 'initial';
    }
}

//Changing exercise fields based on selected musle group
const muscleGroupDropdown = document.getElementById('musclegroup');
const exercises = [];
const exerciseColumns = document.querySelectorAll('tr')[2].querySelectorAll('td').length
for (i = 1; i < exerciseColumns; i++){
    exercises.push(document.getElementById('exercise' + i.toString()))
}

const chestWorkout = ['Dumbbell bench', 'Incline dumbbell bench', 'Machine chest flies', 'Dips', 'Cable pulldowns', 'Overhead tricep extensions'];
const shoulderWorkout = ['Dumbbell shoulder press', 'Machine shoulder press', 'Dips', 'Shoulder Flies', 'Cable pulldowns', 'Overhead tricep extensions'];
const backWorkout = ['Barbell rows', 'Lat pulldown', 'Seated rows', 'Machine rows', 'Machine curls', 'Incline curls'];
const legWorkout = ['Squats', 'Leg extensions', 'Hamstring curls', 'Calf raises', 'Incline curls', 'Cable pulldowns'];

function populateExercises(){
    let currentSelection = muscleGroupDropdown.value;
    switch(currentSelection){
        case 'chest':
            for (i=0; i < exercises.length; i++){
                exercises[i].innerHTML = chestWorkout[i]
            }
            break;
        case 'shoulders':
            for (i=0; i < exercises.length; i++){
                exercises[i].innerHTML = shoulderWorkout[i]
            }
            break;
        case 'back':
            for (i=0; i < exercises.length; i++){
                exercises[i].innerHTML = backWorkout[i]
            }
            break;
        case 'legs':
            for (i=0; i < exercises.length; i++){
                exercises[i].innerHTML = legWorkout[i]
            }
            break;
        default:
            for (i=0; i < exercises.length; i++){
                exercises[i].innerHTML = ''
            }
    }
}

muscleGroupDropdown.addEventListener('change', populateExercises);
