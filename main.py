# Using glob to make 2 lists
#the first one containing the paths to the image files
#the second one containing the country names
import os
import glob
flags_dir = os.path.join('static', 'flags')

files = glob.glob(os.path.join(flags_dir, '*'))

countries = [
    os.path.basename(x)
      .replace("-", " ")
      .replace(".png", "")
      .replace("flag of ", "")
      .title()
    for x in files
]
#loading them into a dictionary
data = {}
for i in range(len(countries)):
    country = countries[i]
    file = files[i]
    data[country] = file

#using flask to render the data to the Javascript file (script.js)
from flask import Flask, render_template, jsonify
app = Flask(__name__)

#rendering the html files
@app.route('/')
def home():
    return render_template('home.html')
@app.route('/game')
def game():
    return render_template('index.html')
@app.route('/end')
def end():
    return render_template('end.html')
import random

#sending information [country choices, correct choice, path to the image of the flag]
@app.route('/next', methods=['GET'])
def next():
    country_choice = random.sample(countries, 4)
    correct = random.choice(country_choice)
    image = data[correct]
    #convert the data into json format
    return jsonify({
        'country_choice' : country_choice,
        'correct': correct,
        'image': '/' + image
    })
if __name__ == '__main__':
    app.run(debug=True)