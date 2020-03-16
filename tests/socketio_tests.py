import unittest
import app
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
        self.assertEqual(data["messages"], "")
            
if __name__ == '__main__':
    unittest.main()