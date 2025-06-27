from flask import Flask, request, render_template

app = Flask(__name__)

data_storage = []

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/workout.html')
def workout_page():
    return render_template('workout.html')


@app.route('/submit', methods=['POST'])
def exercises_selected():
    exercises = ['gym', 'muaythai', 'running', 'other']
    selected = []
    for exercise in exercises:
        if request.args.get(exercise) == 'on':
            selected.append(exercise)
    return selected

def submit():
    submission = []
    data = exercises_selected()
    date = request.form('workoutdate')

    if 'gym' in data:
        muscle_group = request.form('musclegroup')
        exercise1 = request.form('exercise1')
        e1weight = request.form('e1weight')
        e1reps = request.form('e1reps')
        overall_calories = request.form('gcalories')
        submission.append({"Name": "Gym",
                           "Date": date,
                           "Muscle Group": muscle_group,
                           "Exercises": [
                               {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps},
                               {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps},
                               {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps},
                               {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps},
                               {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps},
                               {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps}
                           ],
                           "Calories burnt": overall_calories})

    if 'muaythai' in data:
        focus_point = request.form('focuspoint')
        calories = request.form('mtcalories')
        level = request.form('level')
        submission.append({"Name": "Muay Thai", 
                           "Date": date, 
                           "Focus Point": focus_point, 
                           "Calories burnt": calories, 
                           "Level": level})
        
    if 'running' in data:
        distance = request.form('rdistance')
        r_time = request.form('rtime')
        pace = request.form('rpace')
        r_calories = request.form('rcalories')
        r_location = request.form('rlocation')
        submission.append({"Name": "Running",
                           "Date": date,
                           "Distance": distance,
                           "Total Time": r_time,
                           "Pace": pace,
                           "Calories burnt": r_calories,
                           "Location": r_location})
        
    if 'other' in data:
        exercise_name = request.form('name')
        o_calories = request.form('calories')
        o_time = request.form('time')
        o_location = request.form('location')
        submission.append({"Name": exercise_name,
                           "Date": date,
                           "Calories burnt": o_calories,
                           "Total Time": o_time,
                           "Location": o_location})


if __name__ == '__main__':
    app.run(debug=True)