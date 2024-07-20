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

@app.route('/favicon.ico')
def favicon():
    return send_from_directory(directory='.', path='favicon.ico')

@app.route('/apple-touch-icon.png')
def faviconapple():
    return send_from_directory(directory='.', path='apple-touch-icon.png')

@app.route('/favicon-32x32.png')
def favicon32x32():
    return send_from_directory(directory='.', path='favicon-32x32.png')

@app.route('/favicon-32x32.png')
def favicon16x16():
    return send_from_directory(directory='.', path='favicon-16x16.png')

@app.route('/site.webmanifest')
def webmanifest():
    return send_from_directory(directory='.', path='site.webmanifest')

@app.route('/browserconfig.xml')
def browserconfig():
    return send_from_directory(directory='.', path='browserconfig.xml')
@app.route('/safari-pinned-tab.svg')
def safaritab():
    return send_from_directory(directory='.', path='safari-pinned-tab.svg')

@app.route('/android-chrome-192x192.png')
def android192x192():
    return send_from_directory(directory='.', path='android-chrome-192x192.png')

@app.route('/android-chrome-512x512.png')
def android512x512():
    return send_from_directory(directory='.', path='android-chrome-512x512.png')

@app.route('/mstile-70x70.png')
def mstile70x70():
    return send_from_directory(directory='.', path='mstile-70x70.png')
@app.route('/mstile-144x144.png')
def mstile144x144():
    return send_from_directory(directory='.', path='mstile-144x144.png')
@app.route('/mstile-150x150.png')
def mstile150x150():
    return send_from_directory(directory='.', path='mstile-150x150.png')
@app.route('/mstile-310x150.png')
def mstile310x150():
    return send_from_directory(directory='.', path='mstile-310x150.png')
@app.route('/mstile-310x310.png')
def mstile310x310():
    return send_from_directory(directory='.', path='mstile-310x310.png')

@app.route('/footer-bg.webp')
def footerbg():
    return send_from_directory(directory='.', path='footer-bg.webp')
@app.route('/bg1.webp')
def bg1():
    return send_from_directory(directory='.', path='bg1.webp')
@app.route('/bg2.webp')
def bg2():
    return send_from_directory(directory='.', path='bg2.webp')

@app.route('/bg3.webp')
def bg3():
    return send_from_directory(directory='.', path='bg3.webp')
@app.route('/bg4.webp')
def bg4():
    return send_from_directory(directory='.', path='bg4.webp')

@app.route('/bg5.webp')
def bg5():
    return send_from_directory(directory='.', path='bg5.webp')

@app.route('/menu.webp')
def menu1():
    return send_from_directory(directory='.', path='menu.webp')

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=8000)
