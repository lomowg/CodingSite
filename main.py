from flask import Flask, render_template

app = Flask(__name__)


@app.route('/')
def index():
    return render_template('index.html')


@app.route('/coding')
def coding():
    return render_template('coding.html')

@app.route('/diagnostic')
def diagnostic():
    return render_template('diagnostic.html')

@app.route('/carplay')
def carplay():
    return render_template('carplay.html')
@app.route('/mybmw')
def mybmw():
    return render_template('mybmw.html')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
