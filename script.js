var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";

	var btn = document.createElement("button");
	btn.appendChild(document.createTextNode("Delete"));
	li.appendChild(btn);
	btn.onclick = removeParent;
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}



var list = document.getElementsByTagName("li");
	for (var i = 0; i < list.length; i++) {
		list[i].addEventListener("click", liClickToggle);
	}

function liClickToggle() {
	this.classList.toggle("done");
}



var deleteBtn = document.getElementsByClassName("delete");

Array.prototype.slice.call(deleteBtn).forEach(function(item){
	item.addEventListener("click", function(e) {
		e.target.parentNode.remove()
	});
})


function removeParent(evt){
	evt.target.parentNode.remove();
}


button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);