import unittest
from ChatBot import ChatBot
import os
import requests

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
        
    def test_weather_command(self):
        key = os.getenv('weather_key')
        url = "http://api.openweathermap.org/data/2.5/weather?q=baltimore&appid="
        chat = ChatBot("!! weather man weather man")
        weather = requests.get(url + key).json()
        temp = round((weather["main"]["temp"] - 273.15) * 9/5 + 32 )
        temp_feels_like = round((weather["main"]["feels_like"] - 273.15) * 9/5 + 32 )
        temp_high = round((weather["main"]["temp_max"] - 273.15) * 9/5 + 32 )
        temp_low = round((weather["main"]["temp_min"] - 273.15) * 9/5 + 32 )
        condition = weather["weather"][0]["description"]
        humidity = weather["main"]["humidity"] 
        wind_speed = weather["wind"]["speed"] 
        city = weather["name"]
        
        weather_report = "There is currently " + condition + " in " + city + ". The high for today is " + str(temp_high) + "°F and the low is " + str(temp_low) +"°F. The current tempreture is " + str(temp) + "°F but it feels like " + str(temp_feels_like) + "°F. The humidity is " + str(humidity) + "% and the wind speed is going at " + str(wind_speed) + "m/s."
        response = chat.bot_reply()
        self.assertEqual(response, "yea thass mee!\n" + weather_report) 
    
    def test_incorrect_command(self):
        chat = ChatBot("!! bloop")
        response = chat.bot_reply()
        self.assertEqual(response, "Oh, this is outrageous! Your message contained '!!' You're either really excited or.. you want to use a command. To see the commands type in '!! help'")
        
    def test_create_message(self):
        chat = ChatBot("")
        response = chat.create_message("hi there")
        self.assertEqual(response, {'user': 
                    {
                    'username': 'Haha chat bot', 
                    'profilePic': None, 
                    'bot': True
                    }, 
                    'msg': "hi there"
                })
        

if __name__ == '__main__':
    unittest.main()