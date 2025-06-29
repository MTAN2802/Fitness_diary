from flask import Flask, request, render_template

app = Flask(__name__)

@app.route('/')
def homepage():
    return render_template('homepage.html')

@app.route('/workout.html')
def workout_page():
    return render_template('workout.html')

@app.route('/submit', methods=['POST'])
def enter_data():
    form_data = request.form.to_dict()

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
                            {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps},
                            {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps},
                            {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps},
                            {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps},
                            {"Exercise 1": exercise1, "E1 Weight": e1weight, "E1 Reps": e1reps}
                           ],
            'Calories burnt': filled.get('gcalories')

        }

    return filled


if __name__ == '__main__':
    app.run(debug=True)