
if(localStorage.length=0){
	var div = this.parentElement;
	div.style.display = "none";
}
else
{var li = document.createElement("li");
var todo = localStorage.getItem("todo");
var t = document.createTextNode(todo);
li.appendChild(t);
document.getElementById("myUL").appendChild(li);
var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);
}


  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
	localStorage.removeItem("todo");
  }
}


var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);
document.getElementById("clickAdd").addEventListener('click', this.myFunction.bind(this), false);



function newElement() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  localStorage.todo = inputValue;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Input can not be empty");
  } else {
    document.getElementById("myUL").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);



  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}

