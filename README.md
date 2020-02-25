## What is the theme you’ll be using for project 2? 
The theme that I chose for this project is Haha Davis sayings.

## How did you incorporate your theme within your project? 
The title is "chat man chat man yea thats me" and theres a command to get the robot to say that as well. Also the robot greets people by saying "big fella!"

## What are at least 5 issues you encountered with your project? How did you fix them? 
1. With every message a new user would appear in the users panel
  solution: decided to create a users object and emit it seperately. then only added to the list if the username wasnt unique
  
2. Wouldn't Deploy to heroku
  solution: added requirements procfile and then deleted and recreated the heroku app
  
3. Bot would call its own functions in an infinite loop
  solution: used the bot element from the user object to make sure only users can call bot commands

4. The bot would raise an error for incorrect commands even with correct commands
  solution: created a boolean variable that turns true if any commands are used before the raise error if statement.
 
5. CSS was not displaying correctly
  solution: I had to look through the bootstrap css url and the local one to change and make the page look how i desired.

## What are known problems, if any, with your project?
The way i mapped data in one of the files should each have a unique key

## What would you do to improve your project in the future?
make it persist and use sessions for users.

### Chatbox Walkthough GIF

<img src="http://g.recordit.co/PQ6HBQTgZt.gif"><br>
