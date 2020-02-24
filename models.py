# models.py
import flask_sqlalchemy, app


# app.app = app module app variable
app.app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://<gMakunde>:<San20Faith>@localhost/postgres'
db = flask_sqlalchemy.SQLAlchemy(app.app)

class ChatHistory(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # key
    user_name = db.Column(db.String(4000))
    user_profile_pic = db.Column(db.String(4000))
    bot = db.Column(db.Boolean)
    message = db.Column(db.String(4000))
    attachment = db.Column(db.String(4000))
    
    def __init__(self, a):
        self.address = a
        
    def __repr__(self):
        return '<Usps address: %s>' % self.address 