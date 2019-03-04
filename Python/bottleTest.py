from bottle import route, run, request, response, Bottle

app = Bottle()

@app.route('/hello/<name>')
def index(name):
  return name

