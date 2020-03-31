{"changed":true,"filter":false,"title":"unit_tests.py","tooltip":"/tests/unit_tests.py","value":"import unittest\nfrom ChatBot import ChatBot\nimport os\nimport requests\nimport weather\nfrom fuzzywuzzy import fuzz\nimport json\n\nclass ChatBotResponseTest(unittest.TestCase):\n    def test_about_command(self):\n        chat = ChatBot(\"!! about\")\n        response = chat.bot_reply()\n        self.assertEqual(response, \"Big fella! How do you not know who I am? This is beyonddd me. To see my commands type '!! help'\")\n        \n    def test_dior_command(self):\n        chat = ChatBot(\"!! dior\")\n        response = chat.bot_reply()\n        self.assertEqual(response, [\"\"\"Said I'm never lackin', always pistol packing\n            With them automatics, we gon' send him to heaven\n            Wait, wait, wait, wait, aye, aye, woo (aw, s**t), huh (ha ha)\n            Oh you feelin' sturdy, huh? (you feelin' sturdy, man)\n            Shake some\n            Shake it huh, shake it huh, shake it huh\"\"\", \n            {'user_message':\n                {'user': \n                    {\n                    'username': 'Haha chat bot', \n                    'profilePic': None, \n                    'bot': True\n                    }, \n                'msg': \"https://i.ibb.co/Qn2gm1b/oie-812344-BW5-V1ug-F.jpg\"\n                }\n            }])\n    \n    def test_help_command(self):\n        chat = ChatBot(\"!! help\")\n        response = chat.bot_reply()\n        self.assertEqual(response, \"\"\"\n    \t    (!! about): gives you a description of who I am\n    \t    (!! help): gives you the list of all the commands\n    \t    (!! say)<something>: I will say anything you tell me to following that command\n    \t    (!! dior): I will send a picture of popsmoke and recite the first bar of \"Dior\" #RIPpopSmoke\n    \t    (!! me)<something>: I will say whatever you tell me to followed by \"yea thatss meee!\"\n    \t    (!! weather man weather man): Gives the current weather report in baltimore\n    \t    \"\"\") \n\n    def test_say_command(self):\n        chat = ChatBot(\"!! say George is sooooooooo COOL!\")\n        response = chat.bot_reply()\n        self.assertEqual(response, \" George is sooooooooo COOL!\")\n        \n    \n    def test_me_command(self):\n        chat = ChatBot(\"!! me freak man freak man\")\n        response = chat.bot_reply()\n        self.assertEqual(response, \" freak man freak man yea thatss meee!\")\n        \n    def test_weather_api_call(self):\n        key = os.getenv('weather_key')\n        url = \"http://api.openweathermap.org/data/2.5/weather?q=baltimore&appid=\"\n        w = weather.Weather()\n        weath = w.get_weather()\n        weather_response_status = requests.get(url + key).status_code\n        w_response_status = requests.get(w.url + w.key).status_code\n        self.assertEqual(weather_response_status, w_response_status)\n        self.assertEqual(weather_response_status, 200)\n        self.assertEqual(w.url + w.key, url + key)\n    \n    def test_weather_command(self):\n        chat = ChatBot(\"!! weather man weather man\")\n        w = weather.Weather()\n        weather_report = w.get_weather()\n        response = chat.bot_reply()\n        similarity = fuzz.token_sort_ratio(response, \"yea thass mee!\\n\" + weather_report)\n        print('\\nsimilarity:', similarity)\n        self.assertGreaterEqual(similarity, 75)\n    \n    def test_incorrect_command(self):\n        chat = ChatBot(\"!! bloop\")\n        response = chat.bot_reply()\n        self.assertEqual(response, \"Oh, this is outrageous! Your message contained '!!' You're either really excited or.. you want to use a command. To see the commands type in '!! help'\")\n        \n    def test_create_message(self):\n        chat = ChatBot(\"\")\n        response = chat.create_message(\"hi there\")\n        self.assertEqual(response, {'user': \n                    {\n                    'username': 'Haha chat bot', \n                    'profilePic': None, \n                    'bot': True\n                    }, \n                    'msg': \"hi there\"\n                })\n    def test_instantiation(self):\n        chat = ChatBot(\"!! bloop\")\n        self.assertEqual(\"!! bloop\", chat.user_message)\n    \n    \n        \n\nif __name__ == '__main__':\n    unittest.main()","undoManager":{"mark":4,"position":4,"stack":[[{"start":{"row":64,"column":68},"end":{"row":65,"column":0},"action":"insert","lines":["",""],"id":507},{"start":{"row":65,"column":0},"end":{"row":65,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":65,"column":8},"end":{"row":65,"column":68},"action":"insert","lines":["self.assertEqual(weather_response_status, w_response_status)"],"id":508}],[{"start":{"row":65,"column":50},"end":{"row":65,"column":67},"action":"remove","lines":["w_response_status"],"id":509},{"start":{"row":65,"column":50},"end":{"row":65,"column":51},"action":"insert","lines":[","]}],[{"start":{"row":65,"column":50},"end":{"row":65,"column":51},"action":"remove","lines":[","],"id":510}],[{"start":{"row":65,"column":50},"end":{"row":65,"column":51},"action":"insert","lines":["2"],"id":511},{"start":{"row":65,"column":51},"end":{"row":65,"column":52},"action":"insert","lines":["0"]},{"start":{"row":65,"column":52},"end":{"row":65,"column":53},"action":"insert","lines":["0"]}],[{"start":{"row":58,"column":14},"end":{"row":58,"column":38},"action":"remove","lines":["os.getenv('weather_key')"],"id":512},{"start":{"row":58,"column":14},"end":{"row":58,"column":48},"action":"insert","lines":["\"d1c4e80155c2f64260055fe8b74b519b\""]}]]},"ace":{"folds":[],"scrolltop":568.5,"scrollleft":0,"selection":{"start":{"row":57,"column":36},"end":{"row":57,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":34,"state":"start","mode":"ace/mode/python"}},"timestamp":1584563377244}