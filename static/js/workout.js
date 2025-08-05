//Getting the data from the homepage
const urlParams = new URLSearchParams(window.location.search);
const params = ['gym', 'muaythai', 'running', 'other'];

for (i = 0; i < params.length; i++){
    if (urlParams.get(params[i]) === 'on'){
        document.getElementById(params[i] + 'routine').style.display = 'initial';
        document.getElementById(params[i]).value = 'true';
    }
}

if (urlParams.get('other') == 'on'){
    const otherExercise = urlParams.getAll('other')[1];
    document.getElementById('name').value = otherExercise
}

//Adding current date to website
const currentDate = new Date().toLocaleDateString('en-CA');
document.getElementById('workoutdate').value = currentDate;


//Changing exercise fields based on selected musle group
const muscleGroupDropdown = document.getElementById('musclegroup');
const exercises = [];
for (i = 1; i <= 5; i++){
    exercises.push(document.getElementById('exercise' + i.toString()))
}

const chestWorkout = ['Dumbbell bench', 'Incline dumbbell bench', 'Machine chest flies', 'Cable pulldowns', 'Overhead tricep extensions'];
const shoulderWorkout = ['Dumbbell shoulder press', 'Machine shoulder press', 'Shoulder Flies', 'Cable pulldowns', 'Overhead tricep extensions'];
const backWorkout = ['Lat pulldown', 'Seated rows', 'Machine rows', 'Machine curls', 'Incline curls'];
const legWorkout = ['Squats', 'Leg extensions', 'Calf raises', 'Incline curls', 'Cable pulldowns'];

function populateExercises(){
    let currentSelection = muscleGroupDropdown.value;
    switch(currentSelection){
        case 'chest':
            for (i=0; i < exercises.length; i++){
                exercises[i].value = chestWorkout[i]
            }
            break;
        case 'shoulders':
            for (i=0; i < exercises.length; i++){
                exercises[i].value = shoulderWorkout[i]
            }
            break;
        case 'back':
            for (i=0; i < exercises.length; i++){
                exercises[i].value = backWorkout[i]
            }
            break;
        case 'legs':
            for (i=0; i < exercises.length; i++){
                exercises[i].value = legWorkout[i]
            }
            break;
        default:
            for (i=0; i < exercises.length; i++){
                exercises[i].value = ''
            }
    }
}

muscleGroupDropdown.addEventListener('change', populateExercises);

