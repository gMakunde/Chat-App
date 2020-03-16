import unittest
import app
import models

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
    
    def test_new_message(self):
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
            
if __name__ == '__main__':
    unittest.main()