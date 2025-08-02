from flask import Flask, request, render_template
import pandas as pd
import os

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
        Gym = {
            'Workout Date': filled.get('workoutdate'),
            'name': 'Gym',
            'Muscle Group': filled.get('musclegroup'),
            "Exercises":[
                            {"Exercise 1": filled.get('exercise1'), "E1 Weight": filled.get('e1weight'), "E1 Reps": filled.get('e1reps')},
                            {"Exercise 2": filled.get('exercise2'), "E2 Weight": filled.get('e2weight'), "E2 Reps": filled.get('e2reps')},
                            {"Exercise 3": filled.get('exercise3'), "E3 Weight": filled.get('e3weight'), "E3 Reps": filled.get('e3reps')},
                            {"Exercise 4": filled.get('exercise4'), "E4 Weight": filled.get('e4weight'), "E4 Reps": filled.get('e4reps')},
                            {"Exercise 5": filled.get('exercise5'), "E5 Weight": filled.get('e5weight'), "E5 Reps": filled.get('e5reps')}
                           ],
            'Calories burnt': filled.get('gcalories')
        }
        gymworkout.append(Gym)

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