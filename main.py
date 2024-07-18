from flask import Flask, render_template, send_from_directory

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

@app.route('/navi')
def navi():
    return render_template('navi.html')
@app.route('/help')
def help():
    return render_template('help.html')

@app.route('/contacts')
def contacts():
    return render_template('contacts.html')

@app.route('/favicon.png')
def favicon():
    return send_from_directory(directory='.', path='favicon.png')


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
