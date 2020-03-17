import os
import flask, flask_sqlalchemy, flask_socketio
import ChatBot
from google.oauth2 import id_token
from google.auth.transport import requests
from rfc3987 import parse
import psycopg2

app = flask.Flask(__name__)
socketio = flask_socketio.SocketIO(app)

import models

@app.route('/')
def hello():
    return flask.render_template('index.html')

@socketio.on('connect')
def on_connect():
    print('someone connected!')
    messages = models.Message.query.all()
    message_list = []
    for message in messages:
        message_list.append({'user': 
            {
            'username': message.user_name, 
            'profilePic': message.user_profile_pic, 
            'bot': message.bot
            }, 
            'msg': message.message,
            'imageLink': message.imageLink,
            'hyperLink': message.hyperLink
        })
    
    socketio.emit('message_list received', {
    'messages': message_list
    })
    
@socketio.on('new message')
def on_new_message(data):
    print("Got an event for new message with data:", data)
    message = data['user_message']
    if '!!' == message['msg'][:2]:
        c = ChatBot.ChatBot(message['msg'])
        bot_reply = c.bot_reply()
        if '!! dior' == message['msg']:
            on_new_message(bot_reply[1])
            bot_reply = bot_reply[0]
        message = c.create_message(bot_reply)
           
    if valid_uri(message["msg"]):
        if ".jpg" in message["msg"] or ".png" in message["msg"] or ".gif" in message["msg"] or ".jpeg" in message["msg"] or "https://lh3.googleusercontent.com" in message["msg"]:
            message["imageLink"] = True
        else:
            message["hyperLink"] = True
            
    socketio.emit('message received', {
        'message': message
    })
    
    try:
        message['imageLink']
    except:
        message['imageLink'] = False
    try:
        message['hyperLink']
    except:
        message['hyperLink'] = False
    
    new_message = models.Message(message['user']['username'], message['user']['profilePic'], message['user']['bot'], message['msg'], message['imageLink'], message['hyperLink'])
    models.db.session.add(new_message)
    models.db.session.commit()
    print("emitted:", message)

def valid_uri(message):
    try: 
        parse(message, rule='IRI')
        return True
    except:
        return False

@socketio.on('user')
def on_user(data):
    print("Got an event for user with data:", data)
    if is_valid_token(data['user'][1]):
        user = {}
        user = {
            'username': data['user'][0]['profileObj']['name'], 
            'profilePic': data['user'][0]['profileObj']['imageUrl'], 
            'bot': False
                }
        
        socketio.emit('user received', {
            'user': user
        })
        
        on_new_message({'user_message': 
            {'user': 
                {
                    'username': 'Teenage Chatbot', 
                    'profilePic': None, 
                    'bot': True
                }, 
                'msg': '!! about'
            }
        })
        print('emitted:', user)

def is_valid_token(token):
    try:
        # Specify the CLIENT_ID of the app that accesses the backend:
        idinfo = id_token.verify_oauth2_token(token, requests.Request(), "214008122220-0ma5c1reanps1fqvqdt8bdrbfops9kn6.apps.googleusercontent.com")
        return True

    except ValueError:
        if token == os.getenv('dummy_token'):
            return True
        print('Invalid token')
        return False

if __name__ == '__main__':
    socketio.run(
        app,
        host=os.getenv('IP', '0.0.0.0'),
        port=int(os.getenv('PORT', 8080)),
        debug=True
    )