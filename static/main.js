
var box = document.getElementById('inputs');
var line = document.createElement('br');

function makeId(length) {
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    var result           = '';
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

function addRowMode1(){
    var div = document.createElement('div');
    var aTag = document.createElement('a');
    var image = document.createElement('img');
    var element = document.createElement('input');
    var view = document.createElement('p');
    element.id = makeId(20);
    element.oninput = onInput;
    div.id = element.id;
    div.style = "width:50%;";
    aTag.href = `javascript:removeLine('${element.id}')`;
    aTag.appendChild(image);
    image.src = "/static/minus-ico.png";
    image.alt = "remove line";
    image.style = "width:30px;top:10px;display: inline-block;position:relative;";
    view.style = "display: inline-block;margin-left:30px";
    view.id = element.id;
    div.appendChild(aTag)
    div.appendChild(element);
    div.appendChild(view);
    div.appendChild(line);
    box.appendChild(div);
}

function addRowMode2(){
    var div = document.createElement('div');
    var aTag = document.createElement('a');
    var aTag1 = document.createElement('a');
    var dimage = document.createElement('img');
    var pimage = document.createElement('img');
    var view = document.createElement('h4');
    div.style = "width:50%";
    dimage.src = "/static/minus-ico.png";
    pimage.src = "/static/arrow.png";
    pimage.alt = "press here to edit";
    dimage.alt = "remove line";
    dimage.style = "width:30px;top:10px;display: inline-block;position:relative;";
    pimage.style = "width:30px;top:10px;display: inline-block;position:relative;margin-right:5px;";
    view.style = "display: inline-block;color:black;";
    view.id = makeId(20);
    aTag1.href = `javascript:edit('${view.id}')`;
    aTag.href = `javascript:removeLine('${view.id}')`;
    div.id = view.id;
    aTag.appendChild(dimage);
    aTag1.append(pimage);
    aTag1.appendChild(view);
    div.appendChild(aTag);
    div.appendChild(aTag1);
    div.appendChild(line);
    box.appendChild(div);


}

function addRow(){
    var mode = document.getElementById('p');
    switch (mode.innerText) {
        case "Mode 1":
            addRowMode1();
            break;

        case "Mode 2":
            addRowMode2();
            break;
    }
}

function onInput(){
    var request = new XMLHttpRequest();
    var velem, text;
    velem = document.querySelector(`p[id="${this.id}"]`)
    text = encodeURIComponent(this.value);
    request.open('GET', `/get?val=${text}`);
    request.onreadystatechange = (e) => {
        if (request.status === 200){
            velem.innerHTML = request.responseText;
        }
    }
    request.send()
}

function removeLine(n){
let x = document.getElementById('inputs');
    var node;
    for (node of x.childNodes){
        if (node.id === n){
            x.removeChild(node);
        }
    }
}

function click1(){
    var o, p;
    addMode2Box();
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

function addMode2Box(){
    var box = document.getElementById('mbox');
    var container = document.getElementById('d');
    if(box === null){
        box = document.createElement('input');
        box.id = "mbox";
        box.style = "margin-top:5px;margin-left:60px;";
        box.setAttribute('oninput', 'boxWrite()');
        container.appendChild(line);
        container.appendChild(document.createElement('hr'));
        container.appendChild(box);
    }
}

function edit(vid) {
    mbox.focus();
    mbox.setAttribute('to', vid);
}

function boxWrite() {
    var h4 = mbox.getAttribute('to');
    var request = new XMLHttpRequest();
    var velem, text;
    velem = document.querySelector(`h4[id="${h4}"]`)
    text = encodeURIComponent(mbox.value);
    request.open('GET', `/get?val=${text}`);
    request.onreadystatechange = (e) => {
        if (request.status === 200){
            velem.innerHTML = request.responseText;
        }
    }
    request.send()
}