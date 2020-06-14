function makeId(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


function addRow(){
var div = document.createElement('div');
var box = document.getElementById('inputs')
var line = document.createElement('br');
var element = document.createElement('input');
var view = document.createElement('p');
var atag = document.createElement('a')
var image = document.createElement('img');
image.src = "/static/minus-ico.png";
image.alt = "remove line"
element.id = makeId(20);
div.id = element.id
atag.href = `javascript:removeLine('${element.id}')`;
image.style = "width:30px;top:10px;display: inline-block;position:relative"
atag.appendChild(image);
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
velem = document.querySelector(`p[id="${this.id}"]`)
velem.innerHTML = `\\[${this.value}\\]`
}
function removeLine(n){

let x = document.getElementById('inputs');
for(node of x.childNodes){
if(node.id == n){x.removeChild(node)}
}}