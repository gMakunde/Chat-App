import requests
import os

class Weather:
    def __init__(self):
        self.key = os.getenv('weather_key')
        self.url = "http://api.openweathermap.org/data/2.5/weather?q=baltimore&appid="
        
    def get_weather(self):
        weather = requests.get(self.url + self.key).json()
        temp = round((weather["main"]["temp"] - 273.15) * 9/5 + 32 )
        temp_feels_like = round((weather["main"]["feels_like"] - 273.15) * 9/5 + 32 )
        temp_high = round((weather["main"]["temp_max"] - 273.15) * 9/5 + 32 )
        temp_low = round((weather["main"]["temp_min"] - 273.15) * 9/5 + 32 )
        condition = weather["weather"][0]["description"]
        humidity = weather["main"]["humidity"] 
        wind_speed = weather["wind"]["speed"] 
        city = weather["name"]
        
        weather_report = "There is currently " + condition + " in " + city + ". The high for today is " + str(temp_high) + "°F and the low is " + str(temp_low) +"°F. The current tempreture is " + str(temp) + "°F but it feels like " + str(temp_feels_like) + "°F. The humidity is " + str(humidity) + "% and the wind speed is going at " + str(wind_speed) + "m/s."
        
        return weather_report