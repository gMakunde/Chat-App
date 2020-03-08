## What is the theme you’ll be using for project 2? 
The theme that I chose for this project is Haha Davis sayings.

## How did you incorporate your theme within your project? 
the bot now is named "haha chatbot" with haha davis's picture. All his commands contains new dialouge with haha davis quotes.

## What are at least 4 issues you encountered with your projectsince c? How did you fix them? 
1. The database would not work with heroku<br />
  solution: used the correct env key that corresponds to heroku<br />
  
2. google sign in did not work<br />
  solution: looked back at the slides and documentation and noticed slight errors to fix<br />
  
3. how to difrreentiaite between a hyperlink and an image adress<br />
  solution: if it was a valid link I searched for image file type names in the strings<br />

4. google sign in doesnt change after user logs in<br />
  solution: set the state to be a disabled button that says logged in<br />
5. I wanted to send a picture from the chatbot anytime someone used the dior command<br />
  solution: I retured a tuple and used recursion to send each message separetly

## What are known problems, if any, with your project?
1.The way i mapped data in one of the files should each have a unique key<br />
2. when mutiple users log in it sometimes sends messages witht he wrong user attached<br />
3. if there is no jpg, png, googleusercontent or gif in the link and it is an image it will render as a link<br />
4. if a user is not logged in and tries to type, the chatbox will disappear<br />
5. if message is shorter than the name then the username the bubble displays awkwardly

## What would you do to improve your project in the future?
use sessions for users and fix the bugs listed above.

### Chatbox Walkthough GIF

<img src="http://g.recordit.co/PQ6HBQTgZt.gif"><br>






## What is the theme you’ll be using for project 2? 
The theme that I chose for this project is Haha Davis sayings.

## How did you incorporate your theme within your project? 
The title is "chat man chat man yea thats me" and theres a command to get the robot to say that as well. Also the robot greets people by saying "big fella!"

## What are at least 5 issues you encountered with your project? How did you fix them? 
1. With every message a new user would appear in the users panel<br />
  solution: decided to create a users object and emit it seperately. then only added to the list if the username wasnt unique
  
2. Wouldn't Deploy to heroku<br />
  solution: added requirements procfile and then deleted and recreated the heroku app
  
3. Bot would call its own functions in an infinite loop<br />
  solution: used the bot element from the user object to make sure only users can call bot commands

4. The bot would raise an error for incorrect commands even with correct commands<br />
  solution: created a boolean variable that turns true if any commands are used before the raise error if statement.
 
5. CSS was not displaying correctly<br />
  solution: I had to look through the bootstrap css url and the local one to change and make the page look how i desired.

## What are known problems, if any, with your project?
The way i mapped data in one of the files should each have a unique key

## What would you do to improve your project in the future?
make it persist and use sessions for users.

### Chatbox Walkthough GIF

<img src="http://g.recordit.co/wEphrcRIPK.gif"><br>
