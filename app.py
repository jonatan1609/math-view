from flask import Flask, render_template, send_from_directory
import os 


app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('index.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/png')


app.run()
