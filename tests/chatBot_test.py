import unittest
import ChatBot

class ChatBotResponseTest(unittest.TestCase):
    def test_about_command(self):
        response = ChatBot.bot_reply("!! about")
        self.assertEqual(response, "Big fella! How do you not know who I am? This is beyonddd me. To see my commands type '!! help'")
        
    def test_add_command(self):
        response = None
        self.assertEqual(''' put something here''', "")

if __name__ == '__main__':
    unittest.main()