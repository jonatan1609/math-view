from flask import Flask, render_template, url_for


app = Flask(__name__)


@app.route('/')
def main_page():
    return render_template('index.html')


app.add_url_rule('/favicon.ico',
                 redirect_to=url_for('static', filename='static/favicon.ico'))
app.run()
