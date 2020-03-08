import weather

class ChatBot:
    def __init__(self, user_message):
        self.user_message = user_message
    
    def bot_reply(self):
        if '!! about' in self.user_message:
    	    return "Big fella! How do you not know who I am? This is beyonddd me. To see my commands type '!! help'"
    	    
        if '!! help' in self.user_message:
    	    return """
    	    (!! about): gives you a description of who I am
    	    (!! help): gives you the list of all the commands
    	    (!! say)<something>: I will say anything you tell me to following that command
    	    (!! dior): I will send a picture of popsmoke and recite the first bar of "Dior" #RIPpopSmoke
    	    (!! me)<something>: I will say whatever you tell me to followed by "yea thatss meee!"
    	    (!! weather man weather man): Gives the current weather report in baltimore
    	    """
        if '!! dior' in self.user_message:
    	    return ["""Said I'm never lackin', always pistol packing
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
            }]
            
        if '!! say' in self.user_message:
    	    replyIndex = 6 + self.user_message.find('!! say')
    	    return self.user_message[replyIndex:]
    	    
        if '!! me' in self.user_message:
    	    replyIndex = 5 + self.user_message.find('!! me')
    	    return self.user_message[replyIndex:] + " yea thatss meee!"
    	    
        if '!! weather man weather man' in self.user_message:
    	    w = weather.Weather()
    	    return "yea thass mee!\n" + w.get_weather()

        if '!!' in self.user_message:
    	    return "Oh, this is outrageous! Your message contained '!!' You're either really excited or.. you want to use a command. To see the commands type in '!! help'";
    	    
    def create_message(self, msg):
        message = {'user': 
                    {
                    'username': 'Haha chat bot', 
                    'profilePic': None, 
                    'bot': True
                    }, 
                    'msg': msg
                }
        return message
