{"filter":false,"title":"MessageSent.jsx","tooltip":"/scripts/MessageSent.jsx","undoManager":{"mark":85,"position":85,"stack":[[{"start":{"row":69,"column":15},"end":{"row":72,"column":95},"action":"remove","lines":[" <div className=\"input-group-append\">","                \t<span className=\"input-group-text attach_btn\"><i className=\"fas fa-paperclip\"></i></span>","                </div>","                <textarea name=\"\" value = {this.state.user} className=\"form-control type_msg_sm"],"id":3}],[{"start":{"row":68,"column":71},"end":{"row":69,"column":97},"action":"remove","lines":["","               \" onChange = {this.handleChangeUser} placeholder=\"Enter your username\"></textarea>"],"id":4}],[{"start":{"row":68,"column":17},"end":{"row":68,"column":41},"action":"remove","lines":["className=\"input-group\" "],"id":5}],[{"start":{"row":68,"column":46},"end":{"row":68,"column":47},"action":"insert","lines":["/"],"id":6}],[{"start":{"row":69,"column":0},"end":{"row":69,"column":18},"action":"remove","lines":["            </div>"],"id":7},{"start":{"row":68,"column":48},"end":{"row":69,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":69,"column":1},"end":{"row":69,"column":2},"action":"remove","lines":[" "],"id":8},{"start":{"row":69,"column":0},"end":{"row":69,"column":1},"action":"remove","lines":[" "]},{"start":{"row":68,"column":48},"end":{"row":69,"column":10},"action":"remove","lines":["","          "]}],[{"start":{"row":67,"column":8},"end":{"row":67,"column":12},"action":"insert","lines":["    "],"id":9}],[{"start":{"row":39,"column":26},"end":{"row":40,"column":39},"action":"remove","lines":["","    \t    user: this.state.user.username"],"id":10}],[{"start":{"row":39,"column":25},"end":{"row":39,"column":26},"action":"remove","lines":[","],"id":11}],[{"start":{"row":25,"column":5},"end":{"row":26,"column":28},"action":"remove","lines":["let user = new User(this.state.user);","    \tthis.state.user = user;"],"id":12},{"start":{"row":25,"column":5},"end":{"row":39,"column":8},"action":"insert","lines":["Socket.on('user received', (data) =>{","    \t\tconst duplicate = this.state.users.map( user => {","    \t\t\treturn user.username == data['user'].username;","    \t\t});","    \t\t","    \t\tif(!duplicate.includes(true)){","    \t\t\tthis.state.users.push(data['user'])","\t    \t\tthis.setState({","\t    \t\t\t'users': this.state.users","\t    \t\t});","\t    \t\tSocket.emit('users list', {","\t\t    \t\t'users_list': this.state.users","\t\t    \t});","    \t\t}","    \t});"]}],[{"start":{"row":28,"column":9},"end":{"row":38,"column":7},"action":"remove","lines":["","    \t\t","    \t\tif(!duplicate.includes(true)){","    \t\t\tthis.state.users.push(data['user'])","\t    \t\tthis.setState({","\t    \t\t\t'users': this.state.users","\t    \t\t});","\t    \t\tSocket.emit('users list', {","\t\t    \t\t'users_list': this.state.users","\t\t    \t});","    \t\t}"],"id":13}],[{"start":{"row":26,"column":6},"end":{"row":28,"column":9},"action":"remove","lines":["const duplicate = this.state.users.map( user => {","    \t\t\treturn user.username == data['user'].username;","    \t\t});"],"id":14}],[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["h"],"id":15},{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":["i"]}],[{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"remove","lines":["i"],"id":16},{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"remove","lines":["h"]}],[{"start":{"row":26,"column":6},"end":{"row":26,"column":7},"action":"insert","lines":["t"],"id":17},{"start":{"row":26,"column":7},"end":{"row":26,"column":8},"action":"insert","lines":["h"]},{"start":{"row":26,"column":8},"end":{"row":26,"column":9},"action":"insert","lines":["i"]},{"start":{"row":26,"column":9},"end":{"row":26,"column":10},"action":"insert","lines":["s"]},{"start":{"row":26,"column":10},"end":{"row":26,"column":11},"action":"insert","lines":["."]},{"start":{"row":26,"column":11},"end":{"row":26,"column":12},"action":"insert","lines":["s"]},{"start":{"row":26,"column":12},"end":{"row":26,"column":13},"action":"insert","lines":["t"]},{"start":{"row":26,"column":13},"end":{"row":26,"column":14},"action":"insert","lines":["a"]}],[{"start":{"row":26,"column":14},"end":{"row":26,"column":15},"action":"insert","lines":["t"],"id":18},{"start":{"row":26,"column":15},"end":{"row":26,"column":16},"action":"insert","lines":["e"]},{"start":{"row":26,"column":16},"end":{"row":26,"column":17},"action":"insert","lines":["."]},{"start":{"row":26,"column":17},"end":{"row":26,"column":18},"action":"insert","lines":["u"]},{"start":{"row":26,"column":18},"end":{"row":26,"column":19},"action":"insert","lines":["s"]},{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["e"]},{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":["r"]}],[{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":[":"],"id":19}],[{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":[" "],"id":20}],[{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["d"],"id":21},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["a"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["t"]},{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":["a"]}],[{"start":{"row":26,"column":27},"end":{"row":26,"column":29},"action":"insert","lines":["[]"],"id":22}],[{"start":{"row":26,"column":28},"end":{"row":26,"column":30},"action":"insert","lines":["''"],"id":23}],[{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"insert","lines":["u"],"id":24},{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"insert","lines":["s"]},{"start":{"row":26,"column":31},"end":{"row":26,"column":32},"action":"insert","lines":["e"]},{"start":{"row":26,"column":32},"end":{"row":26,"column":33},"action":"insert","lines":["r"]}],[{"start":{"row":26,"column":6},"end":{"row":26,"column":17},"action":"remove","lines":["this.state."],"id":25}],[{"start":{"row":25,"column":5},"end":{"row":27,"column":8},"action":"remove","lines":["Socket.on('user received', (data) =>{","    \t\tuser: data['user']","    \t});"],"id":35},{"start":{"row":25,"column":5},"end":{"row":27,"column":8},"action":"insert","lines":["Socket.on('user received', (data) =>{","    \t\tthis.state.user = data['user']","    \t});"]}],[{"start":{"row":27,"column":8},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":36},{"start":{"row":28,"column":0},"end":{"row":28,"column":5},"action":"insert","lines":["    \t"]},{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"insert","lines":["c"]},{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["o"]}],[{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["n"],"id":37},{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["s"]},{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"insert","lines":["o"]},{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"insert","lines":["l"]},{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"insert","lines":["e"]}],[{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"insert","lines":["."],"id":38},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"insert","lines":["l"]},{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"insert","lines":["o"]},{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"insert","lines":["g"]}],[{"start":{"row":28,"column":15},"end":{"row":28,"column":16},"action":"remove","lines":["g"],"id":39},{"start":{"row":28,"column":14},"end":{"row":28,"column":15},"action":"remove","lines":["o"]},{"start":{"row":28,"column":13},"end":{"row":28,"column":14},"action":"remove","lines":["l"]},{"start":{"row":28,"column":12},"end":{"row":28,"column":13},"action":"remove","lines":["."]},{"start":{"row":28,"column":11},"end":{"row":28,"column":12},"action":"remove","lines":["e"]},{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"remove","lines":["l"]},{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"remove","lines":["o"]},{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"remove","lines":["s"]},{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"remove","lines":["n"]},{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"remove","lines":["o"]},{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"remove","lines":["c"]}],[{"start":{"row":28,"column":4},"end":{"row":28,"column":5},"action":"remove","lines":["\t"],"id":40},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]},{"start":{"row":27,"column":8},"end":{"row":28,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":19,"column":57},"end":{"row":20,"column":0},"action":"insert","lines":["",""],"id":92},{"start":{"row":20,"column":0},"end":{"row":20,"column":8},"action":"insert","lines":["        "]},{"start":{"row":20,"column":8},"end":{"row":20,"column":9},"action":"insert","lines":["t"]},{"start":{"row":20,"column":9},"end":{"row":20,"column":10},"action":"insert","lines":["h"]},{"start":{"row":20,"column":10},"end":{"row":20,"column":11},"action":"insert","lines":["i"]}],[{"start":{"row":20,"column":11},"end":{"row":20,"column":12},"action":"insert","lines":["s"],"id":93},{"start":{"row":20,"column":12},"end":{"row":20,"column":13},"action":"insert","lines":["."]},{"start":{"row":20,"column":13},"end":{"row":20,"column":14},"action":"insert","lines":["c"]},{"start":{"row":20,"column":14},"end":{"row":20,"column":15},"action":"insert","lines":["o"]},{"start":{"row":20,"column":15},"end":{"row":20,"column":16},"action":"insert","lines":["m"]}],[{"start":{"row":20,"column":13},"end":{"row":20,"column":16},"action":"remove","lines":["com"],"id":94},{"start":{"row":20,"column":13},"end":{"row":20,"column":30},"action":"insert","lines":["componentDidMount"]}],[{"start":{"row":20,"column":30},"end":{"row":20,"column":31},"action":"insert","lines":["."],"id":95}],[{"start":{"row":20,"column":30},"end":{"row":20,"column":31},"action":"remove","lines":["."],"id":96}],[{"start":{"row":20,"column":30},"end":{"row":20,"column":31},"action":"insert","lines":[" "],"id":97},{"start":{"row":20,"column":31},"end":{"row":20,"column":32},"action":"insert","lines":["="]}],[{"start":{"row":20,"column":32},"end":{"row":20,"column":33},"action":"insert","lines":[" "],"id":98},{"start":{"row":20,"column":33},"end":{"row":20,"column":34},"action":"insert","lines":["t"]},{"start":{"row":20,"column":34},"end":{"row":20,"column":35},"action":"insert","lines":["h"]},{"start":{"row":20,"column":35},"end":{"row":20,"column":36},"action":"insert","lines":["i"]},{"start":{"row":20,"column":36},"end":{"row":20,"column":37},"action":"insert","lines":["s"]},{"start":{"row":20,"column":37},"end":{"row":20,"column":38},"action":"insert","lines":["."]}],[{"start":{"row":20,"column":38},"end":{"row":20,"column":39},"action":"insert","lines":["c"],"id":99},{"start":{"row":20,"column":39},"end":{"row":20,"column":40},"action":"insert","lines":["o"]},{"start":{"row":20,"column":40},"end":{"row":20,"column":41},"action":"insert","lines":["m"]}],[{"start":{"row":20,"column":38},"end":{"row":20,"column":41},"action":"remove","lines":["com"],"id":100},{"start":{"row":20,"column":38},"end":{"row":20,"column":55},"action":"insert","lines":["componentDidMount"]}],[{"start":{"row":20,"column":55},"end":{"row":20,"column":56},"action":"insert","lines":["."],"id":101},{"start":{"row":20,"column":56},"end":{"row":20,"column":57},"action":"insert","lines":["b"]},{"start":{"row":20,"column":57},"end":{"row":20,"column":58},"action":"insert","lines":["i"]},{"start":{"row":20,"column":58},"end":{"row":20,"column":59},"action":"insert","lines":["n"]},{"start":{"row":20,"column":59},"end":{"row":20,"column":60},"action":"insert","lines":["d"]}],[{"start":{"row":20,"column":60},"end":{"row":20,"column":62},"action":"insert","lines":["()"],"id":102}],[{"start":{"row":20,"column":61},"end":{"row":20,"column":62},"action":"insert","lines":["t"],"id":103},{"start":{"row":20,"column":62},"end":{"row":20,"column":63},"action":"insert","lines":["h"]},{"start":{"row":20,"column":63},"end":{"row":20,"column":64},"action":"insert","lines":["i"]},{"start":{"row":20,"column":64},"end":{"row":20,"column":65},"action":"insert","lines":["s"]}],[{"start":{"row":20,"column":66},"end":{"row":20,"column":67},"action":"insert","lines":[";"],"id":104}],[{"start":{"row":21,"column":5},"end":{"row":22,"column":0},"action":"insert","lines":["",""],"id":105},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "]},{"start":{"row":22,"column":4},"end":{"row":23,"column":0},"action":"insert","lines":["",""]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":23,"column":4},"end":{"row":41,"column":5},"action":"insert","lines":["componentDidMount(){","    \t//todo emit users list","    \tSocket.on('user received', (data) =>{","    \t\tconsole.log('user panel hi there')","    \t\tconst duplicate = this.state.users.map( user => {","    \t\t\treturn user.username == data['user'].username;","    \t\t});","    \t\t","    \t\tif(!duplicate.includes(true)){","    \t\t\tthis.state.users.push(data['user'])","\t    \t\tthis.setState({","\t    \t\t\t'users': this.state.users","\t    \t\t});","\t    \t\tSocket.emit('users list', {","\t\t    \t\t'users_list': this.state.users","\t\t    \t});","    \t\t}","    \t});","    }"],"id":106}],[{"start":{"row":26,"column":19},"end":{"row":26,"column":29},"action":"remove","lines":["user panel"],"id":107},{"start":{"row":26,"column":19},"end":{"row":26,"column":20},"action":"insert","lines":["m"]},{"start":{"row":26,"column":20},"end":{"row":26,"column":21},"action":"insert","lines":["e"]},{"start":{"row":26,"column":21},"end":{"row":26,"column":22},"action":"insert","lines":["s"]},{"start":{"row":26,"column":22},"end":{"row":26,"column":23},"action":"insert","lines":["s"]},{"start":{"row":26,"column":23},"end":{"row":26,"column":24},"action":"insert","lines":["a"]},{"start":{"row":26,"column":24},"end":{"row":26,"column":25},"action":"insert","lines":["g"]},{"start":{"row":26,"column":25},"end":{"row":26,"column":26},"action":"insert","lines":["e"]}],[{"start":{"row":26,"column":26},"end":{"row":26,"column":27},"action":"insert","lines":[" "],"id":108},{"start":{"row":26,"column":27},"end":{"row":26,"column":28},"action":"insert","lines":["s"]},{"start":{"row":26,"column":28},"end":{"row":26,"column":29},"action":"insert","lines":["e"]},{"start":{"row":26,"column":29},"end":{"row":26,"column":30},"action":"insert","lines":["n"]},{"start":{"row":26,"column":30},"end":{"row":26,"column":31},"action":"insert","lines":["t"]}],[{"start":{"row":27,"column":6},"end":{"row":38,"column":10},"action":"remove","lines":["const duplicate = this.state.users.map( user => {","    \t\t\treturn user.username == data['user'].username;","    \t\t});","    \t\t","    \t\tif(!duplicate.includes(true)){","    \t\t\tthis.state.users.push(data['user'])","\t    \t\tthis.setState({","\t    \t\t\t'users': this.state.users","\t    \t\t});","\t    \t\tSocket.emit('users list', {","\t\t    \t\t'users_list': this.state.users","\t\t    \t});"],"id":109}],[{"start":{"row":27,"column":6},"end":{"row":27,"column":7},"action":"insert","lines":["t"],"id":110},{"start":{"row":27,"column":7},"end":{"row":27,"column":8},"action":"insert","lines":["h"]},{"start":{"row":27,"column":8},"end":{"row":27,"column":9},"action":"insert","lines":["i"]},{"start":{"row":27,"column":9},"end":{"row":27,"column":10},"action":"insert","lines":["s"]}],[{"start":{"row":27,"column":10},"end":{"row":27,"column":11},"action":"insert","lines":["."],"id":111},{"start":{"row":27,"column":11},"end":{"row":27,"column":12},"action":"insert","lines":["s"]},{"start":{"row":27,"column":12},"end":{"row":27,"column":13},"action":"insert","lines":["t"]},{"start":{"row":27,"column":13},"end":{"row":27,"column":14},"action":"insert","lines":["a"]},{"start":{"row":27,"column":14},"end":{"row":27,"column":15},"action":"insert","lines":["t"]},{"start":{"row":27,"column":15},"end":{"row":27,"column":16},"action":"insert","lines":["e"]},{"start":{"row":27,"column":16},"end":{"row":27,"column":17},"action":"insert","lines":["."]}],[{"start":{"row":27,"column":17},"end":{"row":27,"column":18},"action":"insert","lines":["u"],"id":112},{"start":{"row":27,"column":18},"end":{"row":27,"column":19},"action":"insert","lines":["s"]},{"start":{"row":27,"column":19},"end":{"row":27,"column":20},"action":"insert","lines":["e"]},{"start":{"row":27,"column":20},"end":{"row":27,"column":21},"action":"insert","lines":["r"]}],[{"start":{"row":27,"column":21},"end":{"row":27,"column":22},"action":"insert","lines":[" "],"id":113},{"start":{"row":27,"column":22},"end":{"row":27,"column":23},"action":"insert","lines":["="]}],[{"start":{"row":27,"column":23},"end":{"row":27,"column":24},"action":"insert","lines":[" "],"id":114},{"start":{"row":27,"column":24},"end":{"row":27,"column":25},"action":"insert","lines":["d"]},{"start":{"row":27,"column":25},"end":{"row":27,"column":26},"action":"insert","lines":["a"]},{"start":{"row":27,"column":26},"end":{"row":27,"column":27},"action":"insert","lines":["t"]},{"start":{"row":27,"column":27},"end":{"row":27,"column":28},"action":"insert","lines":["a"]}],[{"start":{"row":27,"column":28},"end":{"row":27,"column":30},"action":"insert","lines":["[]"],"id":115}],[{"start":{"row":27,"column":29},"end":{"row":27,"column":31},"action":"insert","lines":["''"],"id":116}],[{"start":{"row":27,"column":30},"end":{"row":27,"column":31},"action":"insert","lines":["u"],"id":117},{"start":{"row":27,"column":31},"end":{"row":27,"column":32},"action":"insert","lines":["s"]},{"start":{"row":27,"column":32},"end":{"row":27,"column":33},"action":"insert","lines":["e"]},{"start":{"row":27,"column":33},"end":{"row":27,"column":34},"action":"insert","lines":["r"]}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"remove","lines":["}"],"id":118},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]},{"start":{"row":29,"column":8},"end":{"row":30,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":29,"column":8},"end":{"row":30,"column":0},"action":"insert","lines":["",""],"id":119},{"start":{"row":30,"column":0},"end":{"row":30,"column":5},"action":"insert","lines":["    \t"]}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"remove","lines":["\t"],"id":120}],[{"start":{"row":30,"column":4},"end":{"row":30,"column":5},"action":"insert","lines":["}"],"id":121},{"start":{"row":30,"column":0},"end":{"row":30,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":29,"column":5},"end":{"row":29,"column":6},"action":"remove","lines":["}"],"id":122},{"start":{"row":29,"column":4},"end":{"row":29,"column":5},"action":"remove","lines":["\t"]},{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"remove","lines":["    "]},{"start":{"row":28,"column":7},"end":{"row":29,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":29,"column":0},"end":{"row":29,"column":4},"action":"insert","lines":["    "],"id":123}],[{"start":{"row":23,"column":24},"end":{"row":24,"column":27},"action":"remove","lines":["","    \t//todo emit users list"],"id":124}],[{"start":{"row":27,"column":9},"end":{"row":28,"column":0},"action":"insert","lines":["",""],"id":125},{"start":{"row":28,"column":0},"end":{"row":28,"column":6},"action":"insert","lines":["    \t\t"]},{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"insert","lines":["c"]},{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"insert","lines":["o"]},{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"insert","lines":["n"]},{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"insert","lines":["s"]},{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"insert","lines":["o"]}],[{"start":{"row":28,"column":10},"end":{"row":28,"column":11},"action":"remove","lines":["o"],"id":126},{"start":{"row":28,"column":9},"end":{"row":28,"column":10},"action":"remove","lines":["s"]},{"start":{"row":28,"column":8},"end":{"row":28,"column":9},"action":"remove","lines":["n"]},{"start":{"row":28,"column":7},"end":{"row":28,"column":8},"action":"remove","lines":["o"]},{"start":{"row":28,"column":6},"end":{"row":28,"column":7},"action":"remove","lines":["c"]},{"start":{"row":28,"column":5},"end":{"row":28,"column":6},"action":"remove","lines":["\t"]},{"start":{"row":28,"column":4},"end":{"row":28,"column":5},"action":"remove","lines":["\t"]},{"start":{"row":28,"column":0},"end":{"row":28,"column":4},"action":"remove","lines":["    "]}],[{"start":{"row":27,"column":9},"end":{"row":28,"column":0},"action":"remove","lines":["",""],"id":127}],[{"start":{"row":65,"column":20},"end":{"row":66,"column":0},"action":"insert","lines":["",""],"id":128},{"start":{"row":66,"column":0},"end":{"row":66,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":66,"column":4},"end":{"row":66,"column":8},"action":"remove","lines":["    "],"id":129}],[{"start":{"row":66,"column":4},"end":{"row":66,"column":5},"action":"insert","lines":["c"],"id":130},{"start":{"row":66,"column":5},"end":{"row":66,"column":6},"action":"insert","lines":["o"]},{"start":{"row":66,"column":6},"end":{"row":66,"column":7},"action":"insert","lines":["n"]},{"start":{"row":66,"column":7},"end":{"row":66,"column":8},"action":"insert","lines":["s"]},{"start":{"row":66,"column":8},"end":{"row":66,"column":9},"action":"insert","lines":["o"]},{"start":{"row":66,"column":9},"end":{"row":66,"column":10},"action":"insert","lines":["l"]}],[{"start":{"row":66,"column":10},"end":{"row":66,"column":11},"action":"insert","lines":["e"],"id":131},{"start":{"row":66,"column":11},"end":{"row":66,"column":12},"action":"insert","lines":["."]},{"start":{"row":66,"column":12},"end":{"row":66,"column":13},"action":"insert","lines":["l"]},{"start":{"row":66,"column":13},"end":{"row":66,"column":14},"action":"insert","lines":["o"]},{"start":{"row":66,"column":14},"end":{"row":66,"column":15},"action":"insert","lines":["g"]}],[{"start":{"row":66,"column":15},"end":{"row":66,"column":17},"action":"insert","lines":["()"],"id":132}],[{"start":{"row":66,"column":16},"end":{"row":66,"column":17},"action":"insert","lines":["t"],"id":133},{"start":{"row":66,"column":17},"end":{"row":66,"column":18},"action":"insert","lines":["h"]},{"start":{"row":66,"column":18},"end":{"row":66,"column":19},"action":"insert","lines":["i"]},{"start":{"row":66,"column":19},"end":{"row":66,"column":20},"action":"insert","lines":["s"]},{"start":{"row":66,"column":20},"end":{"row":66,"column":21},"action":"insert","lines":["."]},{"start":{"row":66,"column":21},"end":{"row":66,"column":22},"action":"insert","lines":["s"]}],[{"start":{"row":66,"column":22},"end":{"row":66,"column":23},"action":"insert","lines":["a"],"id":134},{"start":{"row":66,"column":23},"end":{"row":66,"column":24},"action":"insert","lines":["t"]},{"start":{"row":66,"column":24},"end":{"row":66,"column":25},"action":"insert","lines":["e"]}],[{"start":{"row":66,"column":24},"end":{"row":66,"column":25},"action":"remove","lines":["e"],"id":135},{"start":{"row":66,"column":23},"end":{"row":66,"column":24},"action":"remove","lines":["t"]},{"start":{"row":66,"column":22},"end":{"row":66,"column":23},"action":"remove","lines":["a"]}],[{"start":{"row":66,"column":22},"end":{"row":66,"column":23},"action":"insert","lines":["t"],"id":136},{"start":{"row":66,"column":23},"end":{"row":66,"column":24},"action":"insert","lines":["a"]},{"start":{"row":66,"column":24},"end":{"row":66,"column":25},"action":"insert","lines":["t"]},{"start":{"row":66,"column":25},"end":{"row":66,"column":26},"action":"insert","lines":["e"]},{"start":{"row":66,"column":26},"end":{"row":66,"column":27},"action":"insert","lines":["."]}],[{"start":{"row":66,"column":27},"end":{"row":66,"column":28},"action":"insert","lines":["u"],"id":137},{"start":{"row":66,"column":28},"end":{"row":66,"column":29},"action":"insert","lines":["s"]},{"start":{"row":66,"column":29},"end":{"row":66,"column":30},"action":"insert","lines":["e"]},{"start":{"row":66,"column":30},"end":{"row":66,"column":31},"action":"insert","lines":["r"]}],[{"start":{"row":66,"column":16},"end":{"row":66,"column":17},"action":"insert","lines":["'"],"id":138},{"start":{"row":66,"column":17},"end":{"row":66,"column":18},"action":"insert","lines":["u"]},{"start":{"row":66,"column":18},"end":{"row":66,"column":19},"action":"insert","lines":["s"]},{"start":{"row":66,"column":19},"end":{"row":66,"column":20},"action":"insert","lines":["e"]},{"start":{"row":66,"column":20},"end":{"row":66,"column":21},"action":"insert","lines":["r"]},{"start":{"row":66,"column":21},"end":{"row":66,"column":22},"action":"insert","lines":[":"]}],[{"start":{"row":66,"column":22},"end":{"row":66,"column":23},"action":"insert","lines":["'"],"id":139},{"start":{"row":66,"column":23},"end":{"row":66,"column":24},"action":"insert","lines":[","]}],[{"start":{"row":66,"column":24},"end":{"row":66,"column":25},"action":"insert","lines":[" "],"id":140}],[{"start":{"row":69,"column":47},"end":{"row":69,"column":48},"action":"insert","lines":["u"],"id":143},{"start":{"row":69,"column":48},"end":{"row":69,"column":49},"action":"insert","lines":["s"]},{"start":{"row":69,"column":49},"end":{"row":69,"column":50},"action":"insert","lines":["e"]}],[{"start":{"row":69,"column":47},"end":{"row":69,"column":50},"action":"remove","lines":["use"],"id":144},{"start":{"row":69,"column":47},"end":{"row":69,"column":55},"action":"insert","lines":["username"]}],[{"start":{"row":69,"column":55},"end":{"row":69,"column":56},"action":"insert","lines":["."],"id":145}],[{"start":{"row":2,"column":46},"end":{"row":3,"column":33},"action":"remove","lines":["","import {ChatBot} from './ChatBot'"],"id":146}],[{"start":{"row":11,"column":12},"end":{"row":12,"column":23},"action":"remove","lines":["","\t\t\tchatbotSend: <div />"],"id":147}],[{"start":{"row":29,"column":28},"end":{"row":30,"column":41},"action":"remove","lines":["","    \tthis.state.chatbotSend = <ChatBot />"],"id":148}],[{"start":{"row":82,"column":13},"end":{"row":83,"column":31},"action":"remove","lines":["","    \t\t\t{this.state.chatbotSend}"],"id":149}],[{"start":{"row":41,"column":0},"end":{"row":43,"column":8},"action":"remove","lines":["    \tSocket.emit('user', {","    \t    'user': this.state.user","    \t});"],"id":150},{"start":{"row":40,"column":5},"end":{"row":41,"column":0},"action":"remove","lines":["",""]}]]},"ace":{"folds":[],"scrolltop":742.5,"scrollleft":0,"selection":{"start":{"row":70,"column":21},"end":{"row":70,"column":21},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":{"row":5,"state":"no_regex","mode":"ace/mode/javascript"}},"timestamp":1583288220059,"hash":"8a2ad5ff1bbe67581546466674bad5e061eec5f7"}