from flask import Flask, render_template

app = Flask('Server')

@app.route('/')
def home():
    return render_template('index.html')




app.run(debug=True)