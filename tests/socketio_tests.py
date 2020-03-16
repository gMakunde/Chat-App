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
            'googleId': '115583003140937920793', 
            'imageUrl': 'https://lh3.googleusercontent.com/a-/AOh14Ghmi7u_7oBx_LQH99JhW3jwwB_MzwpOyjNZLc0y3A=s96-c', 
            'email': 'georgeg10live@gmail.com', 
            'name': 'George Martin', 
            'givenName': 'George', 
            'familyName': 'Martin'
            
        }}
        dummy_token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6ImE1NDFkNmVmMDIyZDc3YTIzMThmN2RkNjU3ZjI3NzkzMjAzYmVkNGEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJhY2NvdW50cy5nb29nbGUuY29tIiwiYXpwIjoiMjE0MDA4MTIyMjIwLTBtYTVjMXJlYW5wczFmcXZxZHQ4YmRyYmZvcHM5a242LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwiYXVkIjoiMjE0MDA4MTIyMjIwLTBtYTVjMXJlYW5wczFmcXZxZHQ4YmRyYmZvcHM5a242LmFwcHMuZ29vZ2xldXNlcmNvbnRlbnQuY29tIiwic3ViIjoiMTE1NTgzMDAzMTQwOTM3OTIwNzkzIiwiZW1haWwiOiJnZW9yZ2VnMTBsaXZlQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoiR2tMZzl4YUcyMXdEZXM1Q1lScEg0QSIsIm5hbWUiOiJHZW9yZ2UgTWFydGluIiwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hLS9BT2gxNEdobWk3dV83b0J4X0xRSDk5SmhXM2p3d0JfTXp3cE95ak5aTGMweTNBPXM5Ni1jIiwiZ2l2ZW5fbmFtZSI6Ikdlb3JnZSIsImZhbWlseV9uYW1lIjoiTWFydGluIiwibG9jYWxlIjoiZW4iLCJpYXQiOjE1ODQzOTcyMDAsImV4cCI6MTU4NDQwMDgwMCwianRpIjoiN2FlMjlkOWE3MTM4MjYyZmRiYjVjOTU0OWIxN2ZjMTc5MjdlMjhlYiJ9.YYIxMUMQTl2z1hUrK79FSvVChWz3WhEQBZGUEtQWLG-0lK45mzhmp8jnuVJ4LlIr9QyZpmACNIryIWzTuvcO3CStsYyS6Ad6IR0G6C4sgkXekOxXK_vOKv_cbZbanjIqzvNNm4P0gpSoQAvBMd9ID6uoQrvROQD9fn3D1b1PFnG3ybEvmF7zVNPTcBCXE9tMVUjVKt9EkwVvaCKhxelgQr6v_xc-QeUn8zF8BLtwI4jGmxqHDl19EffCHfeL9k0h4EsCn7lT10S4LPnKRfUSUtXiJDvM7CGQStCKKV2FrVZq-0uXqCOjLr7xe5KgKkndhViPlvyBys_hcgEc7x89mg'
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
      
    def test_chatbot_welcome_message(self):
        client = app.socketio.test_client(app.app)
        user = {'profileObj': {
            'googleId': '115583003140937920793', 
            'imageUrl': 'https://lh3.googleusercontent.com/a-/AOh14Ghmi7u_7oBx_LQH99JhW3jwwB_MzwpOyjNZLc0y3A=s96-c', 
            'email': 'georgeg10live@gmail.com', 
            'name': 'George Martin', 
            'givenName': 'George', 
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
    
    
    
            
if __name__ == '__main__':
    unittest.main()