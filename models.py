# models.py
import flask_sqlalchemy, app


# app.app = app module app variable
app.app.config['SQLALCHEMY_DATABASE_URI'] =
 'postgresql://purple:purpleisawesome@localhost/postgres'
db = flask_sqlalchemy.SQLAlchemy(app.app)

class Usps(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # key
    address = db.Column(db.String(120))
    
    def __init__(self, a):
        self.address = a
        
    def __repr__(self):
        return '<Usps address: %s>' % self.address 