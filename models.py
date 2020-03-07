import flask_sqlalchemy, app
import os

# app.app = app module app variable
app.app.config['SQLALCHEMY_DATABASE_URI'] = os.getenv('database_url')
db = flask_sqlalchemy.SQLAlchemy(app.app)

class Message(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # key
    user_name = db.Column(db.String(4000))
    user_profile_pic = db.Column(db.String(4000))
    bot = db.Column(db.Boolean)
    message = db.Column(db.String(4000))
    imageLink = db.Column(db.Boolean)
    hyperLink = db.Column(db.Boolean)
    
    def __init__(self, u, pp, b, m, il, hl):
        self.user_name = u
        self.user_profile_pic = pp
        self.bot = b
        self.message = m
        self.imageLink = il
        self.hyperLink= hl
        
    def __repr__(self):
        return "<MessageElement:'User: %s , Profile pic: %s , Bot: %s, Text: %s, Image link: %s, Hyper link: %s>" % (self.user_name, self.user_profile_pic, self.bot, self.message, self.imageLink, self.hyperLink) 