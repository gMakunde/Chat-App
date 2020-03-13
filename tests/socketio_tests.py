import unittest, app, os
import models

class SocketIOTestCase(unittest.TestCase):
    def test_server_relays_message(self):
        client = app.socketio.test_client(app.app)
        response = client.get_received()
        
        self.assertEqual(len(response), 1)
        from_server = response[0]
        self.assertEqual(
        from_server["name"], 
        "message_list received"
        )
        data = from_server["args"][0]
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
        self.assertEqual(data["messages"], message_list)

            
if __name__ == '__main__':
    unittest.main()