import os
import flask, flask_sqlalchemy, flask_socketio
import models
import ChatBot
from google.oauth2 import id_token
from google.auth.transport import requests

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
    if '!!' in message['msg']:
        c = ChatBot.ChatBot(message['msg'])
        bot_reply = c.bot_reply()
        message = {'user': 
                    {
                    'username': 'Teenage Chatbot', 
                    'profilePic': None, 
                    'bot': True
                    }, 
                    'msg': bot_reply
                }
    
    socketio.emit('message received', {
        'message': message
    })
    print("emitted:", message)

@socketio.on('user')
def on_user(data):
    print("Got an event for user with data:", data)
    user = {}
    user = {
        'username': data['user']['profileObj']['name'], 
        'profilePic': data['user']['profileObj']['imageUrl'], 
        'bot': True
            }
    
    socketio.emit('user received', {
        'user': user
    })
    
    on_new_message({'user_message': 
        {'user': 
            {'username': 
                'Teenage Chatbot', 
                'profilePic': None, 
                'bot': True
            }, 
            'msg': '!! about'
        }
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