import weather

class ChatBot:
    def __init__(self, user_message):
        self.user_message = user_message
    
    def bot_reply(self):
        if '!! about' in self.user_message:
    	    return "Hey there big fella! My name is Jenny Wakeman, I am the teenage chatbot here to assist you. To see my commands type '!! help'"
    	    
        if '!! help' in self.user_message:
    	    return """
    	    (!! about): gives you a description of who I am\n
    	    (!! help): gives you the list of all the commands\n
    	    (!! say)<something>: I will say anything you tell me to following that command\n
    	    (!! dior): I will recite the first bar of pop smokes song dior #RIPpopSmoke\n
    	    (!! me)<something>: I will say whatever you tell me to followed by "yea thatss meee!"\n
    	    (!! weather man weather man): Gives the current weather report in baltimore\n
    	    """
        if '!! dior' in self.user_message:
    	    return """Said I'm never lackin', always pistol packing
            With them automatics, we gon' send him to heaven
            Wait, wait, wait, wait, aye, aye, woo (aw, s**t), huh (ha ha)
            Oh you feelin' sturdy, huh? (you feelin' sturdy, man)
            Shake some
            Shake it huh, shake it huh, shake it huh"""
            
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
    	    return "I noticed your message contained '!!' You're either really excited or.. you want to use a command. To see the commands type in '!! help'";
