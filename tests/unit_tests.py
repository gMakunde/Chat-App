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
    
    def test_help_command(self):
        chat = ChatBot("!! help")
        response = chat.bot_reply()
        self.assertEqual(response, """
    	    (!! about): gives you a description of who I am
    	    (!! help): gives you the list of all the commands
    	    (!! say)<something>: I will say anything you tell me to following that command
    	    (!! dior): I will send a picture of popsmoke and recite the first bar of "Dior" #RIPpopSmoke
    	    (!! me)<something>: I will say whatever you tell me to followed by "yea thatss meee!"
    	    (!! weather man weather man): Gives the current weather report in baltimore
    	    """) 

    def test_say_command(self):
        chat = ChatBot("!! say George is sooooooooo COOL!")
        response = chat.bot_reply()
        self.assertEqual(response, " George is sooooooooo COOL!")
        
    
    def test_me_command(self):
        chat = ChatBot("!! me freak man freak man")
        response = chat.bot_reply()
        self.assertEqual(response, " freak man freak man yea thatss meee!") 

if __name__ == '__main__':
    unittest.main()