from flask import Flask, render_template, request, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('index.html')

#Create Send route for From
@app.route('/send', methods=['POST'])
def send():
    if request.method == 'POST':
        num1 = request.form['num1']
        num2 = request.form['num2']
        c1 = int(num1) ** 2
        c2 = int(num2) ** 2
        sum = ((c1 + c2) ** (1/2))
        
        #render_template('index.html', sum=sum)
        return jsonify({"olá": f"{sum}"})


@app.route('/test', methods=['GET'])
def test():
    if request.method == 'GET':
        return jsonify({ "minha" : "Gostosa"})

        
@app.route('/testando', methods=['POST'])
def testando():
    if request.method == 'POST':
        return jsonify({ "Post" : "Fiz um post"})

app.run(debug=True)
