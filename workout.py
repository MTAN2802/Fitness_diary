from flask import Flask, request, render_template
import pandas as pd
import os
from sqlalchemy import create_engine

print("Current working directory:", os.getcwd())

app = Flask(__name__)
app.json.sort_keys = False #To stop the keys in the dictionary being ordered alphabetically

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/workout.html')
def workout_page():
    return render_template('workout.html')

@app.route('/submit', methods=['POST'])
def enter_data():
    form_data = request.form.to_dict()
    exercises = []
    filled = {}
    for key in form_data:
        if form_data[key] != '' and form_data[key] != 'Select a muscle group' and form_data[key] != 'false':
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
        exercises.append(Gym)

    if filled.get('Muay Thai'):
        MuayThai = {
            'Workout Date': filled.get('workoutdate'),
            'name': 'Muay Thai',
            'Focus Point': filled.get('focuspoint'),
            'Level': filled.get('level'),
            'Calories burnt': filled.get('mtcalories')
        }
        exercises.append(MuayThai)

    if filled.get('Running'):
        Running = {
            'Workout Date': filled.get('workoutdate'),
            'Name': 'Running',
            'Distance': filled.get('rdistance'),
            'Total Time': filled.get('rtime'),
            'Pace': filled.get('rpace'),
            'Location': filled.get('rlocation'),
            'Calories burnt': filled.get('rcalories')
        }
        exercises.append(Running)

    if filled.get('Other'):
        Other = {
            'Workout Date': filled.get('workoutdate'),
            'Name': filled.get('name'),
            'Total Time': filled.get('time'),
            'Location': filled.get('location'),
            'Calories burnt': filled.get('calories')
        }

        exercises.append(Other)

    df = pd.DataFrame(exercises)
    file_path = 'Workout_list.csv'
    file_exists = os.path.isfile(file_path)
    df.to_csv(file_path, mode='a', header=not file_exists, index=False)

    engine = create_engine("postgresql://postgres:12345678@localhost:5432/postgres")
    data = pd.read_csv(file_path)
    data.to_sql('Workout', engine, index=False, if_exists='append')
    
    return exercises

if __name__ == '__main__':
    app.run(debug=True)