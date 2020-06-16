var box = document.getElementById('inputs')
var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
var charactersLength = characters.length;

function makeId(length) {
    var result           = '';
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function addRow(){
var div = document.createElement('div');
var atag = document.createElement('a');
var image = document.createElement('img');
var element = document.createElement('input');
var view = document.createElement('p');
var line = document.createElement('br');
div.id = element.id;
atag.href = `javascript:removeLine('${element.id}')`;
atag.appendChild(image);
image.src = "/static/minus-ico.png";
image.alt = "remove line";
image.style = "width:30px;top:10px;display: inline-block;position:relative";
element.id = makeId(20);
element.oninput = onInput;
view.style = "display: inline-block;margin-left:30px";
view.id = element.id;
div.appendChild(atag)
div.appendChild(element);
div.appendChild(view);
div.appendChild(line);
box.appendChild(div);
}

function onInput(){
    var request = new XMLHttpRequest();
    velem = document.querySelector(`p[id="${this.id}"]`)
    text = encodeURIComponent(this.value);
    request.open('GET', `/get?val=${text}`);
    request.onreadystatechange = (e) => {
        if (request.status == 200){
            velem.innerHTML = request.responseText;
        }
    }
    request.send()
}

function removeLine(n){
let x = document.getElementById('inputs');
    for (node of x.childNodes){
        if (node.id == n){
            x.removeChild(node)
        }
    }
}

function click1(){
    o = document.getElementById("b");
    p = document.getElementById("p");
    if (o.className.includes("active")){
        o.className = "btn1";
        p.innerText = "Mode 1";
    }
    else {
        o.className += " active";
        p.innerText = "Mode 2";
    }
}