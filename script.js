var print  = document.querySelector('input');
var error  = document.getElementById('error');
var button = document.getElementById('bouton');
var list   = document.querySelector('ul');
var droppers   = document.querySelectorAll('.dropper');

button.onclick = function() {
	action()
}

print.onkeypress = function(e){
    if (e.keyCode == 13){
        action()
	}
};


var action = function () {
	var newDiv = document.createElement('li');
	newDiv.setAttribute('draggable', true);
	newDiv.setAttribute("id", Math.random())
	list.appendChild(newDiv)

	var paragraphe = document.createElement('p');
	newDiv.appendChild(paragraphe)





	if(print.value === ""){
		return  error.innerHTML ="Oups ! Tu as rien ecris !"
	}
	
	error.innerHTML = null;

	paragraphe.innerHTML += "- " + print.value+ "<br>"
	print.value = null;
	newDiv.className = 'active';

	
	var newButton = document.createElement('button')
	newButton.innerHTML ="X";
	newButton.onclick = function () {
		newDiv.remove();
		newButton.remove();
	};
	newDiv.appendChild(newButton);
}





document.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("id", event.target.id);
    error.innerHTML = "Started to drag the p element.";
});

document.addEventListener("dragend", function(event) {
    error.innerHTML = "";
});

/* Events fired on the drop target */
document.addEventListener("dragover", function(event) {
    event.preventDefault();
    error.innerHTML = "Finished dragging the p element.";
});

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if ( event.target.className == "droptarget" ) {
        var data = event.dataTransfer.getData("id");
        event.target.appendChild(document.getElementById(data));
    }
});



/*var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
	
	for(var i = 0; i<letters.length; i++){
			if(!print.value.includes(letters[i])){
				return error.innerHTML ="Oups ! Ceci ne veut rien dire"
			}
		
			if(print.value === ","){
			return  error.innerHTML ="Oups ! Tu as rien ecris !"
			}
		}*/