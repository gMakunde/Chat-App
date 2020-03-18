import unittest
import app
import models
import os

class SocketIOTestCase(unittest.TestCase):
    def test_on_connect(self):
        client = app.socketio.test_client(app.app)
        response = client.get_received()
        
        self.assertEqual(len(response), 1)
        from_server = response[0]
        self.assertEqual(
        from_server["name"], 
        "message_list received"
        )
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
        data = from_server["args"][0]
        self.assertEqual(data["messages"], message_list)
    
    def test_on_new_message(self):
        client = app.socketio.test_client(app.app)
        msg = {
            'user': {
                'username': 'fred', 
                'profilePic': None, 
                'bot': False
            },
            'msg': 'george is so beautiful',
            'imageLink': False, 
            'hyperLink': False
        }
        client.emit("new message", {
            "user_message": msg
        })
        response = client.get_received()

        self.assertEqual(len(response), 2)
        from_server = response[1]
        self.assertEqual(
            from_server["name"],
            "message received"
        )
        data = from_server["args"][0]
        self.assertEqual(
            data["message"],
            msg
        )
        
    def test_on_new_user(self):
        client = app.socketio.test_client(app.app)
        user = {'profileObj': {
            'googleId': 'bloop', 
            'imageUrl': 'bloop', 
            'email': 'bloop', 
            'name': 'Bloop Martin', 
            'givenName': 'Bloop', 
            'familyName': 'Martin'
            
        }}
        dummy_token = os.getenv('dummy_token')
        user_auth = [user, dummy_token]
        client.emit("user", {
            "user": user_auth
        })
        response = client.get_received()
        from_server = response[1]
        self.assertEqual(
            from_server["name"],
            'user received'
        )
        emitted_user = {
            'username': 'George Martin', 
            'profilePic': 'https://lh3.googleusercontent.com/a-/AOh14Ghmi7u_7oBx_LQH99JhW3jwwB_MzwpOyjNZLc0y3A=s96-c', 
            'bot': False
        }
        data = from_server["args"][0]
        self.assertEqual(
            data["user"],
            emitted_user
        )
      
    def test_emit_welcome_message(self):
        client = app.socketio.test_client(app.app)
        user = {'profileObj': {
            'googleId': 'bloop', 
            'imageUrl': 'bloop', 
            'email': 'bloop@gmail.com', 
            'name': 'Bloop Martin', 
            'givenName': 'Bloop', 
            'familyName': 'Martin'
            
        }}
        dummy_token = os.getenv('dummy_token')
        user_auth = [user, dummy_token]
        client.emit("user", {
            "user": user_auth
        })
        response = client.get_received()
        from_server = response[2]
        self.assertEqual(
            from_server["name"],
            'message received'
        )
        message = {'user': 
            {'username': 'Haha chat bot', 
            'profilePic': None, 
            'bot': True
            }, 
            'msg': "Big fella! How do you not know who I am? This is beyonddd me. To see my commands type '!! help'", 
            'imageLink': False, 
            'hyperLink': False
        }
        data = from_server["args"][0]
        self.assertEqual(
            data["message"],
            message
        )
    
    def test_emit_hyperlink(self):
        client = app.socketio.test_client(app.app)
        msg = {
            'user': {
                'username': 'fred', 
                'profilePic': None, 
                'bot': False
            },
            'msg': 'http://chat-man-chat-man.herokuapp.com/'
        }
        client.emit("new message", {
            "user_message": msg
        })
        response = client.get_received()

        self.assertEqual(len(response), 2)
        from_server = response[1]
        self.assertEqual(
            from_server["name"],
            "message received"
        )
        msg_hyper ={
            'user': {
                'username': 'fred', 
                'profilePic': None, 
                'bot': False
            },
            'msg': 'http://chat-man-chat-man.herokuapp.com/',
            'imageLink': False, 
            'hyperLink': True
        }
        data = from_server["args"][0]
        self.assertEqual(
            data["message"],
            msg_hyper
        )
    
    def test_emit_image_link(self):
        client = app.socketio.test_client(app.app)
        msg = {
            'user': {
                'username': 'fred', 
                'profilePic': None, 
                'bot': False
            },
            'msg': 'https://upload.wikimedia.org/wikipedia/commons/0/00/Ray-Lewis-2008-Steelers-regseason-game.jpg'
        }
        client.emit("new message", {
            "user_message": msg
        })
        response = client.get_received()

        self.assertEqual(len(response), 2)
        from_server = response[1]
        self.assertEqual(
            from_server["name"],
            "message received"
        )
        msg_img ={
            'user': {
                'username': 'fred', 
                'profilePic': None, 
                'bot': False
            },
            'msg': 'https://upload.wikimedia.org/wikipedia/commons/0/00/Ray-Lewis-2008-Steelers-regseason-game.jpg',
            'imageLink': True, 
            'hyperLink': False
        }
        data = from_server["args"][0]
        self.assertEqual(
            data["message"],
            msg_img
        )
    
    
    
            
if __name__ == '__main__':
    unittest.main()