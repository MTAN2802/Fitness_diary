from flask import Flask, request, render_template
import pandas as pd
import os
import csv

print("Current working directory:", os.getcwd())

app = Flask(__name__)
app.json.sort_keys = False #To stop the keys in the dictionary being ordered alphabetically

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/test.html')
def workout_page():
    return render_template('test.html')

@app.route('/submit', methods=['POST'])
def enter_data():
    form_data = request.form.to_dict() #returns all entries
    gymsession = []
    gymworkout = []
    mtworkout = []
    runningworkout = []
    otherworkout = []
    filled = {}
    dont_submit = ['Select a muscle group', 'Focus point', 'Running type']
    for key in form_data:
        if form_data[key] != '' and form_data[key] != 'false' and form_data[key] not in dont_submit: #to filter out entries to just selected ones
            filled.update({key: form_data[key]})

    if filled.get('Gym'):
        if os.path.exists("gymsession.csv"):
            with open("gymsession.csv", "r", newline="") as file:
                reader = csv.DictReader(file)
                rows = list(reader)
                last_session_id = int(rows[-1]['session']) if rows else 0
        else:
            last_session_id = 0
        
        session_id = last_session_id + 1;
        GymSession = {
            'Workout Date': filled.get('workoutdate'),
            'name': 'Gym',
            'session': session_id,
            'Muscle Group': filled.get('musclegroup'),             
            'Calories burnt': filled.get('gcalories')
        }
        gymsession.append(GymSession)

        for i in range(1,6):
            i = str(i)
            GymWorkout = {
                'session': session_id,
                'Muscle Group': filled.get('musclegroup'),
                "Exercise": filled.get(f'exercise{i}'), "Weight": filled.get(f'e{i}weight'), "Reps": filled.get(f'e{i}reps'), "Full reps?": filled.get(f'e{i}complete')
            }
            gymworkout.append(GymWorkout)


    if filled.get('Muay Thai'):
        MuayThai = {
            'Workout Date': filled.get('workoutdate'),
            'name': 'Muay Thai',
            'Focus Point': filled.get('focuspoint'),
            'Level': filled.get('level'),
            'Calories burnt': filled.get('mtcalories')
        }
        mtworkout.append(MuayThai)

    if filled.get('Running'):
        def convert_to_min(time_str):
            hours, minutes = map(int, time_str.split(':'))
            return hours * 60 + minutes
        Running = {
            'Workout Date': filled.get('workoutdate'),
            'Name': 'Running',
            'Distance (km)': filled.get('rdistance'),
            'Total Time (min)': convert_to_min(filled.get('rtimehr') + ':' + filled.get('rtimemin')),
            'Pace': filled.get('rpacemin') + ':' + filled.get('rpacesec'),
            'Location': filled.get('rlocation'),
            'Calories burnt': filled.get('rcalories')
        }
        runningworkout.append(Running)

    if filled.get('Other'):
        Other = {
            'Workout Date': filled.get('workoutdate'),
            'Name': filled.get('name'),
            'Total Time': filled.get('time'),
            'Location': filled.get('location'),
            'Calories burnt': filled.get('calories')
        }

        otherworkout.append(Other)

    workouts = [
    ("gymsession", gymsession),        
    ("gymworkout", gymworkout),
    ("mtworkout", mtworkout),
    ("runningworkout", runningworkout),
    ("otherworkout", otherworkout)
    ]
    for name, workout in workouts:
        if len(workout) >= 1:
            df = pd.DataFrame(workout)
            file_path = f"{name}.csv"
            file_exists = os.path.isfile(file_path)
            df.to_csv(file_path, mode='a', header=not file_exists, index=False)

    return 'Form submitted. Thanks!'

if __name__ == '__main__':
    app.run(debug=True)