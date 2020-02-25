import os
import flask, flask_sqlalchemy, flask_socketio
import models

app = flask.Flask(__name__)

socketio = flask_socketio.SocketIO(app)

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
        'message': message
    })
    print("emitted:", message)

@socketio.on('user')
def on_user(data):
    print("Got an event for user with data:", data)
    user = data['user']
    socketio.emit('user received', {
        'user': user
    })
    print('emitted:', user)

@socketio.on('users list')
def on_new_user(data):
    print("Got an event for user with data:", data)
    users = data['users_list']
    socketio.emit('users list', {
        'users_list': users
    })
    print('emitted:', users)

if __name__ == '__main__':
    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=True
    )