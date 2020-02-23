import os
import flask, flask_sqlalchemy, flask_socketio

app = flask.Flask(__name__)

socketio = flask_socketio.SocketIO(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://<gMakunde>:<San20Faith>@localhost/postgres'  
db = flask_sqlalchemy.SQLAlchemy(app)

@app.route('/')
def hello():
    return flask.render_template('index.html')

@socketio.on('connect')
def on_connect():
    print('someone connected!')
    socketio.emit('update', {
        'data': 'Got your connection!'
    })
    
@socketio.on('new message')
def on_new_message(data):
    print("Got an event for new message with data:", data)
    message = data['user_message']
    socketio.emit('message received', {
        'number': message
    })

@socketio.on('user')
def on_user(data):
    print("Got an event for user with data:", data)
    username = data['user']
    socketio.emit('user received', {
        'number': username
    })

socketio.run(
    app,
    host=os.getenv('IP', '0.0.0.0'),
    port=int(os.getenv('PORT', 8080)),
    debug=True
)