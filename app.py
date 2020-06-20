from flask import Flask, render_template, send_from_directory, request
import os 
import asciimathml
from xml.etree.ElementTree import tostring


app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('index.html')


@app.route('/favicon.ico')
def favicon():
    return send_from_directory(os.path.join(app.root_path, 'static'),
                               'favicon.ico', mimetype='image/png')


@app.route('/get')
def get():
    return tostring(asciimathml.parse(request.args['val'])).decode()


if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port, debug=True)
