from flask import Flask
app = Flask(__name__)

@app.route('/hello/<name>')
def index(name):
  return name

