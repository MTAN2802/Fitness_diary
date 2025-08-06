//Getting the data from the homepage
const urlParams = new URLSearchParams(window.location.search);

if (urlParams.get('gym') === 'on'){
    document.getElementById('gymroutine').style.display = 'initial';
    document.getElementById('gym').value = 'true';
    document.getElementById('gcalories').required = 'true';

    for (let i = 1; i <= 5; i++){
        document.getElementById(`exercise${i}`).required = 'true';
        document.getElementById(`e${i}weight`).required = 'true';
        document.getElementById(`e${i}complete`).required = 'true';
    }
}

if (urlParams.get('muaythai') === 'on'){
    document.getElementById('muaythairoutine').style.display = 'initial';
    document.getElementById('muaythai').value = 'true';
    document.getElementById('mtcalories').required = 'true';
}

if (urlParams.get('running') === 'on'){
    document.getElementById('runningroutine').style.display = 'initial';
    document.getElementById('running').value = 'true';
    document.getElementById('rdistance').required = 'true';
    document.getElementById('rtimehr').required = 'true';
    document.getElementById('rtimemin').required = 'true';
    document.getElementById('rpacemin').required = 'true';
    document.getElementById('rpacesec').required = 'true';
    document.getElementById('rcalories').required = 'true';
    document.getElementById('rlocation').required = 'true';
}

if (urlParams.get('other') == 'on'){
    const otherExercise = urlParams.getAll('other')[1];
    document.getElementById('name').value = otherExercise

    document.getElementById('otherroutine').style.display = 'initial';
    document.getElementById('other').value = 'true';
    document.getElementById('name').required = 'true';
    document.getElementById('timehr').required = 'true';
    document.getElementById('timemin').required = 'true';
    document.getElementById('location').required = 'true';
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

