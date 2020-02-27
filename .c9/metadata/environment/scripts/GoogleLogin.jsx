{"filter":false,"title":"GoogleLogin.jsx","tooltip":"/scripts/GoogleLogin.jsx","undoManager":{"mark":56,"position":56,"stack":[[{"start":{"row":0,"column":0},"end":{"row":4,"column":47},"action":"insert","lines":["import * as React from 'react';","import { Socket } from './Socket'","import {User, Message} from './MessageObjects'","import {ChatBot} from './ChatBot'","import { GoogleLogin } from 'react-googe-login'"],"id":1}],[{"start":{"row":1,"column":0},"end":{"row":3,"column":33},"action":"remove","lines":["import { Socket } from './Socket'","import {User, Message} from './MessageObjects'","import {ChatBot} from './ChatBot'"],"id":2},{"start":{"row":0,"column":31},"end":{"row":1,"column":0},"action":"remove","lines":["",""]}],[{"start":{"row":1,"column":47},"end":{"row":2,"column":0},"action":"insert","lines":["",""],"id":3},{"start":{"row":2,"column":0},"end":{"row":3,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":3,"column":0},"end":{"row":5,"column":1},"action":"insert","lines":["const responseGoogle = (response) => {","  console.log(response);","}"],"id":4}],[{"start":{"row":5,"column":1},"end":{"row":6,"column":0},"action":"insert","lines":["",""],"id":5},{"start":{"row":6,"column":0},"end":{"row":7,"column":0},"action":"insert","lines":["",""]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":1},"action":"insert","lines":["e"],"id":6},{"start":{"row":7,"column":1},"end":{"row":7,"column":2},"action":"insert","lines":["x"]},{"start":{"row":7,"column":2},"end":{"row":7,"column":3},"action":"insert","lines":["p"]}],[{"start":{"row":7,"column":0},"end":{"row":7,"column":3},"action":"remove","lines":["exp"],"id":7},{"start":{"row":7,"column":0},"end":{"row":7,"column":6},"action":"insert","lines":["export"]}],[{"start":{"row":7,"column":6},"end":{"row":7,"column":7},"action":"insert","lines":[" "],"id":8},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["G"]},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["o"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["o"]}],[{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"remove","lines":["o"],"id":9},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"remove","lines":["o"]},{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"remove","lines":["G"]}],[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["G"],"id":10}],[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"remove","lines":["G"],"id":11}],[{"start":{"row":7,"column":7},"end":{"row":7,"column":8},"action":"insert","lines":["c"],"id":12},{"start":{"row":7,"column":8},"end":{"row":7,"column":9},"action":"insert","lines":["l"]},{"start":{"row":7,"column":9},"end":{"row":7,"column":10},"action":"insert","lines":["a"]},{"start":{"row":7,"column":10},"end":{"row":7,"column":11},"action":"insert","lines":["s"]},{"start":{"row":7,"column":11},"end":{"row":7,"column":12},"action":"insert","lines":["s"]}],[{"start":{"row":7,"column":12},"end":{"row":7,"column":13},"action":"insert","lines":[" "],"id":13}],[{"start":{"row":7,"column":13},"end":{"row":7,"column":14},"action":"insert","lines":["L"],"id":14},{"start":{"row":7,"column":14},"end":{"row":7,"column":15},"action":"insert","lines":["o"]},{"start":{"row":7,"column":15},"end":{"row":7,"column":16},"action":"insert","lines":["g"]},{"start":{"row":7,"column":16},"end":{"row":7,"column":17},"action":"insert","lines":["i"]},{"start":{"row":7,"column":17},"end":{"row":7,"column":18},"action":"insert","lines":["n"]}],[{"start":{"row":7,"column":18},"end":{"row":7,"column":19},"action":"insert","lines":[" "],"id":15},{"start":{"row":7,"column":19},"end":{"row":7,"column":20},"action":"insert","lines":["e"]},{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["s"]}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"remove","lines":["s"],"id":16}],[{"start":{"row":7,"column":20},"end":{"row":7,"column":21},"action":"insert","lines":["x"],"id":17},{"start":{"row":7,"column":21},"end":{"row":7,"column":22},"action":"insert","lines":["t"]},{"start":{"row":7,"column":22},"end":{"row":7,"column":23},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":19},"end":{"row":7,"column":23},"action":"remove","lines":["exte"],"id":18},{"start":{"row":7,"column":19},"end":{"row":7,"column":26},"action":"insert","lines":["extends"]}],[{"start":{"row":7,"column":26},"end":{"row":7,"column":27},"action":"insert","lines":[" "],"id":19},{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":["r"]}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"remove","lines":["r"],"id":20}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":28},"action":"insert","lines":["R"],"id":21},{"start":{"row":7,"column":28},"end":{"row":7,"column":29},"action":"insert","lines":["e"]}],[{"start":{"row":7,"column":27},"end":{"row":7,"column":29},"action":"remove","lines":["Re"],"id":22},{"start":{"row":7,"column":27},"end":{"row":7,"column":32},"action":"insert","lines":["React"]}],[{"start":{"row":7,"column":32},"end":{"row":7,"column":33},"action":"insert","lines":["."],"id":23}],[{"start":{"row":7,"column":33},"end":{"row":7,"column":34},"action":"insert","lines":["C"],"id":24},{"start":{"row":7,"column":34},"end":{"row":7,"column":35},"action":"insert","lines":["o"]},{"start":{"row":7,"column":35},"end":{"row":7,"column":36},"action":"insert","lines":["m"]}],[{"start":{"row":7,"column":33},"end":{"row":7,"column":36},"action":"remove","lines":["Com"],"id":25},{"start":{"row":7,"column":33},"end":{"row":7,"column":42},"action":"insert","lines":["Component"]}],[{"start":{"row":7,"column":42},"end":{"row":7,"column":43},"action":"insert","lines":[" "],"id":26},{"start":{"row":7,"column":43},"end":{"row":7,"column":44},"action":"insert","lines":["{"]}],[{"start":{"row":7,"column":44},"end":{"row":9,"column":1},"action":"insert","lines":["","    ","}"],"id":27}],[{"start":{"row":8,"column":4},"end":{"row":8,"column":5},"action":"insert","lines":["r"],"id":28},{"start":{"row":8,"column":5},"end":{"row":8,"column":6},"action":"insert","lines":["e"]},{"start":{"row":8,"column":6},"end":{"row":8,"column":7},"action":"insert","lines":["n"]},{"start":{"row":8,"column":7},"end":{"row":8,"column":8},"action":"insert","lines":["d"]},{"start":{"row":8,"column":8},"end":{"row":8,"column":9},"action":"insert","lines":["e"]},{"start":{"row":8,"column":9},"end":{"row":8,"column":10},"action":"insert","lines":["r"]}],[{"start":{"row":8,"column":10},"end":{"row":8,"column":12},"action":"insert","lines":["()"],"id":29}],[{"start":{"row":8,"column":12},"end":{"row":8,"column":13},"action":"insert","lines":[" "],"id":30},{"start":{"row":8,"column":13},"end":{"row":8,"column":14},"action":"insert","lines":["{"]}],[{"start":{"row":8,"column":14},"end":{"row":10,"column":5},"action":"insert","lines":["","        ","    }"],"id":31}],[{"start":{"row":9,"column":8},"end":{"row":15,"column":5},"action":"insert","lines":["<GoogleLogin","    clientId=\"658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com\"","    buttonText=\"Login\"","    onSuccess={responseGoogle}","    onFailure={responseGoogle}","    cookiePolicy={'single_host_origin'}","  />,"],"id":32}],[{"start":{"row":15,"column":4},"end":{"row":15,"column":5},"action":"remove","lines":[","],"id":33}],[{"start":{"row":7,"column":44},"end":{"row":8,"column":0},"action":"insert","lines":["",""],"id":34},{"start":{"row":8,"column":0},"end":{"row":8,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":8,"column":4},"end":{"row":13,"column":8},"action":"insert","lines":["handleSubmit(event) {","    \tlet auth = gapi.auth2.getAuthInstance();","    \tlet user = auth.currentUser.get();","       if (user.isSignedIn()) {","            console.log(“google token ” + user.getAuthResponse().id_token);","       }"],"id":35}],[{"start":{"row":12,"column":38},"end":{"row":12,"column":39},"action":"remove","lines":["”"],"id":36}],[{"start":{"row":12,"column":38},"end":{"row":12,"column":40},"action":"insert","lines":["\"\""],"id":37}],[{"start":{"row":12,"column":39},"end":{"row":12,"column":40},"action":"remove","lines":["\""],"id":38}],[{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"remove","lines":["“"],"id":39}],[{"start":{"row":12,"column":24},"end":{"row":12,"column":25},"action":"insert","lines":["\""],"id":40}],[{"start":{"row":13,"column":8},"end":{"row":14,"column":0},"action":"insert","lines":["",""],"id":41},{"start":{"row":14,"column":0},"end":{"row":14,"column":7},"action":"insert","lines":["       "]}],[{"start":{"row":15,"column":14},"end":{"row":16,"column":0},"action":"insert","lines":["",""],"id":42},{"start":{"row":16,"column":0},"end":{"row":16,"column":8},"action":"insert","lines":["        "]}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":9},"action":"insert","lines":["r"],"id":43},{"start":{"row":16,"column":9},"end":{"row":16,"column":10},"action":"insert","lines":["e"]},{"start":{"row":16,"column":10},"end":{"row":16,"column":11},"action":"insert","lines":["t"]}],[{"start":{"row":16,"column":8},"end":{"row":16,"column":11},"action":"remove","lines":["ret"],"id":44},{"start":{"row":16,"column":8},"end":{"row":16,"column":14},"action":"insert","lines":["return"]}],[{"start":{"row":16,"column":14},"end":{"row":16,"column":16},"action":"insert","lines":["()"],"id":45}],[{"start":{"row":16,"column":15},"end":{"row":16,"column":16},"action":"remove","lines":[")"],"id":46}],[{"start":{"row":23,"column":4},"end":{"row":24,"column":0},"action":"insert","lines":["",""],"id":47},{"start":{"row":24,"column":0},"end":{"row":24,"column":2},"action":"insert","lines":["  "]},{"start":{"row":24,"column":2},"end":{"row":24,"column":3},"action":"insert","lines":[")"]}],[{"start":{"row":17,"column":0},"end":{"row":17,"column":4},"action":"insert","lines":["    "],"id":48},{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "]},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"insert","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":18,"column":0},"end":{"row":18,"column":4},"action":"insert","lines":["    "],"id":49},{"start":{"row":19,"column":0},"end":{"row":19,"column":4},"action":"insert","lines":["    "]},{"start":{"row":20,"column":0},"end":{"row":20,"column":4},"action":"insert","lines":["    "]},{"start":{"row":21,"column":0},"end":{"row":21,"column":4},"action":"insert","lines":["    "]},{"start":{"row":22,"column":0},"end":{"row":22,"column":4},"action":"insert","lines":["    "]},{"start":{"row":23,"column":0},"end":{"row":23,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":23,"column":12},"end":{"row":23,"column":13},"action":"insert","lines":[","],"id":50}],[{"start":{"row":23,"column":13},"end":{"row":23,"column":14},"action":"insert","lines":[" "],"id":51}],[{"start":{"row":23,"column":14},"end":{"row":24,"column":0},"action":"insert","lines":["document.getElementById('googleButton')",""],"id":52}],[{"start":{"row":23,"column":53},"end":{"row":24,"column":0},"action":"remove","lines":["",""],"id":53}],[{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"remove","lines":[" "],"id":54}],[{"start":{"row":14,"column":6},"end":{"row":14,"column":7},"action":"insert","lines":["}"],"id":55},{"start":{"row":14,"column":0},"end":{"row":14,"column":6},"action":"remove","lines":["      "]},{"start":{"row":14,"column":0},"end":{"row":14,"column":4},"action":"insert","lines":["    "]}],[{"start":{"row":0,"column":31},"end":{"row":1,"column":0},"action":"insert","lines":["",""],"id":56}],[{"start":{"row":1,"column":0},"end":{"row":1,"column":34},"action":"insert","lines":["import { Socket } from './Socket';"],"id":57}]]},"ace":{"folds":[],"scrolltop":0,"scrollleft":0,"selection":{"start":{"row":8,"column":36},"end":{"row":8,"column":36},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1582806244435,"hash":"6a16049307a3916454b3c327a5427d643976114f"}