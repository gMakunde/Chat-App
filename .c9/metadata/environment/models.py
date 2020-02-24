{"filter":false,"title":"models.py","tooltip":"/models.py","undoManager":{"mark":44,"position":44,"stack":[[{"start":{"row":0,"column":0},"end":{"row":17,"column":51},"action":"insert","lines":["# models.py","import flask_sqlalchemy, app","","","# app.app = app module app variable","app.app.config['SQLALCHEMY_DATABASE_URI'] ="," 'postgresql://purple:purpleisawesome@localhost/postgres'","db = flask_sqlalchemy.SQLAlchemy(app.app)","","class Usps(db.Model):","    id = db.Column(db.Integer, primary_key=True)  # key","    address = db.Column(db.String(120))","    ","    def __init__(self, a):","        self.address = a","        ","    def __repr__(self):","        return '<Usps address: %s>' % self.address "],"id":1}],[{"start":{"row":5,"column":0},"end":{"row":6,"column":57},"action":"remove","lines":["app.app.config['SQLALCHEMY_DATABASE_URI'] ="," 'postgresql://purple:purpleisawesome@localhost/postgres'"],"id":2},{"start":{"row":5,"column":0},"end":{"row":5,"column":97},"action":"insert","lines":["app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://<gMakunde>:<San20Faith>@localhost/postgres'"]}],[{"start":{"row":5,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["a"],"id":3},{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["o"]}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"remove","lines":["o"],"id":4}],[{"start":{"row":5,"column":1},"end":{"row":5,"column":2},"action":"insert","lines":["p"],"id":5},{"start":{"row":5,"column":2},"end":{"row":5,"column":3},"action":"insert","lines":["p"]},{"start":{"row":5,"column":3},"end":{"row":5,"column":4},"action":"insert","lines":["."]}],[{"start":{"row":5,"column":44},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":6}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"insert","lines":["    "],"id":7}],[{"start":{"row":6,"column":0},"end":{"row":6,"column":4},"action":"remove","lines":["    "],"id":8},{"start":{"row":5,"column":44},"end":{"row":6,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":8,"column":6},"end":{"row":8,"column":10},"action":"remove","lines":["Usps"],"id":9},{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["C"]},{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":["h"]},{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["a"]},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["t"]}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":11},"action":"insert","lines":["H"],"id":10},{"start":{"row":8,"column":11},"end":{"row":8,"column":12},"action":"insert","lines":["i"]},{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":["s"]},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["t"]},{"start":{"row":8,"column":14},"end":{"row":8,"column":15},"action":"insert","lines":["o"]},{"start":{"row":8,"column":15},"end":{"row":8,"column":16},"action":"insert","lines":["r"]},{"start":{"row":8,"column":16},"end":{"row":8,"column":17},"action":"insert","lines":["y"]}],[{"start":{"row":10,"column":4},"end":{"row":10,"column":11},"action":"remove","lines":["address"],"id":11},{"start":{"row":10,"column":4},"end":{"row":10,"column":5},"action":"insert","lines":["u"]},{"start":{"row":10,"column":5},"end":{"row":10,"column":6},"action":"insert","lines":["s"]}],[{"start":{"row":10,"column":6},"end":{"row":10,"column":7},"action":"insert","lines":["e"],"id":12},{"start":{"row":10,"column":7},"end":{"row":10,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":10,"column":8},"end":{"row":10,"column":9},"action":"insert","lines":["_"],"id":13},{"start":{"row":10,"column":9},"end":{"row":10,"column":10},"action":"insert","lines":["n"]},{"start":{"row":10,"column":10},"end":{"row":10,"column":11},"action":"insert","lines":["a"]},{"start":{"row":10,"column":11},"end":{"row":10,"column":12},"action":"insert","lines":["m"]},{"start":{"row":10,"column":12},"end":{"row":10,"column":13},"action":"insert","lines":["e"]}],[{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"remove","lines":["2"],"id":14},{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"remove","lines":["1"]}],[{"start":{"row":10,"column":36},"end":{"row":10,"column":37},"action":"insert","lines":["4"],"id":15},{"start":{"row":10,"column":37},"end":{"row":10,"column":38},"action":"insert","lines":["0"]},{"start":{"row":10,"column":38},"end":{"row":10,"column":39},"action":"insert","lines":["0"]}],[{"start":{"row":10,"column":42},"end":{"row":11,"column":0},"action":"insert","lines":["",""],"id":16},{"start":{"row":11,"column":0},"end":{"row":11,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":11,"column":4},"end":{"row":11,"column":5},"action":"insert","lines":["u"],"id":17},{"start":{"row":11,"column":5},"end":{"row":11,"column":6},"action":"insert","lines":["s"]},{"start":{"row":11,"column":6},"end":{"row":11,"column":7},"action":"insert","lines":["e"]},{"start":{"row":11,"column":7},"end":{"row":11,"column":8},"action":"insert","lines":["r"]}],[{"start":{"row":11,"column":8},"end":{"row":11,"column":9},"action":"insert","lines":["_"],"id":18},{"start":{"row":11,"column":9},"end":{"row":11,"column":10},"action":"insert","lines":["p"]},{"start":{"row":11,"column":10},"end":{"row":11,"column":11},"action":"insert","lines":["r"]},{"start":{"row":11,"column":11},"end":{"row":11,"column":12},"action":"insert","lines":["o"]},{"start":{"row":11,"column":12},"end":{"row":11,"column":13},"action":"insert","lines":["f"]},{"start":{"row":11,"column":13},"end":{"row":11,"column":14},"action":"insert","lines":["i"]}],[{"start":{"row":11,"column":14},"end":{"row":11,"column":15},"action":"insert","lines":["l"],"id":19},{"start":{"row":11,"column":15},"end":{"row":11,"column":16},"action":"insert","lines":["e"]}],[{"start":{"row":11,"column":16},"end":{"row":11,"column":17},"action":"insert","lines":["_"],"id":20},{"start":{"row":11,"column":17},"end":{"row":11,"column":18},"action":"insert","lines":["p"]},{"start":{"row":11,"column":18},"end":{"row":11,"column":19},"action":"insert","lines":["i"]},{"start":{"row":11,"column":19},"end":{"row":11,"column":20},"action":"insert","lines":["c"]}],[{"start":{"row":11,"column":20},"end":{"row":11,"column":21},"action":"insert","lines":[" "],"id":21},{"start":{"row":11,"column":21},"end":{"row":11,"column":22},"action":"insert","lines":["="]}],[{"start":{"row":11,"column":22},"end":{"row":11,"column":23},"action":"insert","lines":[" "],"id":22}],[{"start":{"row":11,"column":23},"end":{"row":11,"column":49},"action":"insert","lines":["db.Column(db.String(4000))"],"id":23}],[{"start":{"row":11,"column":49},"end":{"row":12,"column":0},"action":"insert","lines":["",""],"id":24},{"start":{"row":12,"column":0},"end":{"row":12,"column":4},"action":"insert","lines":["    "]},{"start":{"row":12,"column":4},"end":{"row":12,"column":5},"action":"insert","lines":["b"]}],[{"start":{"row":12,"column":5},"end":{"row":12,"column":6},"action":"insert","lines":["o"],"id":25},{"start":{"row":12,"column":6},"end":{"row":12,"column":7},"action":"insert","lines":["t"]}],[{"start":{"row":12,"column":7},"end":{"row":12,"column":8},"action":"insert","lines":[" "],"id":26}],[{"start":{"row":12,"column":8},"end":{"row":12,"column":9},"action":"insert","lines":["="],"id":27}],[{"start":{"row":12,"column":9},"end":{"row":12,"column":10},"action":"insert","lines":[" "],"id":28}],[{"start":{"row":12,"column":10},"end":{"row":12,"column":36},"action":"insert","lines":["db.Column(db.String(4000))"],"id":29}],[{"start":{"row":12,"column":20},"end":{"row":12,"column":35},"action":"remove","lines":["db.String(4000)"],"id":30},{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["B"]},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["o"]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["o"]},{"start":{"row":12,"column":23},"end":{"row":12,"column":24},"action":"insert","lines":["l"]},{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["e"]},{"start":{"row":12,"column":25},"end":{"row":12,"column":26},"action":"insert","lines":["a"]},{"start":{"row":12,"column":26},"end":{"row":12,"column":27},"action":"insert","lines":["n"]}],[{"start":{"row":12,"column":20},"end":{"row":12,"column":21},"action":"insert","lines":["d"],"id":31},{"start":{"row":12,"column":21},"end":{"row":12,"column":22},"action":"insert","lines":["b"]},{"start":{"row":12,"column":22},"end":{"row":12,"column":23},"action":"insert","lines":["."]}],[{"start":{"row":12,"column":31},"end":{"row":13,"column":0},"action":"insert","lines":["",""],"id":32},{"start":{"row":13,"column":0},"end":{"row":13,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":13,"column":4},"end":{"row":13,"column":5},"action":"insert","lines":["m"],"id":33},{"start":{"row":13,"column":5},"end":{"row":13,"column":6},"action":"insert","lines":["e"]},{"start":{"row":13,"column":6},"end":{"row":13,"column":7},"action":"insert","lines":["s"]},{"start":{"row":13,"column":7},"end":{"row":13,"column":8},"action":"insert","lines":["s"]}],[{"start":{"row":13,"column":8},"end":{"row":13,"column":9},"action":"insert","lines":["a"],"id":34},{"start":{"row":13,"column":9},"end":{"row":13,"column":10},"action":"insert","lines":["g"]},{"start":{"row":13,"column":10},"end":{"row":13,"column":11},"action":"insert","lines":["e"]}],[{"start":{"row":13,"column":11},"end":{"row":13,"column":12},"action":"insert","lines":[" "],"id":35},{"start":{"row":13,"column":12},"end":{"row":13,"column":13},"action":"insert","lines":["="]}],[{"start":{"row":13,"column":13},"end":{"row":13,"column":14},"action":"insert","lines":[" "],"id":36}],[{"start":{"row":13,"column":14},"end":{"row":13,"column":40},"action":"insert","lines":["db.Column(db.String(4000))"],"id":37}],[{"start":{"row":13,"column":40},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":38},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["t"],"id":39},{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"insert","lines":["h"]},{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["i"]},{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["s"]}],[{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"remove","lines":["s"],"id":40},{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"remove","lines":["i"]},{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"remove","lines":["h"]},{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"remove","lines":["t"]}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":5},"action":"insert","lines":["a"],"id":41},{"start":{"row":14,"column":5},"end":{"row":14,"column":6},"action":"insert","lines":["t"]},{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["t"]},{"start":{"row":14,"column":7},"end":{"row":14,"column":8},"action":"insert","lines":["a"]}],[{"start":{"row":14,"column":4},"end":{"row":14,"column":8},"action":"remove","lines":["atta"],"id":42},{"start":{"row":14,"column":4},"end":{"row":14,"column":14},"action":"insert","lines":["attachment"]}],[{"start":{"row":14,"column":14},"end":{"row":14,"column":15},"action":"insert","lines":[" "],"id":43},{"start":{"row":14,"column":15},"end":{"row":14,"column":16},"action":"insert","lines":["="]}],[{"start":{"row":14,"column":16},"end":{"row":14,"column":17},"action":"insert","lines":[" "],"id":44}],[{"start":{"row":14,"column":17},"end":{"row":14,"column":43},"action":"insert","lines":["db.Column(db.String(4000))"],"id":45}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":1,"column":7},"end":{"row":1,"column":23},"isBackwards":true},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1582532727652,"hash":"201776f6b4161480c3151a27874a6355c9aff8d9"}