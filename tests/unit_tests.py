import unittest
from ChatBot import ChatBot

class ChatBotResponseTest(unittest.TestCase):
    def test_about_command(self):
        chat = ChatBot("!! about")
        response = chat.bot_reply()
        self.assertEqual(response, "Big fella! How do you not know who I am? This is beyonddd me. To see my commands type '!! help'")
        
    def test_dior_command(self):
        chat = ChatBot("!! dior")
        response = chat.bot_reply()
        self.assertEqual(response, ["""Said I'm never lackin', always pistol packing
            With them automatics, we gon' send him to heaven
            Wait, wait, wait, wait, aye, aye, woo (aw, s**t), huh (ha ha)
            Oh you feelin' sturdy, huh? (you feelin' sturdy, man)
            Shake some
            Shake it huh, shake it huh, shake it huh""", 
            {'user_message':
                {'user': 
                    {
                    'username': 'Haha chat bot', 
                    'profilePic': None, 
                    'bot': True
                    }, 
                'msg': "https://i.ibb.co/Qn2gm1b/oie-812344-BW5-V1ug-F.jpg"
                }
            }])

if __name__ == '__main__':
    unittest.main()