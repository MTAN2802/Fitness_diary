//Getting the data from the homepage
const urlParams = new URLSearchParams(window.location.search);
const params = ['gym', 'muaythai', 'running', 'other'];

for (i = 0; i < params.length; i++){
    if (urlParams.get(params[i]) === 'on'){
        document.getElementById(params[i] + 'routine').style.display = 'initial';
    }
}

//Adding current date to website
const currentDate = new Date().toISOString().split('T')[0];
document.getElementById('workoutdate').value = currentDate;


//Changing exercise fields based on selected musle group
const muscleGroupDropdown = document.getElementById('musclegroup');
const exercises = [];
const exerciseColumns = document.querySelectorAll('tr')[2].querySelectorAll('td').length
for (i = 1; i < exerciseColumns; i++){
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

//Extracting data

const gymData = {
    entry: []
} //JSON object for gym data

const muayThaiData = {
    entry: []
} //JSON object for gym data

const runningData = {
    entry: []
} //JSON object for gym data

const otherData = {
    entry: []
} //JSON object for gym data

function getData(){
    const date = document.getElementById('workoutdate').value
    if (urlParams.get('gym') === 'on'){
        const musclegroup = document.getElementById('musclegroup').value;
        const exercise1 = document.getElementById('exercise1').innerHTML;
        const exercise2 = document.getElementById('exercise2').innerHTML;
        const exercise3 = document.getElementById('exercise3').innerHTML;
        const exercise4 = document.getElementById('exercise4').innerHTML;
        const exercise5 = document.getElementById('exercise5').innerHTML;
        const e1weight = document.getElementById('e1weight').value;
        const e2weight = document.getElementById('e2weight').value;
        const e3weight = document.getElementById('e3weight').value;
        const e4weight = document.getElementById('e4weight').value;
        const e5weight = document.getElementById('e5weight').value;
        const e1reps = document.getElementById('e1reps').value;
        const e2reps = document.getElementById('e2reps').value;
        const e3reps = document.getElementById('e3reps').value;
        const e4reps = document.getElementById('e4reps').value;
        const e5reps = document.getElementById('e5reps').value;
        const gcalories = document.getElementById('gcalories').value;

        const newWorkout = { date, musclegroup, exercise1, exercise2, exercise3, exercise4, exercise5, e1weight, e2weight, 
            e3weight, e4weight, e5weight, e1reps, e2reps, e3reps, e4reps, e5reps, gcalories};
        
        gymData.entry.push(newWorkout);
    }
    else if (urlParams.get('muaythai') === 'on'){
        const focuspoint = document.getElementById('focuspoint').value;
        const calories = document.getElementById('mtcalories').value;
        const level = document.getElementById('level').value;

        const newWorkout = { date, focuspoint, calories, level};

        muayThaiData.entry.push(newWorkout);
    }

    else if (urlParams.get('running') === 'on'){
        const distance = document.getElementById('rdistance').value;
        const time = document.getElementById('rtime').value;
        const pace = document.getElementById('rpace').value;
        const calories = document.getElementById('rcalories').value;
        const location = document.getElementById('rlocation').value;

        const newWorkout = { date, distance, time, pace, calories, location}

        runningData.entry.push(newWorkout);
    }
    else if (urlParams.get('other') === 'on'){
        const name = document.getElementById('name').value;
        const calories = document.getElementById('calories').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('location').value;

        const newWorkout = {date, name, calories, time, location};

        otherData.entry.push(newWorkout);
    }
}
document.getElementById('submit').addEventListener('submit', getData)
