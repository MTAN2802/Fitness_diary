//Getting the data from the homepage
const urlParams = new URLSearchParams(window.location.search);
const params = ['gym', 'muaythai', 'running', 'other'];

for (i = 0; i < params.length; i++){
    if (urlParams.get(params[i]) === 'on'){
        document.getElementById(params[i] + 'routine').style.display = 'initial';
        document.getElementById(params[i]).value = 'true';
    }
}

//Adding current date to website
const currentDate = new Date().toLocaleDateString('en-CA');
document.getElementById('workoutdate').value = currentDate;


//Changing exercise fields based on selected musle group
const muscleGroupDropdown = document.getElementById('musclegroup');
const exercises = [];
const exerciseColumns = document.querySelectorAll('tr')[2].querySelectorAll('td').length
for (i = 1; i <= exerciseColumns; i++){
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

/*extracting data from website
const gymData = [];
const muayThaiData = [];
const runningData = [];
const otherData = [];

function getData(){
    const date = document.getElementById('workoutdate').value
    if (urlParams.get('gym') === 'on'){
        const name = 'Gym';
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

        const newWorkout = {name, date, musclegroup, exercise1, exercise2, exercise3, exercise4, exercise5, e1weight, e2weight, 
            e3weight, e4weight, e5weight, e1reps, e2reps, e3reps, e4reps, e5reps, gcalories};
        
        gymData.push(newWorkout);
    }
    if (urlParams.get('muaythai') === 'on'){
        const name = document.getElementById('mtname').value;
        const focuspoint = document.getElementById('focuspoint').value;
        const calories = document.getElementById('mtcalories').value;
        const level = document.getElementById('level').value;

        const newWorkout = {name, date, focuspoint, calories, level};

        muayThaiData.push(newWorkout);
    }

    if (urlParams.get('running') === 'on'){
        const name = 'Running';
        const runtype = document.getElementById('rtype').value;
        const distance = document.getElementById('rdistance').value;
        const time = document.getElementById('rtimehr').value.toString() + ':' + document.getElementById('rtimemin').toString();
        const pace = document.getElementById('rpacehr').value.toString() + ':' + document.getElementById('rpacemin').toString();
        const calories = document.getElementById('rcalories').value;
        const location = document.getElementById('rlocation').value;

        const newWorkout = {name, date, runtype, distance, time, pace, calories, location}

        runningData.push(newWorkout);
    }
    if (urlParams.get('other') === 'on'){
        const name = document.getElementById('name').value;
        const calories = document.getElementById('calories').value;
        const time = document.getElementById('time').value;
        const location = document.getElementById('location').value;

        const newWorkout = {date, name, calories, time, location};

        otherData.push(newWorkout);
    }

}


document.getElementById('submit').addEventListener('click', getData);*/

